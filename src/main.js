`use_strict`;

import {WayPointMarkupComponent} from "./components/way-point";
import {SiteMenuMarkupComponent} from './components/site-menu';
import {ControlsMenuComponent} from './components/controls-menu';
import {SiteMenuButtonMarkupComponent} from './components/new-event-button';
import {NewPointMarkupComponent} from './components/new-way-point';
import {SortListMarkupComponent} from './components/sort';
import {TripDaysMarkupComponent, TripDayMarkupComponent} from './components/trip-days';
import {generateFilters} from './mock/filter';
import {generateNewPoint, getTrip} from './mock/trip-point';
import {EditEventMarkupComponent} from "./components/edit-event";

const renderComponent = (container, childComponent, place) => {
  if (place === `before`) {
    container.prepend(childComponent.createElement());
  } else {
    container.append(childComponent.createElement());
  }
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

const replaceToWayPoint = (container, editComponent) => {
  const wayPointComponent = new WayPointMarkupComponent(editComponent.point);
  const wayPointComponentElement = wayPointComponent.createElement();
  container.replaceChild(wayPointComponentElement, editComponent.getElement());
  wayPointComponent.setEditButtonClickHandler(() => {
    replaceToEditWayPoint(container, wayPointComponent);
  });
};

const replaceToEditWayPoint = (container, wayPointComponent) => {
  const editComponent = new EditEventMarkupComponent(wayPointComponent.point);
  const editComponentElement = editComponent.createElement();
  container.replaceChild(editComponentElement, wayPointComponent.getElement());
  editComponent.setSaveButtonHandler(() => {
    replaceToWayPoint(container, editComponent);
  });
};

const renderTripWayPoint = (container, wayPoint) => {
  const wayPointMarkupComponent = new WayPointMarkupComponent(wayPoint);
  renderComponent(container, wayPointMarkupComponent);
  wayPointMarkupComponent.setEditButtonClickHandler(() => {
    replaceToEditWayPoint(container, wayPointMarkupComponent);
  });
};

const renderTripDay = (container, tripDay) => {
  const tripDayMarkupComponent = new TripDayMarkupComponent(tripDay);
  const wayPoints = tripDay.wayPoints;
  renderComponent(container, tripDayMarkupComponent);
  const tripDayMarkupComponentElement = tripDayMarkupComponent.getElement();
  const tripDayContainerList = tripDayMarkupComponentElement.querySelector(`.trip-events__list`);

  wayPoints.forEach((wayPoint) => {
    renderTripWayPoint(tripDayContainerList, wayPoint);
  });
};


const renderTripDaysList = (trip) => {
  const tripDays = trip.days;
  const tripDaysMarkupComponent = new TripDaysMarkupComponent();
  renderComponent(siteTripsElement, tripDaysMarkupComponent);
  const tripDaysMarkupComponentElement = tripDaysMarkupComponent.getElement();

  tripDays.forEach((tripDay) => {
    renderTripDay(tripDaysMarkupComponentElement, tripDay);
  });
};

const trip = getTrip();
renderTripDaysList(trip);


