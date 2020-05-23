export const SORTING_TYPE = {
  DEFAULT: `DEFAULT`,
  EVENT: `EVENT`,
  PRICE: `PRICE`,
  TIME: `TIME`
};

export const FILTER_TYPE = {
  EVERYTHING: `EVERYTHING`,
  PAST: `PAST`,
  FUTURE: `FUTURE`
};

export class Trip {
  constructor(points) {
    this.points = points;
    this.sorting = SORTING_TYPE.DEFAULT;
    this.filtering = FILTER_TYPE.EVERYTHING;
  }

  setSorting(sorting) {
    this.sorting = sorting;
  }

  setFiltering(filtering) {
    this.filtering = filtering;
  }

  _filterFuture() {
    const time = Date.now();
    return this.points.slice().filter((point) => {
      return point.startTime.getTime() >= time;
    });
  }

  _filterPast() {
    const time = Date.now();
    return this.points.slice().filter((point) => {
      return point.startTime.getTime() < time;
    });
  }

  getCurrentState() {
    const sorting = this.sorting;
    const filtering = this.filtering;

    let points = [];

    switch (filtering) {
      case FILTER_TYPE.FUTURE:
        points = this._filterFuture();
        break;
      case FILTER_TYPE.PAST:
        points = this._filterPast();
        break;
      default:
        points = this.points.slice();
        break;
    }

    switch (sorting) {
      case SORTING_TYPE.EVENT:
        return this._eventSorting(points);
      case SORTING_TYPE.TIME:
        return this._timeSorting(points);
      case SORTING_TYPE.PRICE:
        return this._priceSorting(points);
      default:
        return this._defaultSorting(points);
    }
  }

  groupByDays(points) {
    const tripDays = new Map();

    points.forEach((point) => {
      const startTime = (new Date(point.startTime.toDateString())).getTime();
      if (tripDays.get(startTime)) {
        tripDays.get(startTime).push(point);
      } else {
        tripDays.set(startTime, [point]);
      }
    });

    const tripDaysArray = [];

    tripDays.forEach((value, key) => {
      tripDaysArray.push({
        id: key,
        dayVisible: this.sorting === SORTING_TYPE.DEFAULT,
        day: new Date(key),
        points: value
      });
    });

    return tripDaysArray;
  }

  _defaultSorting(points) {
    const sortedPoints = points
      .slice()
      .sort((first, second) => {
        return first.startTime > second.startTime ? 1 : -1;
      });

    return this.groupByDays(sortedPoints);
  }

  _timeSorting(points) {
    const sortedPoints = points
      .slice()
      .sort((first, second) => {
        return first.endTime.getTime() - first.startTime.getTime() > second.endTime.getTime() - second.startTime.getTime() ? -1 : 1;
      });

    return [{
      id: 1,
      dayVisible: this.sorting === SORTING_TYPE.DEFAULT,
      day: new Date(),
      points: sortedPoints
    }];
  }

  _eventSorting(points) {
    const sortedPoints = points
      .slice()
      .sort((first, second) => {
        return first.destinationPlace > second.destinationPlace ? -1 : 1;
      });

    return [{
      id: 1,
      dayVisible: this.sorting === SORTING_TYPE.DEFAULT,
      day: new Date(),
      points: sortedPoints
    }];
  }

  _priceSorting(points) {
    const sortedPoints = points
      .slice()
      .sort((first, second) => {
        return first.price > second.price ? -1 : 1;
      });

    return [{
      id: 1,
      dayVisible: this.sorting === SORTING_TYPE.DEFAULT,
      day: new Date(),
      points: sortedPoints
    }];
  }
}


