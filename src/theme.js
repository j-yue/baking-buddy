import { createMuiTheme } from "@material-ui/core/styles";
import * as PALETTES from "./palettes.js";

//create theme with dynamic palette
//colors is a palette object created by createPalette in palettes.js
const createTheme = (colors) => {
  const { palette } = PALETTES[colors];
  return createMuiTheme({
    palette,
    typography: {
      fontFamily: [
        "Ubuntu",
        "Noto Sans",
        "sans-serif",
        "Raleway",
        "Oxygen",
        "Didact Gothic",
      ].join(","),
      fontSize: 10,
      h1: {
        fontSize: "5vh",
      },
      body1: {
        fontFamily: [
          "Didact Gothic",
          "Raleway",
          "Oxygen",
          "Didact Gothic",
          "sans-serif",
        ].join(","),
        fontSize: "1.25rem",
      },
      body2: {
        fontSize: "1rem",
      },
    },
    variants: {
      vegan: {
        fontFamily: "Noto Sans, Ubuntu, sans-serif",
        float: "right",
        fontWeight: "bold",
        fontSize: "1.5rem",
        textTransform: "uppercase",
      },
    },
  });
};

export { createTheme };
