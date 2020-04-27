import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import * as PALETTES from "./palettes.js";

//create theme with dynamic palette
//colors is a palette object created by createPalette in palettes.js
const createTheme = (colors) => {
  const { palette } = PALETTES[colors];
  const theme = createMuiTheme({
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
      htmlFontSize: 10,
      h1: {
        fontSize: "2.5rem",
        "&:hover": {
          cursor: "default",
        },
      },
      h2: {
        fontSize: "2rem",
      },
      //sections in info screen
      h3: {
        fontSize: "5vh",
        padding: "2rem 0 1rem 0",
      },
      body1: {
        fontFamily: [
          "Didact Gothic",
          "Raleway",
          "Oxygen",
          "Didact Gothic",
          "sans-serif",
        ].join(","),
        fontSize: "1.5rem",
      },
      //for text in special elements like cards, cardButtons
      body2: {
        fontSize: "1.5rem",
      },
    },
    overrides: {
      MuiIconButton: {
        root: {
          padding: 0,
        },
      },
      MuiCardContent: {
        root: {
          padding: "1rem .5rem",
          "&:last-child": {
            paddingBottom: "1rem",
          },
        },
      },
    },
    variants: {
      vegan: {
        fontFamily: "Noto Sans, Ubuntu, sans-serif",
        float: "right",
        marginRight: "1rem",
        fontWeight: "bold",
        fontSize: "1.5rem",
        textTransform: "uppercase",
      },
      center: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
      },
      cardButton: {
        width: "35vw",
        minHeight: "30vh",
      },
      searchInput: {
        fontSize: "1.5rem",
        lineHeight: "2rem",
        padding: ".25rem 1rem",
        background: "#fff",
        border: "2px solid black",
        borderRadius: ".5rem",
        width: "100%",
      },
      yield: {
        textTransform: "uppercase",
        fontWeight: "bold",
        marginRight: ".5rem",
        letterSpacing: "1.5px",
      },
      link: {
        fontFamily: ["Ubuntu", "Noto Sans", "sans-serif"].join(","),
        color: "inherit",
      },
    },
  });
  return responsiveFontSizes(theme);
};

export { createTheme };
