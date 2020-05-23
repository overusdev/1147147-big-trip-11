import {eventTypeData, eventTypeGroupData} from "../../data/components-data";
import {getMockPlaces} from "../../mock/trip-point";

export const offerTemplate = (item) => {
  return (`
    <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="${item.id}" type="checkbox" name="${item.title}" checked>
        <label class="event__offer-label" for="${item.id}">
            <span class="event__offer-title">${item.title}</span>
             &euro;&nbsp;
            <span class="event__offer-price">${item.price}</span>
        </label>
    </div>
  `);
};

export const eventTypeDataSet = () => {
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

export const offerContainer = (offers) => {
  const offerElements = offers.map(offerTemplate);
  return (`
    <div class="event__available-offers">
        ${offerElements.join(`\n`)}
    </div>
  `);
};

export const eventTypeGroupDataSet = () => {
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

export const createPlaceOptionMarkup = (place) => {
  return (
    `<option value="${place}">
        ${place}
    </option>`
  );
};

export const createPlacesMarkup = (item) => {
  const placesOptions = getMockPlaces().map(createPlaceOptionMarkup);
  const eventType = (item.type.type !== `Check`) ? item.type.type : `Check-in`;
  const title = (item.type.group === `Activity`) ? `${eventType} in ` : `${eventType} to `;

  return (
    `<label class="event__label  event__type-output" for="event-destination-1">
        ${title}
    </label>
    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination"  value="${item.destinationPlace}" list="destination-list-1">
    <datalist id="destination-list-1">
        ${placesOptions}
    </datalist>`
  );
};

export const picturesContainer = (pictures) => {
  return (`<div class="event__photos-tape">
        ${pictures.map((item) => `<img class="event__photo" src="${item}" alt="Event photo">`).join(`\n`)}
    </div>
  `);
};
