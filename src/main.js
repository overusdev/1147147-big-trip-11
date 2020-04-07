'use_strict';

import {createSiteMenuTemplate} from './components/site-menu.js';
import {createControlsMenuTemplate} from './components/controls-menu.js';
import {createTripEventTemplate} from './components/trip-event.js';
import {createTripDaysTemplate} from './components/trip-days.js';
import {createPointsListItemsTemplate} from './components/points-list-item.js';
import {createEditEventTemplate} from './components/edit-event.js';

const POINTS_COUNT = 3;
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
const siteMainElement = document.querySelector(`.page-body`);
const siteHeaderElement = document.querySelector(`.page-header`);
const siteTripInfoElement = siteHeaderElement.querySelector(`.trip-main`);
const siteControlsElement = siteHeaderElement.querySelector(`.trip-main__trip-controls`);
const siteTripsElement = siteMainElement.querySelector(`.trip-events`);
render(siteTripInfoElement, createSiteMenuTemplate(), `afterbegin`);
render(siteControlsElement, createControlsMenuTemplate(), `afterbegin`);
render(siteTripsElement, createTripEventTemplate(), `afterbegin`);
render(siteTripsElement, createTripDaysTemplate(), `beforeend`);
const siteListElement = document.querySelector(`.trip-events__list`);

for (let i = 0; i < POINTS_COUNT; i++) {
  render(siteListElement, createPointsListItemsTemplate(), `beforeend`);
}
render(siteListElement, createEditEventTemplate(), `afterbegin`);
