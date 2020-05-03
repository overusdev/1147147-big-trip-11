import {BaseComponent} from "./base-component";
export class SiteMenuButtonMarkupComponent extends BaseComponent {
  getTemplate() {
    return createSiteMenuButton();
  }
}
export const createSiteMenuButton = () => {
  return (
    `<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>`
  );
};
