import {renderComponent} from "../utils/render";
import {WayPointMarkupComponent} from "../components/way-point/way-point";
import {EditEventMarkupComponent} from "../components/way-point/edit-way-point";

export class PointController {
  constructor(container, point, mode) {
    this._container = container;
    this._point = point;
    this._mode = mode;
    this._editComponent = null;
    this._readonlyComponent = null;
  }

  replaceToWayPoint() {
    const wayPointComponentElement = this._readonlyComponent.createElement();
    this._container.replaceChild(wayPointComponentElement, this._editComponent.getElement());
    this._editComponent.removeElement();
    this._readonlyComponent.setEditButtonClickHandler(() => {
      this.replaceToEditWayPoint(this._container, this._readonlyComponent);
    });
  }

  replaceToEditWayPoint() {
    const editComponentElement = this._editComponent.createElement();
    this._container.replaceChild(editComponentElement, this._readonlyComponent.getElement());
    this._readonlyComponent.removeElement();

    this._editComponent.setSaveButtonHandler((data) => {
      this.update(data);
    });

    this._editComponent.setCancelButtonHandler(() => {
      this.replaceToWayPoint();
    });
  }

  update(event) {
    event.preventDefault();
    event.stopPropagation();
    const formData = new FormData(event.target);
    if (this._readonlyComponent) {
      this._readonlyComponent.removeElement();
    }

    const selectedOffers = [
      ...event.target.querySelectorAll(`.event__offer-checkbox:checked`)
    ].map((node) => node.parentNode);

    this._point = Object.assign(this._point, {
      startTime: new Date(formData.get(`event-start-time`)),
      endTime: new Date(formData.get(`event-end-time`)),
      price: formData.get(`event-price`),
      destinationPlace: formData.get(`event-destination`),
      isFavorite: formData.get(`event-favorite`) === `on`,
      offers: selectedOffers.map((offer) => ({
        id: offer.querySelector(`input`).id,
        title: offer.querySelector(`.event__offer-title`).textContent,
        price: Number(offer.querySelector(`.event__offer-price`).textContent)
      }))
    });

    this._readonlyComponent = new WayPointMarkupComponent(this._point);
    this.replaceToWayPoint();
  }

  render() {
    this._readonlyComponent = new WayPointMarkupComponent(this._point);
    this._editComponent = new EditEventMarkupComponent(this._point);

    if (this._mode === `read`) {
      renderComponent(this._container, this._readonlyComponent);
      this._readonlyComponent.setEditButtonClickHandler(() => {
        this.replaceToEditWayPoint(this._container, this._readonlyComponent);
      });
    } else {
      renderComponent(this._container, this._editComponent);
    }
  }
}
