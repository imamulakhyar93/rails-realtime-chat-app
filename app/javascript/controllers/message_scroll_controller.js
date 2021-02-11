import { Controller } from "stimulus";
import { render } from "timeago.js";
export default class extends Controller {
  initialize() {
    this.initializeTimeAgo();
    this.scrollMessagesToBottom();
  }

  scrollMessagesToBottom() {
    this.element.parentNode.scrollTop = this.element.parentNode.scrollHeight;
  }

  initializeTimeAgo() {
    const nodes = this.element.querySelector(".timeago");
    if (nodes != null) render(nodes, "en_US");
  }
}
