import React from "react";
import SVG from "react-inlinesvg";
import CardButton from "./CardButton";

const SearchCardButton = ({ ...props }) => {
  const { src } = props;
  return (
    <CardButton
      {...props}
      component={() => <SVG src={require(`../icons/${src}.svg`)} width={50} />}
    />
  );
};

export default SearchCardButton;
