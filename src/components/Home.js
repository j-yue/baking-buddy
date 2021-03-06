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
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {Object.keys(ACTIONS).map((action) => (
        <Grid item key={action}>
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
