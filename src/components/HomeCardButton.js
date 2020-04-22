import React from "react";

import CardButtonLink from "./CardButtonLink";

const HomeCardButton = ({ ...props }) => {
  const { component: Icon } = props;
  return (
    <CardButtonLink
      {...props}
      component={() => <Icon fontSize="large" color="inherit" />}
    />
  );
};

export default HomeCardButton;
