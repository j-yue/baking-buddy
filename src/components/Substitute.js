import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SVG from "react-inlinesvg";
import SubstituteCard from "./SubstituteCard";
import FavoritesContext from "../context/FavoritesContext";

const showFaves = (location) => {
  return location.pathname.includes("showFaves");
};

const filterFavorites = (substitutes, favoritesValue) => {
  const result = substitutes.filter((sub) => favoritesValue.includes(sub.id));
  return result;
};

const Substitute = ({ ...props }) => {
  const { data, ingredient } = props;
  const { name, yield: amount, substitutes } = data;
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const location = useLocation();

  let updatedSubstitutes = showFaves(location)
    ? filterFavorites(substitutes, favorites[ingredient])
    : substitutes;

  let count = 0;
  return (
    <React.Fragment>
      <Box p="1rem">
        <SVG src={require(`../icons/${ingredient}.svg`)} width={100} />
      </Box>
      <Typography variant="body1" component="div">
        {amount.join(" ")}
      </Typography>
      <Grid container direction="column" justify="center" alignItems="center">
        {updatedSubstitutes.map((substitute) => (
          <Grid item style={{ width: "100%", margin: ".5rem 0" }} key={count++}>
            <SubstituteCard
              data={substitute}
              ingredient={ingredient}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Substitute;
