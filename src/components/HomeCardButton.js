import React from "react";

import CardButton from "./CardButton";

const HomeCardButton = ({ ...props }) => {
  const { component: Icon } = props;
  return (
    <CardButton
      {...props}
      component={() => <Icon fontSize="large" color="inherit" />}
    />
  );
};

export default HomeCardButton;
