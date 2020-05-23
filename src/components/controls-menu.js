import {AbstractComponent} from "./abstract-component";
import {EVENT_FILTERS} from "../mock/filter";

export class ControlsMenuComponent extends AbstractComponent {
  constructor() {
    super();
  }

  get filters() {
    return this._filters;
  }

  getTemplate() {
    return createControlsMenuTemplate(this._filters);
  }

  setChangeFilterState(handler) {
    this.getElement().querySelector(`form`)
      .addEventListener(`change`, (e) => {
        handler(e.target.id.replace(`filter-`, ``).toUpperCase());
      });
  }

  setChangeTabState(handler) {
    this.getElement().querySelector(`form`)
      .addEventListener(`change`, handler);
  }
}

const createFilterMarkup = (filter, isChecked) => {
  const {id, title} = filter;
  return (
    `<div class="trip-filters__filter">
      <input id="filter-${id}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${id}" ${isChecked ? `checked` : ``}>
      <label class="trip-filters__filter-label" for="filter-${id}">${title}</label>
    </div>`
  );
};

export const createControlsMenuTemplate = () => {
  const tripFilters = EVENT_FILTERS.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);
  return (
    `<div class="trip-main__trip-controls  trip-controls">
      <h2 class="visually-hidden">Switch trip view</h2>
      <nav class="trip-controls__trip-tabs  trip-tabs">
        <a class="trip-tabs__btn" href="#">Table</a>
        <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Stats</a>
      </nav>

      <h2 class="visually-hidden">Filter events</h2>
      <form class="trip-filters" action="#" method="get">
        ${tripFilters}
        <button class="visually-hidden" type="submit">Accept filter</button>
      </form>
    </div>`
  );
};
