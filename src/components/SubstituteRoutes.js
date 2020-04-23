import React, { useContext } from "react";
import { Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Substitute from "./Substitute";
import FavoritesContext from "../context/FavoritesContext";

const FavesMessage = () => {
  return (
    <Typography variant="body1" component="div">
      No saved substitutes
    </Typography>
  );
};

const favesBody = (favorites, key, substitutes) => {
  if (favorites[key] === undefined) return <FavesMessage />;
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
