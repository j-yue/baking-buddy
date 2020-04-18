import React from "react";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";

const CardButton = ({ ...props }) => {
  //   const { key: ingredientKey, name, path } = props;
  const { name, src, path } = props;

  return (
    <Link
      to={path}
      style={{
        textDecoration: "none",
        "&:hover": { cursor: "pointer" },
      }}
    >
      <Card style={{ padding: ".5rem" }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ minHeight: "20vh" }}
        >
          <Grid item>
            <SVG src={require(`../icons/${src}.svg`)} width={50} />
          </Grid>
          <Grid item>{name.toUpperCase()}</Grid>
        </Grid>
      </Card>
    </Link>
  );
};

export default CardButton;
