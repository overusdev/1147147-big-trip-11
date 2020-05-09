import {createElement} from "../utils/utils";

export class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
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
    throw new Error(`Abstract method not implemented: getElement.`);
  }

  removeElement() {
    this._element = null;
  }
}
