import {AbstractComponent} from "./abstract-component";
export class SiteMenuButtonMarkupComponent extends AbstractComponent {
  getTemplate() {
    return createSiteMenuButton();
  }
}
export const createSiteMenuButton = () => {
  return (
    `<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>`
  );
};
