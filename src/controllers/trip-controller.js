import {renderComponent} from "../utils/render";
import {TripDaysMarkupComponent, TripDayMarkupComponent} from '../components/trip-days';
import {PointController} from "./point-controller";

export class TripController {
  constructor(container, model) {
    this._container = container;
    this._pointsControllers = [];
    this._model = model;
    this._tripDaysMarkupComponent = null;
  }

  renderTripDay(container, tripDay) {
    const tripDayMarkupComponent = new TripDayMarkupComponent(tripDay);
    const wayPoints = tripDay.points;
    renderComponent(container, tripDayMarkupComponent);
    const tripDayMarkupComponentElement = tripDayMarkupComponent.getElement();
    const tripDayContainerList = tripDayMarkupComponentElement.querySelector(`.trip-events__list`);
    this._pointsControllers = wayPoints.map((wayPoint) => {
      return new PointController(tripDayContainerList, wayPoint, `read`);
    });
    this._pointsControllers.forEach((controller) => controller.render());
  }

  updateFilters(filtering) {
    this._clearList();
    this._model.setFiltering(filtering);
    this.render();
  }

  updateSorting(sorting) {
    this._clearList();
    this._model.setSorting(sorting);
    this.render();
  }

  _clearList() {
    this._pointsControllers = [];
    this._tripDaysMarkupComponent.getElement().remove();
    this._tripDaysMarkupComponent.removeElement();
  }

  render() {
    const tripDays = this._model.getCurrentState();
    this._tripDaysMarkupComponent = new TripDaysMarkupComponent();
    renderComponent(this._container, this._tripDaysMarkupComponent);
    const tripDaysMarkupComponentElement = this._tripDaysMarkupComponent.getElement();
    tripDays.forEach((tripDay) => {
      this.renderTripDay(tripDaysMarkupComponentElement, tripDay);
    });
  }
}
