import React from "react";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

const Ingredient = ({ data }) => {
  const [ingredient, amount, unit] = data;
  return (
    <Grid container>
      <Grid item xs={8}>
        <Typography>{ingredient}</Typography>
      </Grid>

      <Grid item xs={1}>
        <Typography>{amount}</Typography>
      </Grid>

      <Grid item xs={1}>
        <Typography>{unit}</Typography>
      </Grid>
    </Grid>
  );
};

export default Ingredient;
