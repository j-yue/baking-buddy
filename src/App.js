import React from "react";

import { Switch, Route, Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// import logo from "./logo.svg";
import "./App.css";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import Missing from "./components/Missing";
import Search from "./components/Search";
import Settings from "./components/Settings";
import Substitute from "./components/Substitute";
import SUBSTITUTES from "./data";

const App = () => {
  return (
    <Grid container className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/favorites" component={Favorites} exact />
        <Route path="/settings" component={Settings} exact />
        <Route path="/missing" component={Missing} exact />
        <Route path="/search" component={Search} exact />

        {Object.keys(SUBSTITUTES).map((key) => (
          <Route
            path={`/substitute/${key}`}
            component={() => (
              <Substitute ingredient={key} data={SUBSTITUTES[key]} />
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
