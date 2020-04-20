import React from "react";
import { Route } from "react-router-dom";
import Substitute from "./Substitute";

const SubstituteRoutes = ({ ...props }) => {
  const { substitutes, favorites, setFavorites } = props;
  return (
    <React.Fragment>
      {Object.keys(substitutes).map((key) => (
        <Route
          path={`/substitute/${key}`}
          component={() => (
            <Substitute
              ingredient={key}
              data={substitutes[key]}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          )}
          exact
          key={key}
        />
      ))}
    </React.Fragment>
  );
};

export default SubstituteRoutes;
