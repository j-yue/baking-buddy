import React from "react";

import { useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const CardButton = ({ ...props }) => {
  const { name, component: Component } = props;
  const theme = useTheme();
  return (
    <Card style={{ padding: ".5rem", background: theme.palette.primary.light }}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ minHeight: "20vh" }}
      >
        <Grid item>
          <Component />
        </Grid>
        <Grid item>
          <Typography variant="body2" component="h3">
            {name.toUpperCase()}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardButton;
