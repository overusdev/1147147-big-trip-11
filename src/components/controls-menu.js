const createFilterMarkup = (filter, isChecked) => {
  const {id, title} = filter;
  console.log(filter);
  return (
    `<div class="trip-filters__filter">
      <input id="filter-${id}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${id}" ${isChecked ? `checked` : ``}>
      <label class="trip-filters__filter-label" for="filter-everything">${title}</label>
    </div>`
  );
};
export const createControlsMenuTemplate = (filters) => {
  const tripFilters = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);

  return (
    `<h2 class="visually-hidden">Switch trip view</h2>
    <nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn" href="#">Table</a>
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Stats</a>
    </nav>

    <h2 class="visually-hidden">Filter events</h2>
    <form class="trip-filters" action="#" method="get">
      ${tripFilters}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};