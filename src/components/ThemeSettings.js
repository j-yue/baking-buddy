import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";
import * as PALETTES from "../palettes";

const PaletteRadio = ({ palette }) => {
  return (
    <FormControlLabel
      value={palette}
      control={<Radio color="primary" />}
      label={palette}
      style={{
        width: "fit-content",
      }}
    />
  );
};

const ThemeSettings = ({ ...props }) => {
  const { theme, setTheme } = props;
  const result = Object.keys(PALETTES).map((palette) => (
    <PaletteRadio palette={palette} key={palette} />
  ));
  return (
    <React.Fragment>
      <Typography variant="h2" component="h2">
        Themes
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="themes"
          // name="gender1"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={{
            width: "100%",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {result}
        </RadioGroup>
      </FormControl>
    </React.Fragment>
  );
};

export default ThemeSettings;
