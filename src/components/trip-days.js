import {BaseComponent} from "./base-component";
import {createWayPointTemplate} from "./way-point";
export class TripDaysMarkupComponent extends BaseComponent {
  constructor(trip) {
    super();
    this._trip = trip;
  }

  get trip() {
    return this._trip;
  }

  getTemplate() {
    return createTripDaysTemplate(this._trip);
  }
}

export const createTripDaysTemplate = (trip) => {
  const dataElements = trip.data.map(createTripDayTemplate).join(`\n`);

  return (
    `<ul class="trip-days">
        ${dataElements}
    </ul>`
  );
};

export class TripDayMarkupComponent extends BaseComponent {
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
  const wayPointsElements = tripItem.wayPoints.map(createWayPointTemplate).join(`\n`);

  return (`
    <li class="trip-days__item  day">
        <div class="day__info">
            <span class="day__counter">
                ${tripItem.day.getDate()}
            </span>
            <time class="day__date" datetime="${tripItem.day.toLocaleDateString()}">
                ${tripItem.day.toLocaleDateString()}
            </time>
            </div>
            <ul class="trip-events__list">
                ${wayPointsElements}
            </ul>
        </li>
  `);
};
