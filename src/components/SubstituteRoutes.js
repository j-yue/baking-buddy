import React, { useContext } from "react";
import { Route } from "react-router-dom";
import Substitute from "./Substitute";
import FavoritesContext from "../context/FavoritesContext";
const SubstituteRoutes = ({ ...props }) => {
  // const { substitutes, favorites, setFavorites } = props;
  const { substitutes } = props;
  const { favorites } = useContext(FavoritesContext);
  return (
    <React.Fragment>
      {Object.keys(substitutes).map((key) => (
        <Route
          path={`/substitute/${key}`}
          component={() =>
            favorites[key] === undefined ? (
              <div>no favorites for {substitutes[key].name}</div>
            ) : (
              <Substitute data={substitutes[key]} ingredient={key} />
            )
          }
          key={key}
        />
      ))}
    </React.Fragment>
  );
};

export default SubstituteRoutes;
