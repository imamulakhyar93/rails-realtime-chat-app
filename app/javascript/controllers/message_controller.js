import { Controller } from "stimulus";
export default class extends Controller {
  static targets = ["inputMessage", "composeMessage"];
  static values = { username: String };

  initialize() {
    this.element.onkeydown = (event) => {
      if (event.keyCode == 13) {
        event.preventDefault();
        return;
      }
    };
  }

  inputMessageKeyUp(event) {
    if (event.keyCode == 13) {
      this.element.submit();
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
}
