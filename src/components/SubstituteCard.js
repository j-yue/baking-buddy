import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Ingredient from "./Ingredient";
import LikeButton from "./LikeButton";
const getIngredients = (data) => {
  let result = data;
  delete result.vegan;
  delete result.id;
  return result;
};

const SubstituteCard = ({ ...props }) => {
  const { data } = props;
  const isVegan = data.vegan;
  const ingredients = getIngredients(data);
  let count = 0;
  return (
    <Card
      style={
        {
          // position: "relative",
        }
      }
    >
      <CardContent>
        {isVegan && (
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
      </CardContent>
      <CardActions>
        <LikeButton status={true} />
      </CardActions>
    </Card>
  );
};

export default SubstituteCard;
