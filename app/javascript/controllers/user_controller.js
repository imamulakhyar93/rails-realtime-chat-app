import { Controller } from "stimulus";
import { getControllerByName } from "./helper";
import consumer from "../channels/consumer";
export default class extends Controller {
  static targets = ["inputName", "formUser", "welcomeMessage"];
  static values = { username: String };

  get inputName() {
    return this.inputNameTarget.value;
  }

  signIn(event = null) {
    if (event != null) event.preventDefault();
    if (this.inputName == "") return;

    this.setUsername();
    this.hideFormUser();
    this.showFormAndSubcribe();
  }

  hideFormUser() {
    this.formUserTarget.classList.add("hidden");
  }

  showFormAndSubcribe() {
    getControllerByName(this, "message").showComposeMessage();
    getControllerByName(this, "message").focusToInput();
    this.welcomeMessageTarget.innerHTML = `Hi <b>${this.inputName}</b>, welcome and start chatting!`;
    consumer.subscriptions.create({
      channel: "ChatChannel",
      username: this.inputName,
    });
  }

  setUsername() {
    this.usernameValue = this.inputName;
  }

  // Event handler
  onInputNameEnter(event) {
    const isEnter = event.keyCode == 13;
    if (isEnter) this.signIn(event);
  }
}
