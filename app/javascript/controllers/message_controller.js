import { Controller } from "stimulus";
import { getControllerByName } from "./helper";
export default class extends Controller {
  static targets = ["inputMessage", "composeMessage"];
  static values = { username: String };

  inputMessageKeyUp(event) {
    if (event.keyCode == 13) {
      getControllerByName(this, "main").formMessageTarget.requestSubmit();
    }
  }

  usernameValueChanged() {
    if (this.usernameValue == null || this.usernameValue == "") {
      this.element.hidden = true;
    } else {
      this.element.hidden = false;
    }
  }

  showComposeMessage() {
    this.composeMessageTarget.classList.remove("hidden");
    this.composeMessageTarget.classList.add("flex");
  }

  onFormMessageSubmit() {
    this.inputMessageTarget.value = "";
  }

  focusToInput() {
    this.inputMessageTarget.focus();
  }
}
