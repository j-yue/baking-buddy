import React from "react";

import { useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const CardButton = ({ ...props }) => {
  const { name, component: Component } = props;
  const theme = useTheme();
  const { light, contrastText } = theme.palette.primary;
  return (
    <Card
      style={{
        padding: ".5rem",
        background: light,
        color: contrastText,
      }}
    >
      <Grid
        container
        style={{
          ...theme.variants.cardButton,
          ...theme.variants.center,
          flexFlow: "column nowrap",
        }}
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
