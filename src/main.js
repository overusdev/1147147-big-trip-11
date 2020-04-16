'use_strict';

import {createSiteMenuTemplate} from './components/site-menu.js';
import {createControlsMenuTemplate} from './components/controls-menu.js';
import {createNewPointTemplate} from './components/new-way-point.js';
import {createTripDaysTemplate} from './components/trip-days.js';
import {createPointsListItemsTemplate} from './components/points-list-item.js';
import {createEditEventTemplate} from './components/edit-event.js';
import {generateFilters} from './mock/filter.js';
import {generatePoints} from './mock/trip-point.js';
import {generatePoint} from './mock/trip-point.js';
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
const siteMainElement = document.querySelector(`.page-body`);
const siteHeaderElement = document.querySelector(`.page-header`);
const siteTripInfoElement = siteHeaderElement.querySelector(`.trip-main`);
const siteControlsElement = siteHeaderElement.querySelector(`.trip-main__trip-controls`);
const siteTripsElement = siteMainElement.querySelector(`.trip-events`);
const filters = generateFilters();
render(siteTripInfoElement, createSiteMenuTemplate(), `afterbegin`);
render(siteControlsElement, createControlsMenuTemplate(filters), `afterbegin`);
render(siteTripsElement, createTripDaysTemplate(), `beforeend`);
const siteListElement = document.querySelector(`.trip-events__list`);

const eventsListData = generatePoints(15);
eventsListData.forEach((item) => {
  render(siteListElement, createPointsListItemsTemplate(item), `beforeend`);
});

const newWayPointData = generatePoint();
render(siteTripsElement, createNewPointTemplate(newWayPointData), `afterbegin`);
render(siteListElement, createEditEventTemplate(), `afterbegin`);
