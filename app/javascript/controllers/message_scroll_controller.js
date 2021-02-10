import { Controller } from "stimulus";
import { render } from "timeago.js";
export default class extends Controller {
  initialize() {
    // Initialize timeago for new loaded element
    const nodes = this.element.querySelector(".timeago");
    if (nodes != null) render(nodes, "en_US");
    // Scroll to the bottom
    this.element.parentNode.scrollTo(0, this.element.parentNode.scrollHeight);
  }
}
