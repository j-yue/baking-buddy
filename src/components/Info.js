import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SOURCES from "../sources";

const renderSources = (linkStyling) => {
  let result = SOURCES.map(([source, link]) => {
    return (
      <li style={{ marginBottom: "1rem", textAlign: "center" }} key={link}>
        <a href={link} style={{ ...linkStyling }}>
          {source}
        </a>
      </li>
    );
  });
  return result;
};

const Info = () => {
  const theme = useTheme();
  const linkStyling = theme.variants.link;
  return (
    <Container style={{ textAlign: "justify" }}>
      <Typography variant="body1" component="div">
        Baking Buddy is a recipe app for creating substitutes of common baking
        ingredients. It works offline, can filter non-vegan recipes, and comes
        with many themes.
      </Typography>

      <Typography variant="h3" component="h3">
        Recipes
      </Typography>

      <Typography variant="body1" component="div">
        The substitutes have been compiled from the following sources:
      </Typography>

      <Typography variant="body1" component="ul" style={{ listStyle: "none" }}>
        {renderSources(linkStyling)}
      </Typography>

      <Typography variant="h3" component="h3">
        Attribution
      </Typography>

      <Typography variant="body1" component="div">
        Ingredient icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/freepik"
          style={{ ...linkStyling }}
        >
          Freepik
        </a>
        {` from `}
        <a href="https://www.flaticon.com/" style={{ ...linkStyling }}>
          Flaticon
        </a>
      </Typography>
    </Container>
  );
};

export default Info;
