import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import VeganSettings from "./VeganSettings";
import ThemeSettings from "./ThemeSettings";

const Settings = () => {
  const [vegan, setVegan] = useState(false);
  const [theme, setTheme] = useState("pinkLemonade");

  return (
    <React.Fragment>
      {/* <Grid container direction="column">
        <Grid item> */}
      <Box mb="1rem" mt="1rem">
        <VeganSettings status={vegan} vegan={vegan} setVegan={setVegan} />
      </Box>
      {/* </Grid> */}

      {/* <Grid item> */}
      <Box pb="2rem">
        <ThemeSettings theme={theme} setTheme={setTheme} />
      </Box>
      {/* </Grid>
      </Grid> */}
    </React.Fragment>
  );
};

export default Settings;
