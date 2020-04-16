import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SVG from "react-inlinesvg";
import SUBSTITUTES from "../data";
import SubstituteCard from "./SubstituteCard";
import Yield from "./Yield";

const Substitute = ({ ...props }) => {
  const { name } = props;
  const { yield: amount, substitutes } = SUBSTITUTES[name];
  const [size, unit] = amount;
  let count = 0;
  return (
    <Container>
      <h1>{name}</h1>
      <SVG src={require(`../icons/${name}.svg`)} width={100} />
      <Yield amount={amount} />
      <Grid container direction="column" justify="center" alignItems="center">
        {substitutes.map((substitute) => (
          <Grid item style={{ width: "100%", margin: ".5rem 0" }} key={count++}>
            <SubstituteCard data={substitute} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Substitute;
