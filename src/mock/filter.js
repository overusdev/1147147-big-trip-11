const generateFilters = () => {
  return [
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
  ];
};

export {generateFilters};

