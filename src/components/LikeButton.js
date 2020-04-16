import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const handleClick = (icon, setIcon) => {
  const displayName = icon.type.displayName;
  if (displayName === "FavoriteIcon") {
    setIcon(<FavoriteBorderIcon />);
  } else setIcon(<FavoriteIcon />);
};

const LikeButton = ({ status }) => {
  const [icon, setIcon] = useState(<FavoriteBorderIcon />);

  useEffect(() => {
    if (status) setIcon(<FavoriteIcon />);
  }, []);

  return (
    <IconButton onClick={() => handleClick(icon, setIcon)}>{icon}</IconButton>
  );
};

export default LikeButton;
