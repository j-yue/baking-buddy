import React, { useState, useEffect } from "react";

import { Switch, Route, useHistory, useLocation } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// import logo from "./logo.svg";
import "./App.css";
import Faves from "./components/Faves";
import Home from "./components/Home";
import Search from "./components/Search";
import Settings from "./components/Settings";
import Substitute from "./components/Substitute";
import SUBSTITUTES from "./data";

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
  const [theme, setTheme] = useState("themeA");
  const [screen, setScreen] = useState(headerFromPath(location));

  //intialize state
  useEffect(() => {}, {});

  useEffect(() => {
    setScreen(headerFromPath(location));
    console.log("screen is", screen);
  }, [location]);

  return (
    <Grid
      container
      className="App"
      style={{ height: "100vh" }}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item style={{ height: "20%", width: "100%" }}>
        <h1>{screen}</h1>
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
                theme={theme}
                setTheme={setTheme}
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
  );
};

export default App;
