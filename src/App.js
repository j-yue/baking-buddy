import React, { useState, useEffect } from "react";

import { Switch, Route, useHistory, useLocation } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import Faves from "./components/Faves";
import Home from "./components/Home";
import Search from "./components/Search";
import Settings from "./components/Settings";
import Substitute from "./components/Substitute";
import SUBSTITUTES from "./data";

import * as CAKES from "./themes.js";

const THEME = createMuiTheme({
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
      fontSize: "3rem",
    },
  },
  overrides: {},
});

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
    BAKING_SODA: [2, 3],
  });

  const history = useHistory();
  const location = useLocation();
  const [vegan, setVegan] = useState(false);
  // const [theme, setTheme] = useState("lemonMeringue");
  const [palette, setPalette] = useState("lemonMeringue");
  const [screen, setScreen] = useState(headerFromPath(location));

  //might need to add useeffect hook
  let muiPalette = CAKES[palette];

  useEffect(() => {
    setScreen(headerFromPath(location));
  }, [location]);

  return (
    <ThemeProvider theme={createMuiTheme({ palette: muiPalette.palette })}>
      <ThemeProvider theme={THEME}>
        <CssBaseline />
        <Container>
          <Grid
            container
            className="App"
            style={{ height: "100vh" }}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item style={{ height: "20%", width: "100%" }}>
              <Typography variant="h1" component="h1">
                {screen}
              </Typography>
            </Grid>
            <Grid item style={{ height: "80%", width: "100%" }}>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route
                  path="/faves"
                  component={() => (
                    <Faves
                      favorites={favorites}
                      setFavorites={setFavorites}
                      data={SUBSTITUTES}
                    />
                  )}
                  exact
                />
                <Route
                  path="/settings"
                  component={() => (
                    <Settings
                      palette={palette}
                      setPalette={setPalette}
                      allPalettes={CAKES}
                      // cake={cake}
                      // setCake={setCake}
                      vegan={vegan}
                      setVegan={setVegan}
                    />
                  )}
                  exact
                />
                <Route path="/search" component={Search} exact />

                {Object.keys(SUBSTITUTES).map((key) => (
                  <Route
                    path={`/substitute/${key}`}
                    component={() => (
                      <Substitute
                        ingredient={key}
                        data={SUBSTITUTES[key]}
                        favorites={favorites}
                        setFavorites={setFavorites}
                      />
                    )}
                    exact
                    key={key}
                  />
                ))}
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </ThemeProvider>
  );
};

export default App;
