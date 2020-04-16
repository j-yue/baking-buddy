import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const Yield = ({ amount }) => {
  const [size, unit] = amount;
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={1}>
        {size}
      </Grid>
      <Grid item xs={1}>
        {unit}
      </Grid>
      <Grid item xs={1}>
        <IconButton aria-label="edit" color="primary">
          <EditIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Yield;
