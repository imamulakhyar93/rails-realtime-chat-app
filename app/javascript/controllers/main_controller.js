import { Controller } from "stimulus";
import { render } from "timeago.js";
import "form-request-submit-polyfill";
export default class extends Controller {
  static targets = ["formMessage"];

  initialize() {
    this.initializeTimeAgo();
    this.preventEnterSubmitForm();
  }

  initializeTimeAgo() {
    const nodes = this.element.querySelectorAll(".timeago");
    if (nodes.length > 0) render(nodes, "en_US");
  }

  preventEnterSubmitForm() {
    this.formMessageTarget.onkeydown = (event) => {
      if (event.keyCode == 13) {
        event.preventDefault();
        return;
      }
    };
  }

  submitFormMessage() {
    this.formMessageTarget.requestSubmit();
  }
}
