import React from "react";
import Typography from "@material-ui/core/Typography";
import SOURCES from "../sources";

const renderSources = () => {
  let result = SOURCES.map(([source, link]) => {
    return (
      <li style={{ marginBottom: "1rem" }}>
        <a href={link} style={{ color: "inherit" }}>
          {source}
        </a>
      </li>
    );
  });
  return <ul style={{ listStyle: "none", padding: 0 }}>{result}</ul>;
};

const Info = () => {
  return (
    <React.Fragment>
      <Typography variant="body2" component="div">
        Baking Buddy is a recipe app for creating substitutes of common baking
        ingredients. It works offline, can filter non-vegan recipes, and comes
        with many themes.
      </Typography>

      <Typography variant="h2" component="h2">
        Credits
      </Typography>

      <Typography variant="h3" component="h3">
        Recipes
      </Typography>

      <Typography variant="body2" component="div">
        The substitutes have been compiled from the following sources:
      </Typography>

      {renderSources()}

      <Typography variant="h3" component="h3">
        Attribution
      </Typography>

      <Typography variant="body2" component="div">
        Ingredient icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from
        <a href="https://www.flaticon.com/"> Flaticon</a>
      </Typography>
    </React.Fragment>
  );
};

export default Info;
