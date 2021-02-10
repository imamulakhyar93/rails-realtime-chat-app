import { Controller } from "stimulus";
import { getControllerByName } from "./helper";
import consumer from "../channels/consumer";
export default class extends Controller {
  static values = { username: String };
  static targets = ["inputName", "formUser", "signedInMsg"];

  get inputName() {
    return this.inputNameTarget.value;
  }

  get isSignedIn() {
    return this.usernameValue != "" && this.usernameValue != undefined;
  }

  signin(event) {
    event.preventDefault();
    if (this.inputName == "") return;
    this.usernameValue = this.inputName;
    this.signedInMsgTarget.innerHTML = `Hi <b>${this.inputName}</b>, welcome and start chatting!`;
    consumer.subscriptions.create({
      channel: "ChatChannel",
      username: this.inputName,
    });
  }

  handleSignIn() {
    if (this.isSignedIn) {
      this.formUserTarget.hidden = true;
      getControllerByName(this, "main").usernameValue = this.usernameValue;
      getControllerByName(this, "message").showComposeMessage();
      getControllerByName(this, "message").focusToInput();
      return;
    }
  }

  usernameValueChanged() {
    this.handleSignIn();
  }

  inputNameKeyUp(event) {
    const isEnter = event.keyCode == 13;
    if (isEnter) this.signin(event);
  }
}
