import React, { useState } from "react";

import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import SUBSTITUTES from "../data";
import SearchCardButton from "./SearchCardButton";

const INGREDIENTS = Object.keys(SUBSTITUTES).map((ingredient) => ({
  key: ingredient,
  name: SUBSTITUTES[ingredient]["name"],
}));

const handleChange = (search, setSearchResults) => {
  const results = Object.values(INGREDIENTS).filter((ingredient) =>
    ingredient.name.includes(search.toLowerCase())
  );
  setSearchResults(results);
};

const Search = () => {
  const [searchResults, setSearchResults] = useState(INGREDIENTS);

  return (
    <Container>
      <Grid container direction="row" justify="center" alignItems="center">
        <SearchIcon />
        <InputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => handleChange(e.target.value, setSearchResults)}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {searchResults.map((result) => {
          const { key, name } = result;

          return (
            <Grid
              item
              style={{
                width: "40%",
                margin: ".5rem",
              }}
              key={key}
            >
              <SearchCardButton
                name={name}
                src={key}
                path={`/substitute/${key}`}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Search;
