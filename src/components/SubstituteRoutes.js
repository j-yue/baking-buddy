import React, { useContext } from "react";
import { Route } from "react-router-dom";
import Substitute from "./Substitute";
import Message from "./Message";
import FavoritesContext from "../context/FavoritesContext";

const favesBody = (favorites, key, substitutes) => {
  const status = favorites[key] === undefined;
  if (status) return <Message status={status} message="No saved substitutes" />;
  return <Substitute data={substitutes[key]} ingredient={key} />;
};

const SubstituteRoutes = ({ ...props }) => {
  const { substitutes } = props;
  const { favorites } = useContext(FavoritesContext);
  return (
    <React.Fragment>
      {Object.keys(substitutes).map((key) => (
        <React.Fragment key={key}>
          <Route
            path={`/substitute/${key}`}
            component={() => (
              <Substitute data={substitutes[key]} ingredient={key} />
            )}
            exact
          />
          <Route
            path={`/substitute/${key}/showFaves`}
            component={() => favesBody(favorites, key, substitutes)}
            exact
          />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default SubstituteRoutes;
