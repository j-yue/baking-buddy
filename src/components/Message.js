import React from "react";
import Typography from "@material-ui/core/Typography";

//Return a message if a condition is satisfied
const Message = ({ ...props }) => {
  const { status, message } = props;
  let result = null;
  if (status) {
    result = (
      <Typography variant="body1" component="div" style={{ margin: "auto" }}>
        {message}
      </Typography>
    );
  }
  return result;
};

export default Message;
