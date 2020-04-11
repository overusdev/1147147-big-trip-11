const generatePoint = () => {
  return [
    {
      pointType: `Taxi`,
      price: 10,
      beginTime: `24/12/2019 15:00`,
      endTime: `25/12/2019 16:00`,
      destination: {
        title: ``,
        description: ``,
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
