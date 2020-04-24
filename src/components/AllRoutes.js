import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Settings from "./Settings";
import Faves from "./Faves";
import Search from "./Search";
import Info from "./Info";
import SubstituteRoutes from "./SubstituteRoutes";
import SUBSTITUTES from "../data";

const AllRoutes = ({ ...props }) => {
  const { favorites, palette, setPalette, vegan, setVegan } = props;
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route
        path="/faves"
        component={() => <Faves favorites={favorites} data={SUBSTITUTES} />}
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
      <Route path="/info" component={Info} exact />

      <SubstituteRoutes substitutes={SUBSTITUTES} />
    </Switch>
  );
};

export default AllRoutes;
