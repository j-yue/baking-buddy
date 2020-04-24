import React, { useState, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Navbar from "./components/Navbar";
import FavoritesContext from "./context/FavoritesContext";
import * as PALETTES from "./palettes.js";
import AllRoutes from "./components/AllRoutes";
import { createTheme } from "./theme.js";
const headerFromPath = (path) => {
  const pathName = path.pathname;
  if (pathName === "/") return "HOME";

  const splitPath = pathName.split("/");

  if (splitPath[1] === "substitute") return splitPath[2].replace("_", " ");
  return splitPath[1].toUpperCase();
};

const App = () => {
  const [favorites, setFavorites] = useState({
    EGG: [1, 4],
    MILK: [1],
    BUTTER: [2, 3],
    HEAVY_CREAM: [2],
  });

  const history = useHistory();
  const location = useLocation();
  const [vegan, setVegan] = useState(false);
  const [palette, setPalette] = useState("pinkLemonade");
  const [theme, setTheme] = useState(createTheme(palette));
  const [screen, setScreen] = useState(headerFromPath(location));

  //whenever palette changes update the theme
  useEffect(() => {
    setTheme(createTheme(palette));
  }, [palette]);

  useEffect(() => {
    setScreen(headerFromPath(location));
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar screen={screen} history={history} />
      <FavoritesContext.Provider value={{ favorites, setFavorites }}>
        <Grid
          container
          className="App"
          style={{
            minHeight: "85vh",
            background: theme.palette.secondary.light,
          }}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            style={{ height: "100%", width: "90%", padding: "1rem 0" }}
          >
            <AllRoutes
              favorites={favorites}
              vegan={vegan}
              setVegan={setVegan}
              palette={palette}
              setPalette={setPalette}
            />
          </Grid>
        </Grid>
      </FavoritesContext.Provider>
    </ThemeProvider>
  );
};

export default App;
