'use_strict';

import {Points} from "./models/points";
import {Trip} from "./models/trip";
import {SiteMenuMarkupComponent} from './components/site-menu';
import {ControlsMenuComponent} from './components/controls-menu';
import {SiteMenuButtonMarkupComponent} from './components/new-event-button';
import {SortListMarkupComponent} from './components/sort';
import {renderComponent} from "./utils/render";
import {TripController} from "./controllers/trip-controller";
import API from "./api";

const siteMainElement = document.querySelector(`.page-body`);
const siteMenuElement = document.querySelector(`.trip-main`);
const siteTripsElement = siteMainElement.querySelector(`.trip-events`);

const api = new API();
api.getEvents().then((data) => {
  const points = new Points(data);
  const trip = new Trip(points.getPoints());

  const sortComponent = new SortListMarkupComponent();
  renderComponent(siteTripsElement, sortComponent);

  sortComponent.setChangeSortState((sorting) => {
    renderTripController.updateSorting(sorting);
  });

  const createSiteMenuComponent = new SiteMenuMarkupComponent();
  renderComponent(siteMenuElement, createSiteMenuComponent);

  const renderTripController = new TripController(siteTripsElement, trip);

  const createControlsMenuComponent = new ControlsMenuComponent();
  renderComponent(siteMenuElement, createControlsMenuComponent);
  renderTripController.render();

  createControlsMenuComponent.setChangeFilterState((filterName) => {
    renderTripController.updateFilters(filterName);
  });

  const createButtonMenuComponent = new SiteMenuButtonMarkupComponent();
  renderComponent(siteMenuElement, createButtonMenuComponent);
});


