import {AbstractComponent} from "./abstract-component";

export class TripDaysMarkupComponent extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return createTripDaysTemplate();
  }

  setEditButtonClickHandler(handler) {
    this._element.querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, handler);
  }
}

export const createTripDaysTemplate = () => {
  return (
    `<ul class="trip-days">

    </ul>`
  );
};

export class TripDayMarkupComponent extends AbstractComponent {
  constructor(tripItem) {
    super();
    this._tripItem = tripItem;
  }

  get trip() {
    return this._tripItem;
  }

  getTemplate() {
    return createTripDayTemplate(this._tripItem);
  }
}

export const createTripDayTemplate = (tripItem) => {
  return (
    `<li class="trip-days__item  day">
        <div class="day__info">
            <span class="day__counter">
                ${tripItem.day.getDate()}
            </span>
            <time class="day__date" datetime="${tripItem.day.toLocaleDateString()}">
                ${tripItem.day.toLocaleDateString()}
            </time>
        </div>
        <ul class="trip-events__list">
        </ul>
    </li>`);
};
