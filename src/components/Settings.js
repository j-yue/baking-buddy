import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import VeganSettings from "./VeganSettings";
import ThemeSettings from "./ThemeSettings";

const Settings = ({ ...props }) => {
  const { vegan, setVegan, palette, setPalette } = props;
  return (
    <React.Fragment>
      <Box mb="2.5rem" mt="1rem">
        <VeganSettings status={vegan} vegan={vegan} setVegan={setVegan} />
      </Box>
      <Box pb="2rem">
        <ThemeSettings palette={palette} setPalette={setPalette} />
      </Box>
    </React.Fragment>
  );
};

export default Settings;
