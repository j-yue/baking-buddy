import React, { useState } from "react";

import { Switch, Route, Link } from "react-router-dom";

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

const App = () => {
  const [favorites, setFavorites] = useState({
    EGG: [1, 4],
    BAKING_SODA: [2, 3],
  });
  const [vegan, setVegan] = useState(false);
  const [theme, setTheme] = useState("themeA");

  return (
    <Grid container className="App">
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
  );
};

export default App;
