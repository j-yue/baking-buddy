import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import SVG from "react-inlinesvg";
import SUBSTITUTES from "../data";
import SubstituteCard from "./SubstituteCard";
import Yield from "./Yield";

const Substitute = ({ ...props }) => {
  const { data, ingredient } = props;
  const { name, yield: amount, substitutes } = data;

  // const { ingredient, data } = props;
  // const { name, yield: amount, substitutes } = data;
  // const { name } = props;
  // console.log(name, "substitutes");
  // const { yield: amount, substitutes } = SUBSTITUTES[name];
  // const [size, unit] = amount;
  let count = 0;
  return (
    <React.Fragment>
      <Box p="1rem">
        <SVG src={require(`../icons/${ingredient}.svg`)} width={100} />
      </Box>
      <Yield amount={amount} />
      <Grid container direction="column" justify="center" alignItems="center">
        {substitutes.map((substitute) => (
          <Grid item style={{ width: "100%", margin: ".5rem 0" }} key={count++}>
            <SubstituteCard data={substitute} ingredient={ingredient} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Substitute;
