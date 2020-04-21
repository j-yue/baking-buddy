import React from "react";

import Grid from "@material-ui/core/Grid";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import HomeCardButton from "./HomeCardButton";

const ACTIONS = {
  search: SearchOutlinedIcon,
  faves: FavoriteBorderIcon,
  settings: SettingsIcon,
  info: InfoOutlinedIcon,
};

const Home = () => {
  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
      style={{
        height: "80%",
        width: "100%",
      }}
    >
      {Object.keys(ACTIONS).map((action) => (
        <Grid item key={action} style={{ width: "40%", height: "fit-content" }}>
          <HomeCardButton
            name={action}
            src={action}
            path={`/${action}`}
            component={ACTIONS[action]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
