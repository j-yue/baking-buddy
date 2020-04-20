import React from "react";

import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
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
        style={{ height: "80%", width: "100%" }}
      >
        {ACTIONS.map((action) => (
          <Grid
            item
            key={action}
            style={{ width: "40%", height: "fit-content" }}
          >
            <CardButton name={action} src={action} path={`/${action}`} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Home;
