import React, { useState } from "react";

import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
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
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box pb="2.5rem">
        <InputBase
          placeholder="Search ingredient"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon fontSize="large" color="primary" />
            </InputAdornment>
          }
          style={{
            width: "100%",
            padding: "1rem",
            background: "#fff",
            border: "2px solid black",
            borderRadius: "5px",
            borderColor: theme.palette.secondary.dark,
          }}
          onChange={(e) => handleChange(e.target.value, setSearchResults)}
        />
      </Box>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        {searchResults.map((result) => {
          const { key, name } = result;

          return (
            <Grid
              item
              style={{
                width: "45%",
                marginBottom: "1.5rem",
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
    </React.Fragment>
  );
};

export default Search;
