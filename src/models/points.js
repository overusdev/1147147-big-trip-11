import {EVENT_TYPES} from "../mock/constants";

const getType = (str) => {
  str = (str !== `check-in`) ? str : `check`;
  return EVENT_TYPES.find((el) => el.type.toLowerCase() === str);
};

const getInfo = (description, photos) => {
  description = description || ``;
  return {info: description, photos};
};

export class Points {
  // Array object of backend points
  constructor(points) {
    this.points = points.map((p) => new Point(p));
  }

  getPoints() {
    return this.points;
  }

  updatePoint(point) {
    const foundPoint = this.points.find((p) => p.id === point.id);
    if (foundPoint) {
      Object.assign(foundPoint, point);
    }
  }

  deletePoint(id) {
    this.points = this.points.filter((p) => p.id !== id);
  }
}

export class Point {
  // data is getting from backend
  constructor(data) {
    this.id = data[`id`];
    this.type = getType(data[`type`]);
    this.startTime = new Date(data[`date_from`]);
    this.endTime = new Date(data[`date_to`]);
    this.destinationPlace = data[`destination`][`name`];
    this.destinationInfo = getInfo(data[`destination`][`description`], data[`destination`][`pictures`]);
    this.price = data[`base_price`];
    this.offers = (data[`offers`] || []).map((offer) => {
      offer.id = offer.title + offer.price;
      return offer;
    });
    this.isFavorite = data[`is_offers`] || false;
  }
}
