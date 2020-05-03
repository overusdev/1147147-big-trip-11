import {BaseComponent} from "./base-component";
import {eventTypeData, eventTypeGroupData} from "../data/components-data";
import {getMockPlaces} from "../mock/trip-point";
export class eventTypeDataSetMarkupComponent extends BaseComponent {
  constructor(place) {
    super();
    this._place = place;
  }

  get place() {
    return this._place;
  }

  getTemplate() {
    return eventTypeDataSet(this._place);
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
export class createPlaceOptioMarkupComponent extends BaseComponent {
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

export class createPlacesMarkupComponent extends BaseComponent {
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
    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination"  value="Geneva" list="destination-list-1">
    <datalist id="destination-list-1">
      ${placesOptions}
    </datalist>`
  );
};
export class eventTypeGroupMarkupComponent extends BaseComponent {
  constructor(item) {
    super();
    this._item = item;
  }

  get item() {
    return this._item;
  }

  getTemplate() {
    return eventTypeGroupDataSet(this._item);
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

export class offerMarkupComponent extends BaseComponent {
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

export class offerContainerMarkupComponent extends BaseComponent {
  constructor(offers) {
    super();
    this._offers = offers;
  }

  get offers() {
    return this._offers;
  }

  getTemplate() {
    return offerTemplate(this._offers);
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

export class EditEventMarkupComponent extends BaseComponent {
  constructor(item) {
    super();
    this._item = item;
  }
  getTemplate() {
    return createEditEventTemplate(this._item);
  }
  setSubmitHandler(handler) {
    this._element.querySelector(`.event--edit`)
      .addEventListener(`submit`, handler);
  }
}


export const createEditEventTemplate = (item) => {
  return (
    `<li class="trip-events__item">
        <form class="event  event--edit" action="#" method="post">
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
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
            —
            <label class="visually-hidden" for="event-end-time-1">
                To
            </label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
            </div>

            <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
                <span class="visually-hidden">Price</span>
                €
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">
            </div>

            <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
            <button class="event__reset-btn" type="reset">Delete</button>

            <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" checked="">
            <label class="event__favorite-btn" for="event-favorite-1">
            <span class="visually-hidden">Add to favorite</span>
            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
            </svg>
            </label>

            <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
            </button>
        </header>

        <section class="event__details">
            <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
              ${offerContainer(item.offers)}
            </section>
        </section>
        </form>
    </li>`
  );
};
