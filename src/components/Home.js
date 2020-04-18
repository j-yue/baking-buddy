import React from "react";

import Grid from "@material-ui/core/Grid";
import CardButton from "./CardButton";

const ACTIONS = ["search", "faves", "settings", "info"];

const Home = () => {
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid item style={{ width: "100%" }}>
          <h1>Home</h1>
        </Grid>
        {ACTIONS.map((action) => (
          <Grid item style={{ width: "40%" }} key={action}>
            <CardButton name={action} src={action} path={`/${action}`} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Home;
