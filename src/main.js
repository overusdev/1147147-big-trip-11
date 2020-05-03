'use_strict';

import {SiteMenuMarkupComponent} from './components/site-menu.js';
import {ControlsMenuComponent} from './components/controls-menu.js';
import {SiteMenuButtonMarkupComponent} from './components/new-event-button.js';
import {NewPointMarkupComponent} from './components/new-way-point.js';
import {SortListMarkupComponent} from './components/sort.js';
import {TripDaysMarkupComponent} from './components/trip-days.js';
import {EditEventMarkupComponent} from './components/edit-event.js';
import {generateFilters} from './mock/filter.js';
import {generateNewPoint, getTrip} from './mock/trip-point.js';

const renderComponent = (container, childComponent) => {
  container.appendChild(childComponent.createElement());
};

const siteMainElement = document.querySelector(`.page-body`);
const siteMenuElement = document.querySelector(`.trip-main`);
const siteTripsElement = siteMainElement.querySelector(`.trip-events`);
const filters = generateFilters();

const createSortComponent = new SortListMarkupComponent();
renderComponent(siteTripsElement, createSortComponent);

const newWayPointData = generateNewPoint();
const createNewPointComponent = new NewPointMarkupComponent(newWayPointData);
renderComponent(siteTripsElement, createNewPointComponent);

const createSiteMenuComponent = new SiteMenuMarkupComponent();
renderComponent(siteMenuElement, createSiteMenuComponent);

const createControlsMenuComponent = new ControlsMenuComponent(filters);
renderComponent(siteMenuElement, createControlsMenuComponent);

const createButtonMenuComponent = new SiteMenuButtonMarkupComponent();
renderComponent(siteMenuElement, createButtonMenuComponent);

const createTripDaysComponent = new TripDaysMarkupComponent(getTrip());
renderComponent(siteTripsElement, createTripDaysComponent);

const siteListElement = document.querySelector(`.trip-events__list`);

const createEditEventComponent = new EditEventMarkupComponent(newWayPointData);
renderComponent(siteListElement, createEditEventComponent);
