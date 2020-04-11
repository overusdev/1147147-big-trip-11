const createFilterMarkup = (id, checked, title) => {
  return (
    ` <div class="trip-filters__filter">
        <input id="filter-${id}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${id}" ${checked ? `checked` : `` }>
        <label class="trip-filters__filter-label" for="filter-everything">${title}</label>
      </div>
    `
  );
};
export const createControlsMenuTemplate = () => {
  const tripFilters = [
    {
      id: `everything`,
      isChecked: true,
      title: `Everything`
    },
    {
      id: `future`,
      isChecked: false,
      title: `Future`
    },
    {
      id: `past`,
      isChecked: false,
      title: `Past`
    },
  ].map((it) => createFilterMarkup(it.id, it.isChecked, it.title)).join(`\n`);

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
