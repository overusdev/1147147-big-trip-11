import {BaseComponent} from "./base-component";
export class WayPointMarkupComponent extends BaseComponent {
  constructor(item) {
    super();
    this._item = item;
  }

  get trip() {
    return this._item;
  }

  getTemplate() {
    return createWayPointTemplate(this._item);
  }
  // setEditButtonClickHandler(handler) {
  //   this._element.querySelector(`.event__rollup-btn`)
  //     .addEventListener(`click`, handler);
  // }
}
export const createWayPointTemplate = (item) => {
  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src="img/icons/sightseeing.png" alt="Event type icon">
                    </div>
            <h3 class="event__title">${item.pointType} to ${item.wayTo}</h3>

            <div class="event__schedule">
            <p class="event__time">
                <time class="event__start-time" datetime="${item.startTime}">${item.startTime}</time>
                &mdash;
                <time class="event__end-time" datetime="${item.endTime}">${item.endTime}</time>
            </p>
            <p class="event__duration">${item.totalTime}</p>
            </div>

            <p class="event__price">
            &euro;&nbsp;<span class="event__price-value">${item.price}</span>
            </p>

            <h4 class="visually-hidden">Offers:</h4>
            <ul class="event__selected-offers">
            <li class="event__offer">
                <span class="event__offer-title">${item.offers[0].offer}</span>
                &plus;
                        &euro;&nbsp;<span class="event__offer-price">${item.offers[0].price}</span>
            </li>
            <li class="event__offer">
                <span class="event__offer-title">${item.offers[1].offer}</span>
                &plus;
                            &euro;&nbsp;<span class="event__offer-price">${item.offers[1].price}</span>
            </li>
            </ul>

            <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
            </button>
        </div>
    </li>`
  );
};
