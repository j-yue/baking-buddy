import React from "react";
import { Link } from "react-router-dom";

import CardButton from "./CardButton";

const CardButtonLink = ({ ...props }) => {
  const { path } = props;

  return (
    <Link
      to={path}
      style={{
        textDecoration: "none",
        "&:hover": { cursor: "pointer" },
      }}
    >
      <CardButton {...props} />
    </Link>
  );
};

export default CardButtonLink;
