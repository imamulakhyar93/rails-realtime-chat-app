import { Controller } from "stimulus";
import { getControllerByName } from "./helper";
export default class extends Controller {
  static values = { username: String };
  static targets = ["inputName", "formUser", "signedInMsg"];

  get inputName() {
    return this.inputNameTarget.value;
  }

  get isSignedIn() {
    return this.usernameValue != "" && this.usernameValue != null;
  }

  get mainController() {
    return getControllerByName(this, "main");
  }

  get messageController() {
    return getControllerByName(this, "message");
  }

  signin(event) {
    event.preventDefault();
    if (this.inputName == "") return;
    this.usernameValue = this.inputName;
    this.signedInMsgTarget.innerHTML = `Hi <b>${this.inputName}</b>, welcome and start chatting!`;
  }

  handleSignIn() {
    if (this.isSignedIn) {
      this.formUserTarget.hidden = true;
      this.mainController.usernameValue = this.usernameValue;
      this.messageController.showComposeMessage();
    }
  }

  usernameValueChanged() {
    this.handleSignIn();
  }

  inputNameKeyUp(event) {
    event.preventDefault();
    const isEnter = event.keyCode == 13;
    if (isEnter) this.signin(event);
  }
}
