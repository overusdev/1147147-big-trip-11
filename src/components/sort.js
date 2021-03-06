import {AbstractComponent} from "./abstract-component";
import {sortTypeData} from "../data/components-data";

export class SortListMarkupComponent extends AbstractComponent {
  getTemplate() {
    return sortListForm();
  }

  setChangeSortState(handler) {
    this.getElement().addEventListener(`change`, (e) => {
      handler(e.target.id.replace(`sort-`, ``).toUpperCase());
    });
  }
}

const sortListForm = () => {
  const elements = sortTypeData.map((item) => (
    `<div class="trip-sort__item  trip-sort__item--time">
        <input id="${item.id}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${item.value}">
        <label class="trip-sort__btn" for="${item.id}">
            ${item.label}
            <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
                <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
            </svg>
        </label>
    </div>`));

  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
        <span class="trip-sort__item  trip-sort__item--day">Day</span>
        ${elements.join(`\n`)}
        <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
    </form>`
  );
};
