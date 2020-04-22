import React from "react";
import SVG from "react-inlinesvg";
import CardButtonLink from "./CardButtonLink";

const SearchCardButton = ({ ...props }) => {
  const { src } = props;
  return (
    <CardButtonLink
      {...props}
      component={() => <SVG src={require(`../icons/${src}.svg`)} width={50} />}
    />
  );
};

export default SearchCardButton;
