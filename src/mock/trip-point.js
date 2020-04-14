const generateDescriptionText = () => {
  const descriptionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

  const textArray = descriptionText.split(`.`);

  let resultText = ``;
  const min = 0;
  const max = textArray.length - 1;
  const numberOfStrings = Math.floor(Math.random() * (+5 - 1)) + 1;

  for (let i = 1; i <= numberOfStrings; i++) {
    const random = Math.floor(Math.random() * (+max - min)) + min;
    resultText += textArray[random] + `. `;
  }
  return resultText;
};

const generatePoint = () => {

  // debugger

  return [
    {
      pointType: `Taxi`,
      price: 10,
      beginTime: `24/12/2019 15:00`,
      endTime: `25/12/2019 16:00`,
      destination: {
        title: ``,
        description: generateDescriptionText(),
        pictures: [
          `http://picsum.photos/248/152?r=${Math.random()}`,
          `http://picsum.photos/248/152?r=${Math.random()}`,
          `http://picsum.photos/248/152?r=${Math.random()}`,
          `http://picsum.photos/248/152?r=${Math.random()}`,
        ]
      },
      additionalOptions: [
        {
          option: ``,
          price: ``
        },
        {
          option: ``,
          price: ``
        },
        {
          option: ``,
          price: ``
        },
        {
          option: ``,
          price: ``
        },
      ]
    },
    {},
    {},
  ];
};

export {generatePoint};
