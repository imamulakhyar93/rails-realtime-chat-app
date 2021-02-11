import { Controller } from "stimulus";
import { render } from "timeago.js";
import { getControllerByName } from "./helper";
export default class extends Controller {
  static values = { username: String };
  static targets = ["formMessage"];

  initialize() {
    // Initialize timeago
    const nodes = this.element.querySelectorAll(".timeago");
    if (nodes.length > 0) render(nodes, "en_US");

    // prevent submit when pressing enter on fields
    this.formMessageTarget.onkeydown = (event) => {
      if (event.keyCode == 13) {
        event.preventDefault();
        return;
      }
    };
  }

  onFormMessageSubmit() {
    getControllerByName(this, "message").inputMessageTarget.value = "";
  }
}
