import { Controller } from "stimulus";
import { getControllerByName } from "./helper";
export default class extends Controller {
  static targets = ["inputMessage", "composeMessage"];

  resetInputMessage() {
    this.inputMessageTarget.value = "";
  }

  showComposeMessage() {
    this.composeMessageTarget.classList.remove("hidden");
    this.composeMessageTarget.classList.add("flex");
  }

  focusToInput() {
    this.inputMessageTarget.focus();
  }

  submitFormMessage() {
    getControllerByName(this, "main").submitFormMessage();
  }

  // Event handler
  onInputMessageEnter(event) {
    const isEnter = event.keyCode == 13;
    if (isEnter) {
      this.submitFormMessage();
      this.resetInputMessage();
    }
  }
}
