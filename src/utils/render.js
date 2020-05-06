export const renderComponent = (container, childComponent, place) => {
  if (place === `before`) {
    container.prepend(childComponent.createElement());
  } else {
    container.append(childComponent.createElement());
  }
};

export const removeComponent = (element) => {
  element.getElement().remove();
  element.removeElement();
};
