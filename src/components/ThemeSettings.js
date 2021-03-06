import React from "react";
import { useTheme } from "@material-ui/core/styles";
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
  const { palette, setPalette } = props;
  const theme = useTheme();
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
          value={palette}
          onChange={(e) => setPalette(e.target.value)}
          style={{
            width: "100%",
            ...theme.variants.center,
            flexWrap: "wrap",
            paddingTop: ".5rem",
          }}
        >
          {result}
        </RadioGroup>
      </FormControl>
    </React.Fragment>
  );
};

export default ThemeSettings;
