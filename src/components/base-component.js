import {createElement} from "../utils/utils";

export class BaseComponent {
  constructor() {
    this._element = null;
  }

  createElement() {
    this._element = createElement(this.getTemplate());
    return this._element;
  }

  getTemplate() {
    return ``;
  }

  removeElement() {
    this._element = null;
  }
}
