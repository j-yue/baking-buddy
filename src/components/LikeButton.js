import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const addFavorite = (id, ingredient, favorites, setFavorites) => {
  const keys = Object.keys(favorites);
  //either copy then add id or create new array if no key
  const newList = keys.includes(ingredient)
    ? [...favorites[ingredient], id]
    : [id];
  setFavorites({ ...favorites, [ingredient]: newList });
};

const removeFavorite = (id, ingredient, favorites, setFavorites) => {
  const newList = favorites[ingredient].filter((element) => element != id);
  //if ingredient has no saved substitutes, remove it from the faves list
  setFavorites({ ...favorites, [ingredient]: newList });
  if (newList.length < 1) {
    const copy = { ...favorites };
    delete copy[ingredient];
    setFavorites(copy);
  }
};

const handleClick = (status, id, ingredient, favorites, setFavorites) => {
  if (status) {
    removeFavorite(id, ingredient, favorites, setFavorites);
  } else {
    addFavorite(id, ingredient, favorites, setFavorites);
  }
};

const LikeButton = ({ ...props }) => {
  const { status, setFavorites, favorites, id, ingredient } = props;
  const icon = status ? <FavoriteIcon /> : <FavoriteBorderIcon />;

  return (
    <IconButton
      color="secondary"
      onClick={() =>
        handleClick(status, id, ingredient, favorites, setFavorites)
      }
    >
      {icon}
    </IconButton>
  );
};

export default LikeButton;
