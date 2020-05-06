import {createElement} from "../utils/utils";

export class AbstractComponent {
  constructor() {
    if (new.target === new.target === AbstractComponent) {
      throw new Error(`Can't instantiate AbstractComponent, only consrete one.`);
    }
    this._element = null;
  }

  createElement() {
    this._element = createElement(this.getTemplate());
    return this._element;
  }

  getElement() {
    return this._element;
  }

  getTemplate() {
    return ``;
  }

  removeElement() {
    this._element = null;
  }
}
