import {AbstractComponent} from "../abstract-component";
import {
  createPlacesMarkup,
  eventTypeDataSet,
  eventTypeGroupDataSet,
  offerContainer,
  picturesContainer
} from "./trip-point-templates";


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
