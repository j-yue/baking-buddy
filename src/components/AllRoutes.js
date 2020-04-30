import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Settings from "./Settings";
import Faves from "./Faves";
import Search from "./Search";
import Info from "./Info";
import SUBSTITUTES from "../data";
import Substitute from "./Substitute";
import Message from "./Message";

const favesBody = (favorites, key, substitutes) => {
  const status = favorites[key] === undefined;
  if (status) return <Message status={status} message="No saved substitutes" />;
  return <Substitute data={substitutes[key]} ingredient={key} />;
};

const AllRoutes = ({ ...props }) => {
  const { favorites, palette, setPalette, vegan, setVegan } = props;
  const substitutes = SUBSTITUTES;
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

      {Object.keys(substitutes).map((key) => (
        <Route
          path={`/substitute/${key}`}
          component={() => (
            <Substitute data={substitutes[key]} ingredient={key} />
          )}
          exact
          key={key}
        />
      ))}

      {Object.keys(substitutes).map((key) => (
        <Route
          path={`/substitute/${key}/showFaves`}
          component={() => favesBody(favorites, key, substitutes)}
          exact
          key={key}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default AllRoutes;
