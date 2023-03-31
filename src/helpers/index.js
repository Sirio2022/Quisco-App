const formatearDinero = (dinero) => {
  return dinero.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
  });
};

export { formatearDinero };
