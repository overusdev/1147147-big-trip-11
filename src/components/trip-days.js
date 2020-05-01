import {createWayPointTemplate} from "./way-point";

export const createTripDaysTemplate = (trip) => {
  const dataElements = trip.data.map(createTripDayTemplate).join(`\n`);

  return (
    `<ul class="trip-days">
        ${dataElements}
    </ul>`
  );
};

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
