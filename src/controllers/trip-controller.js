import {renderComponent} from "../utils/render";
import {WayPointMarkupComponent} from "../components/way-point";
import {TripDaysMarkupComponent, TripDayMarkupComponent} from '../components/trip-days';
import {EditEventMarkupComponent} from "../components/edit-event";
import {getTrip} from '../mock/trip-point';
const trip = getTrip();

export class TripController {
  constructor(container) {
    this._container = container;
  }

  replaceToWayPoint(container, editComponent) {
    const wayPointComponent = new WayPointMarkupComponent(editComponent.point);
    const wayPointComponentElement = wayPointComponent.createElement();
    container.replaceChild(wayPointComponentElement, editComponent.getElement());
    wayPointComponent.setEditButtonClickHandler(() => {
      this.replaceToEditWayPoint(container, wayPointComponent);
    });
  }

  replaceToEditWayPoint(container, wayPointComponent) {
    const editComponent = new EditEventMarkupComponent(wayPointComponent.point);
    const editComponentElement = editComponent.createElement();
    container.replaceChild(editComponentElement, wayPointComponent.getElement());
    editComponent.setSaveButtonHandler(() => {
      this.replaceToWayPoint(container, editComponent);
    });
  }

  renderTripWayPoint(container, wayPoint) {
    const wayPointMarkupComponent = new WayPointMarkupComponent(wayPoint);
    renderComponent(container, wayPointMarkupComponent);
    wayPointMarkupComponent.setEditButtonClickHandler(() => {
      this.replaceToEditWayPoint(container, wayPointMarkupComponent);
    });
  }

  renderTripDay(container, tripDay) {
    const tripDayMarkupComponent = new TripDayMarkupComponent(tripDay);
    const wayPoints = tripDay.wayPoints;
    renderComponent(container, tripDayMarkupComponent);
    const tripDayMarkupComponentElement = tripDayMarkupComponent.getElement();
    const tripDayContainerList = tripDayMarkupComponentElement.querySelector(`.trip-events__list`);
    wayPoints.forEach((wayPoint) => {
      this.renderTripWayPoint(tripDayContainerList, wayPoint);
    });
  }

  render() {
    const tripDays = trip.days;
    const tripDaysMarkupComponent = new TripDaysMarkupComponent();
    renderComponent(this._container, tripDaysMarkupComponent);
    const tripDaysMarkupComponentElement = tripDaysMarkupComponent.getElement();
    tripDays.forEach((tripDay) => {
      this.renderTripDay(tripDaysMarkupComponentElement, tripDay);
    });
  }
}
