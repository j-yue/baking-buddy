import React, { useState, useEffect } from "react";

import { Switch, Route, useHistory, useLocation } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
// import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import "./App.css";
import Faves from "./components/Faves";
import Home from "./components/Home";
import Search from "./components/Search";
import Settings from "./components/Settings";
import SUBSTITUTES from "./data";
import SubstituteRoutes from "./components/SubstituteRoutes";
import Navbar from "./components/Navbar";
import FavoritesContext from "./context/FavoritesContext";
// import FavesRoutes from "./components/FavesRoutes";
import * as PALETTES from "./palettes.js";
// import SubstituteCard from "./SubstituteCard";
import Substitute from "./components/Substitute";
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
          <Grid item style={{ height: "100%", width: "90%" }}>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route
                path="/faves"
                component={() => (
                  <Faves favorites={favorites} data={SUBSTITUTES} />
                )}
                exact
              />
              <Route
                path="/settings"
                component={() => (
                  <Settings
                    palette={palette}
                    setPalette={setPalette}
                    vegan={vegan}
                    setVegan={setVegan}
                  />
                )}
                exact
              />
              <Route path="/search" component={Search} exact />

              <SubstituteRoutes substitutes={SUBSTITUTES} />
            </Switch>
          </Grid>
        </Grid>
      </FavoritesContext.Provider>
    </ThemeProvider>
  );
};

export default App;
