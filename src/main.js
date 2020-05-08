`use_strict`;

import {SiteMenuMarkupComponent} from './components/site-menu';
import {ControlsMenuComponent} from './components/controls-menu';
import {SiteMenuButtonMarkupComponent} from './components/new-event-button';
import {SortListMarkupComponent} from './components/sort';
import {generateFilters} from './mock/filter';
import {renderComponent} from "./utils/render";
import {TripController} from "./controllers/trip-controller";

const siteMainElement = document.querySelector(`.page-body`);
const siteMenuElement = document.querySelector(`.trip-main`);
const siteTripsElement = siteMainElement.querySelector(`.trip-events`);
const filters = generateFilters();

const createSortComponent = new SortListMarkupComponent();
renderComponent(siteTripsElement, createSortComponent);

const createSiteMenuComponent = new SiteMenuMarkupComponent();
renderComponent(siteMenuElement, createSiteMenuComponent);

const createControlsMenuComponent = new ControlsMenuComponent(filters);
renderComponent(siteMenuElement, createControlsMenuComponent);

const createButtonMenuComponent = new SiteMenuButtonMarkupComponent();
renderComponent(siteMenuElement, createButtonMenuComponent);

const renderTrip = new TripController(siteTripsElement);
renderTrip.render();


