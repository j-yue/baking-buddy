import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Radio from "@material-ui/core/Radio";

const Settings = () => {
  const [vegan, setVegan] = useState(false);
  const [theme, setTheme] = useState("themeA");

  return (
    <React.Fragment>
      <h1 style={{ margin: "auto" }}>Settings</h1>
      <Grid container direction="column">
        <Grid item>
          <h2>Vegan</h2>
          <Switch checked={vegan} onChange={() => setVegan(!vegan)} />
          {vegan && <p>hide nonvegan substitutes</p>}
          {!vegan && <p>show nonvegan substitutes</p>}
        </Grid>
        <Grid item>
          <h2>Themes</h2>
          <FormControl component="fieldset">
            {/* <FormLabel component="legend">Gender</FormLabel> */}
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
              <FormControlLabel
                value="themeA"
                control={<Radio color="primary" />}
                style={{
                  width: "fit-content",
                  margin: 0,
                }}
              />
              <FormControlLabel
                value="themeB"
                control={<Radio color="secondary" />}
                style={{ width: "fit-content", margin: 0 }}
              />
              <FormControlLabel
                value="themeC"
                control={<Radio color="secondary" />}
                style={{ width: "fit-content", margin: 0 }}
              />
              <FormControlLabel
                value="themeD"
                control={<Radio color="secondary" />}
                style={{
                  width: "fit-content",
                  margin: 0,
                }}
              />
            </RadioGroup>
          </FormControl>
          <h3>selected theme: {theme}</h3>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Settings;
