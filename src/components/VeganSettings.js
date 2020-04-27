import React from "react";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

const VeganMessage = ({ status }) => {
  if (status)
    return (
      <Typography variant="body1" component="p">
        hide nonvegan substitutes
      </Typography>
    );
  else
    return (
      <Typography variant="body1" component="p">
        show nonvegan substitutes
      </Typography>
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
