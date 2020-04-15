import React from "react";

import { Switch, Route, Link } from "react-router-dom";

// import logo from "./logo.svg";
import "./App.css";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import Missing from "./components/Missing";
import Search from "./components/Search";
import Settings from "./components/Settings";
import Substitutes from "./components/Substitutes";

function App() {
  return (
    <div className="App">
      <h1>Baking Buddy PWA</h1>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/favorites" component={Favorites} exact />
        <Route path="/settings" component={Settings} exact />
        <Route path="/missing" component={Missing} exact />
        <Route path="/search" component={Search} exact />
        <Route path="/Substitutes" component={Substitutes} exact />
      </Switch>
    </div>
  );
}

export default App;
