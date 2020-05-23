const generateDescriptionText = () => {
  const descriptionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at
    fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex,
    convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae,
    sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
    Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.
     In rutrum ac purus sit amet tempus.`;

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

export const getTrip = () => {
  return {
    days: [
      {
        id: 1,
        day: new Date(),
        wayPoints: generatePoints(2)
      },
      {
        id: 2,
        day: new Date(),
        wayPoints: generatePoints(3)
      },
    ]
  };
};

const generateNewPoint = () => {

  return {
    pointType: `Taxi`,
    price: 10,
    beginTime: `24/12/2019 15:00`,
    endTime: `25/12/2019 16:00`,
    destination: {
      description: generateDescriptionText(),
      pictures: [
        `http://picsum.photos/248/152?r=${Math.random()}`,
        `http://picsum.photos/248/152?r=${Math.random()}`,
        `http://picsum.photos/248/152?r=${Math.random()}`,
        `http://picsum.photos/248/152?r=${Math.random()}`,
      ]
    },
    offers: [
      {
        id: 1,
        name: `Add luggage`,
        price: 100
      },
      {
        id: 2,
        name: `Switch to comfort class`,
        price: 200
      },
      {
        id: 3,
        name: `Add meal`,
        price: 12000
      },
      {
        id: 4,
        name: `Choose seats`,
        price: 1200
      },
      {
        id: 5,
        name: `Travel by train`,
        price: 1222
      }
    ]
  };
};

export const getMockPlaces = () => {
  return [
    `Amsterdam`,
    `Geneva`,
    `Chamonix`,
    `Saint Petersburg`
  ];
};

const generatePointItem = () => {
  return {
    pointType: `Taxi`,
    isFavorite: false,
    wayTo: `Amsterdam`,
    price: 10,
    startTime: `2019-03-18T10:30`,
    endTime: `2019-03-18T11:00`,
    totalTime: `1H 20M`,
    offers: [
      {
        id: 1,
        name: `Book tickets`,
        price: 40,
      },
      {
        id: 2,
        name: `Lunch in city`,
        price: 30,
      },
    ],
  };
};

const generatePoints = (count) => {
  let result = [];

  for (let i = 0; i < count; i++) {
    result.push(generatePointItem());
  }

  return result;
};

export {generateNewPoint};
export {generatePoints};
