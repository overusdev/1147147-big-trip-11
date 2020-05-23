import {AbstractComponent} from "../abstract-component";
export class WayPointMarkupComponent extends AbstractComponent {
  constructor(item) {
    super();
    this._item = item;
  }

  get point() {
    return this._item;
  }

  getTemplate() {
    return wayPointTemplate(this._item);
  }

  setEditButtonClickHandler(handler) {
    this._element.querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, handler);
  }
}

const selectedOffer = (offer) => {
  return (
    `<li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
     </li>`
  );
};

const selectedOffers = (offers) => {
  return (
    `<ul class="event__selected-offers">
       ${offers.map((offer) => selectedOffer(offer)).join(`\n`)}
     </ul>
  `);
}

export const wayPointTemplate = (item) => {
  const eventType = (item.type.type !== `Check`) ? item.type.type : `Check-in`;
  const title = (item.type.group === `Activity`) ? `${eventType} in ` : `${eventType} to `;

  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src="img/icons/sightseeing.png" alt="Event type icon">
                    </div>
            <h3 class="event__title">${title}${item.destinationPlace}</h3>

            <p class="event__price">
                &euro;&nbsp;<span class="event__price-value">${item.price}</span>
            </p>

            <div class="event__schedule">
            <p class="event__time">
                <time class="event__start-time" datetime="${item.startTime}">${item.startTime}</time>
                &mdash;
                <time class="event__end-time" datetime="${item.endTime}">${item.endTime}</time>
            </p>
            <p class="event__duration">${item.totalTime}</p>
            </div>

            <h4 class="visually-hidden">Offers:</h4>

            ${selectedOffers(item.offers)}

            <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
            </button>
        </div>
    </li>`
  );
};
