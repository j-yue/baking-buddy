import React from "react";
import Box from "@material-ui/core/Box";
import VeganSettings from "./VeganSettings";
import ThemeSettings from "./ThemeSettings";

const Settings = ({ ...props }) => {
  const { vegan, setVegan, palette, setPalette } = props;
  return (
    <React.Fragment>
      <Box>
        <VeganSettings status={vegan} vegan={vegan} setVegan={setVegan} />
      </Box>
      <Box pt="5vh">
        <ThemeSettings palette={palette} setPalette={setPalette} />
      </Box>
    </React.Fragment>
  );
};

export default Settings;
