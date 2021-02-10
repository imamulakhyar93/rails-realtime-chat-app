import { Controller } from "stimulus";
import { render } from "timeago.js";
export default class extends Controller {
  static values = { username: String };

  initialize() {
    // Initialize timeago
    const nodes = this.element.querySelectorAll(".timeago");
    render(nodes, "en_US");
  }
}
