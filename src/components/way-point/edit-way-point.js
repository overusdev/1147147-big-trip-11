import {AbstractComponent} from "../abstract-component";
import {
  createPlacesMarkup,
  eventTypeDataSet,
  eventTypeGroupDataSet,
  offerContainer,
} from "./trip-point-templates";

export class EditEventMarkupComponent extends AbstractComponent {
  constructor(item) {
    super();
    this._item = item;
  }

  get point() {
    return this._item;
  }

  getTemplate() {
    return createEditEventTemplate(this._item);
  }

  setSaveButtonHandler(handler) {
    this._element.querySelector(`form`)
      .addEventListener(`submit`, handler);
  }

  setCancelButtonHandler(handler) {
    this._element.querySelector(`.event__reset-btn`)
      .addEventListener(`click`, handler);
  }

  setCloseButtonHandler(handler) {
    this._element.querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, handler);
  }

  setSubmitHandler(handler) {
    this._element.querySelector(`.event--edit`)
      .addEventListener(`submit`, handler);
  }
}


export const createEditEventTemplate = (item) => {
  console.log(item.isFavorite);

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
                ${createPlacesMarkup(item)}
            </div>

            <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">
                From
            </label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${item.startTime}">
            —
            <label class="visually-hidden" for="event-end-time-1">
                To
            </label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${item.endTime}">
            </div>

            <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
                <span class="visually-hidden">Price</span>
                €
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${item.price}">
            </div>

            <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
            <button class="event__reset-btn" type="reset">Delete</button>

            <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" ${item.isFavorite ? `checked` : null}>

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
