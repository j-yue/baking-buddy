import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SearchCardButton from "./SearchCardButton";
import SUBSTITUTES from "../data";

const FavesButtons = ({ favorites }) => {
  const result = Object.keys(favorites).map((key) => (
    <Grid item key={key} style={{ width: "45%", marginBottom: "1rem" }}>
      <SearchCardButton
        path={`/substitute/${key}/showFaves`}
        name={SUBSTITUTES[key]["name"]}
        src={key}
      />
    </Grid>
  ));

  return result;
};

const EmptyMessage = () => {
  return (
    <Typography variant="body1" component="div" style={{ margin: "auto" }}>
      No saved substitutes
    </Typography>
  );
};

const isEmpty = (favorites) => Object.keys(favorites).length === 0;

const Faves = ({ ...props }) => {
  const { favorites } = props;
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {isEmpty(favorites) && <EmptyMessage />}
        {!isEmpty(favorites) && <FavesButtons favorites={favorites} />}
      </Grid>
    </React.Fragment>
  );
};

export default Faves;
