import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";

const Ingredient = ({ data }) => {
  const [ingredient, amount, unit] = data;
  return (
    <Box pb=".5rem">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Typography variant="body1" component="h1">
            {ingredient}
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography variant="body1">{amount}</Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography variant="body1">{unit}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Ingredient;
