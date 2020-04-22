import React, { useContext } from "react";
import { useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Ingredient from "./Ingredient";
import LikeButton from "./LikeButton";
import FavoritesContext from "../context/FavoritesContext";

const getIngredients = (data) => {
  let result = { ...data }; //copy data because delete mutates
  delete result.vegan;
  delete result.id;
  return result;
};

const isFavorite = (favorites, id) => {
  if (favorites) return favorites.includes(id);
  return false;
};

const SubstituteCard = ({ ...props }) => {
  const { data, ingredient } = props;
  const { id, vegan } = data;
  const ingredients = getIngredients(data);
  let count = 0;
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const theme = useTheme();

  return (
    <Card
      style={{
        background: theme.palette.primary.light,
      }}
    >
      <CardContent>
        {vegan && (
          <Typography
            variant="subtitle1"
            component="span"
            style={{ float: "right" }}
          >
            vegan
          </Typography>
        )}
        {Object.values(ingredients).map((ingredient) => (
          <Ingredient data={ingredient} key={count++} />
        ))}
        <LikeButton
          status={isFavorite(favorites[ingredient], id)}
          setFavorites={setFavorites}
          favorites={favorites}
          id={id}
          ingredient={ingredient}
        />
      </CardContent>
    </Card>
  );
};

export default SubstituteCard;
