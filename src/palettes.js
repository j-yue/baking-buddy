//generate palette object that follows MUI's palette obj schema
const createPalette = (primary, secondary) => {
  return {
    palette: {
      primary: { main: primary },
      secondary: { main: secondary },
    },
  };
};

const redVelvet = createPalette("#6e3129", "#c2a9a7");
const matcha = createPalette("#243024", "#859a28");
const coffee = createPalette("#492A20", "#b08858");
const pinkLemonade = createPalette("#e4798a", "#f7e39c");
const coconut = createPalette("#e2d4ca", "#8f4d2d");
const carrotCake = createPalette("#cd6a3d", "#e0d9bc");
const blackForest = createPalette("#301e1c", "#9E2C26");
const tiramisu = createPalette("#DFC8B9", "#a86d4b");

export {
  redVelvet,
  matcha,
  coffee,
  pinkLemonade,
  coconut,
  carrotCake,
  blackForest,
  tiramisu,
};
