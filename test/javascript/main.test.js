import mainController from "../../app/javascript/controllers/main_controller";
import userController from "../../app/javascript/controllers/user_controller";
import messageController from "../../app/javascript/controllers/message_controller";
import { startApplication, getControllerByName } from "./test_helper";

describe("Main Controller", () => {
  let app = null;
  beforeEach(() => {
    const div = window.document.createElement("div");
    div.setAttribute("id", "content");
    div.innerHTML = `
      <div data-controller="main" data-main-username-value="">
        <span class="timeago" datetime="${new Date()}"></span>
        <form data-main-target="formMessage" data-action="turbo:submit-end->main#onFormMessageSubmit">
          <div data-controller="user" data-user-username-value="">
            <div data-user-target="formUser">
              <input data-action="keyup->user#inputNameKeyUp" data-user-target="inputName" type="text" name="message[sender]" id="message_sender">
              <a href="#" data-action="user#signin">
                Set name
              </a>
            </div>
            <div data-user-target="signedInMsg"></div>
          </div>
          <div data-controller="message">
            <div class="hidden" data-message-target="composeMessage">
              <input placeholder="Type your message" data-action="keyup->message#inputMessageKeyUp"
                data-message-target="inputMessage"
                type="text" name="message[body]" id="message_body">
              <input type="submit" name="commit" value="Send" data-disable-with="Send">
            </div>
          </div>
        </form>
      </div>
    `;
    window.document.body.appendChild(div);
    app = startApplication();
    app.register("main", mainController);
    app.register("user", userController);
    app.register("message", messageController);
  });

  afterEach(() => {
    window.document.getElementById("content").remove();
    app.stop();
  });

  describe("Load at the first time", () => {
    it("Successfully initialize Timeago.JS", () => {
      const span = window.document.querySelector(".timeago");
      expect(span.getAttribute("timeago-id")).not.toBeNull();
    });

    it("Name must be empty at the first page load", () => {
      const mainCtrl = getControllerByName(app, "main");
      expect(mainCtrl.usernameValue).toBe("");
    });

    it("Form input user, must be shown", () => {
      const formUser = window.document.querySelector(
        '[data-user-target="formUser"]'
      );
      expect(formUser.getAttributeNames()).not.toContain("hidden");
    });

    it("Welcome message must be empty", () => {
      const signedInMsg = window.document.querySelector(
        '[data-user-target="signedInMsg"]'
      );
      expect(signedInMsg.textContent).toBe("");
    });
  });

  describe("User input their name", () => {
    it("Able to type their username", () => {
      const inputName = window.document.querySelector(
        '[data-user-target="inputName"]'
      );
      expect(inputName.getAttributeNames).not.toContain("disabled");
    });

    describe("When submitting username", () => {
      beforeEach(() => {
        const inputName = window.document.querySelector(
          '[data-user-target="inputName"]'
        );
        inputName.value = "Imam";
        const keyboardEvent = new KeyboardEvent("keyup", {
          bubbles: false,
          cancelable: false,
          char: "Enter",
          key: "Enter",
          shiftKey: false,
          keyCode: 13,
        });
        inputName.dispatchEvent(keyboardEvent);
      });

      it("Welcome message must be shown", () => {
        const signedInMsg = window.document.querySelector(
          '[data-user-target="signedInMsg"]'
        );
        expect(signedInMsg.textContent).toBe(
          "Hi Imam, welcome and start chatting!"
        );
      });

      it("User controller username must not empty", () => {
        const userCtrl = getControllerByName(app, "user");
        expect(userCtrl.usernameValue).toBe("Imam");
      });

      it("Form user must be hidden", () => {
        const formUser = window.document.querySelector(
          '[data-user-target="formUser"]'
        );
        expect(formUser.getAttributeNames()).toContain("hidden");
      });

      it("Message composer must be shown", () => {
        const composerMessage = window.document.querySelector(
          '[data-message-target="composeMessage"]'
        );
        expect(composerMessage.classList).not.toContain("hidden");
      });
    });
  });
});
