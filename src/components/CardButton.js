import React from "react";
import { Link } from "react-router-dom";

import { useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const CardButton = ({ ...props }) => {
  const { name, path, component: Component } = props;
  const theme = useTheme();
  return (
    <Link
      to={path}
      style={{
        textDecoration: "none",
        "&:hover": { cursor: "pointer" },
      }}
    >
      <Card
        style={{ padding: ".5rem", background: theme.palette.primary.light }}
      >
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
    </Link>
  );
};

export default CardButton;
