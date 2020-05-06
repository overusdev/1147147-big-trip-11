import {AbstractComponent} from "./abstract-component";

import {eventTypeData, eventTypeGroupData} from "../data/components-data";
import {getMockPlaces} from "../mock/trip-point";

export class PlaceOptionMarkupComponent extends AbstractComponent {
  constructor(place) {
    super();
    this._place = place;
  }

  get place() {
    return this._place;
  }

  getTemplate() {
    return createPlaceOptionMarkup(this._place);
  }
}

const createPlaceOptionMarkup = (place) => {
  return (
    `<option value="${place}">
        ${place}
     </option>`
  );
};

export class PlacesMarkupComponent extends AbstractComponent {
  getTemplate() {
    return createPlacesMarkup();
  }
}

const createPlacesMarkup = () => {
  const placesOptions = getMockPlaces().map(createPlaceOptionMarkup);
  return (
    `<label class="event__label  event__type-output" for="event-destination-1">
        Flight to
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
      <datalist id="destination-list-1">
        ${placesOptions}
      </datalist>`
  );
};

export class EventTypeMarkupComponent extends AbstractComponent {
  getTemplate() {
    return eventTypeDataSet();
  }
}

const eventTypeDataSet = () => {
  const elements = eventTypeData.map((item) => (`
    <div class="event__type-item">
        <input id="${item.id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item.value}">
        <label class="event__type-label  event__type-label--${item.value}" for="${item.id}">
            ${item.label}
        </label>
    </div>
  `));

  return (
    `<fieldset class="event__type-group">
        <legend class="visually-hidden">
            Transfer
        </legend>
        ${elements.join(`\n`)}
     </fieldset>`
  );
};

export class TypeGroupMarkupComponent extends AbstractComponent {
  getTemplate() {
    return eventTypeGroupDataSet();
  }
}

const eventTypeGroupDataSet = () => {
  const elements = eventTypeGroupData.map((item) => (`
    <div class="event__type-item">
        <input id="${item.id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item.value}">
        <label class="event__type-label  event__type-label--check-in" for="${item.id}">
            ${item.label}
        </label>
    </div>
  `));

  return (`
    <fieldset class="event__type-group">
        <legend class="visually-hidden">
            Activity
        </legend>
        ${elements.join(`\n`)}
    </fieldset>
  `);
};

export class OfferMarkupComponent extends AbstractComponent {
  constructor(item) {
    super();
    this._item = item;
  }

  get item() {
    return this._item;
  }
  getTemplate() {
    return offerTemplate(this._item);
  }
}

const offerTemplate = (item) => {
  return (`
    <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="${item.id}" type="checkbox" name="${item.label}" checked>
        <label class="event__offer-label" for="${item.id}">
            <span class="event__offer-title">${item.name}</span>
             &euro;&nbsp;
            <span class="event__offer-price">${item.price}</span>
        </label>
    </div>
  `);
};

export class PicturesMarkupComponent extends AbstractComponent {
  constructor(pictures) {
    super();
    this._pictures = pictures;
  }

  get pictures() {
    return this._pictures;
  }
  getTemplate() {
    return picturesContainer(this._pictures);
  }
}

const picturesContainer = (pictures) => {
  return (`
    <div class="event__photos-tape">
        ${pictures.map((item) => `<img class="event__photo" src="${item}" alt="Event photo">`).join(`\n`)}
    </div>
  `);
};

export class OfferContainerMarkupComponent extends AbstractComponent {
  constructor(offers) {
    super();
    this._offers = offers;
  }

  get offers() {
    return this._offers;
  }
  getTemplate() {
    return offerContainer(this._offers);
  }
}

const offerContainer = (offers) => {
  const offerElements = offers.map(offerTemplate);
  return (`
    <div class="event__available-offers">
        ${offerElements.join(`\n`)}
    </div>
  `);
};

export class NewPointMarkupComponent extends AbstractComponent {
  constructor(item) {
    super();
    this._item = item;
  }

  get item() {
    return this._item;
  }
  getTemplate() {
    return createNewPointTemplate(this._item);
  }
}

export const createNewPointTemplate = (item) => {
  return (
    `<form class="trip-events__item  event  event--edit" action="#" method="post">
        <header class="event__header">
            <div class="event__type-wrapper">
                <label class="event__type  event__type-btn" for="event-type-toggle-1">
                    <span class="visually-hidden">Choose event type</span>
                    <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
                </label>

                <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                <div class="event__type-list">
                    ${eventTypeDataSet()}
                    ${eventTypeGroupDataSet()}
                </div>
            </div>

            <div class="event__field-group  event__field-group--destination">
                ${createPlacesMarkup()}
            </div>

            <div class="event__field-group  event__field-group--time">
                <label class="visually-hidden" for="event-start-time-1">
                    From
                </label>
                <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 00:00">
                    &mdash;
                <label class="visually-hidden" for="event-end-time-1">
                    To
                </label>
                <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 00:00">
            </div>

            <div class="event__field-group  event__field-group--price">
                <label class="event__label" for="event-price-1">
                    <span class="visually-hidden">Price</span>
                    &euro;
                </label>
                <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
            </div>

            <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
            <button class="event__reset-btn" type="reset">Cancel</button>
        </header>

        <section class="event__details">
            <section class="event__section  event__section--offers">
                <h3 class="event__section-title  event__section-title--offers">
                    Offers
                </h3>
                ${offerContainer(item.offers)}
            </section>

            <section class="event__section  event__section--destination">
                <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                <p class="event__destination-description">
                    ${item.destination.description}
                </p>

                <div class="event__photos-container">
                    ${picturesContainer(item.destination.pictures)}
                </div>
            </section>
        </section>
      </form>`
  );
};
