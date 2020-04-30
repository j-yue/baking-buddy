import React from "react";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Message from "./Message";

const VeganMessage = ({ status }) => {
  return (
    <React.Fragment>
      <Message status={status} message="Nonvegan substitutes are hidden" />
      <Message status={!status} message="All substitutes are shown" />
    </React.Fragment>
  );
};

const VeganSettings = ({ ...props }) => {
  const { vegan, setVegan } = props;

  return (
    <React.Fragment>
      <Typography
        variant="h2"
        component="h2"
        style={{ paddingBottom: ".5rem" }}
      >
        Vegan
      </Typography>
      <Switch
        checked={vegan}
        color="primary"
        onChange={() => setVegan(!vegan)}
      />
      <VeganMessage status={vegan} />
    </React.Fragment>
  );
};

export default VeganSettings;
