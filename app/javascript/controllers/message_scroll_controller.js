import { Controller } from "stimulus";
import { render } from "timeago.js";
export default class extends Controller {
  initialize() {
    this.initializeTimeAgo();
    this.element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }

  initializeTimeAgo() {
    const nodes = this.element.querySelector(".timeago");
    if (nodes != null) render(nodes, "en_US");
  }
}
