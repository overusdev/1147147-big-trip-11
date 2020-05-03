'use_strict';

import {SiteMenuMarkupComponent} from './components/site-menu.js';
import {createControlsMenuTemplate} from './components/controls-menu.js';
import {createNewPointTemplate} from './components/new-way-point.js';
import {createTripDaysTemplate} from './components/trip-days.js';
import {createEditEventTemplate} from './components/edit-event.js';
import {generateFilters} from './mock/filter.js';
import {generateNewPoint, getTrip} from './mock/trip-point.js';


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const renderComponent = (container, childComponent) => {
  container.appendChild(childComponent.createElement());
};

const siteMainElement = document.querySelector(`.page-body`);
const siteHeaderElement = document.querySelector(`.page-header`);
const siteTripInfoElement = siteHeaderElement.querySelector(`.trip-main__trip-info`);
const siteControlsElement = siteHeaderElement.querySelector(`.trip-main__trip-controls`);
const siteTripsElement = siteMainElement.querySelector(`.trip-events`);
const filters = generateFilters();

const createSiteMenuComponent = new SiteMenuMarkupComponent();
renderComponent(siteTripInfoElement, createSiteMenuComponent);

render(siteControlsElement, createControlsMenuTemplate(filters), `afterbegin`);
render(siteTripsElement, createTripDaysTemplate(getTrip()), `beforeend`);

const siteListElement = document.querySelector(`.trip-events__list`);
const newWayPointData = generateNewPoint();

render(siteTripsElement, createNewPointTemplate(newWayPointData), `afterbegin`);
render(siteListElement, createEditEventTemplate(), `afterbegin`);
