import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";

const homeIconVisibility = (screen) =>
  screen === "HOME" ? "hidden" : "visible";

const Navbar = ({ ...props }) => {
  const { screen, history, theme } = props;

  return (
    <AppBar position="static" style={{ textAlign: "center", height: "15vh" }}>
      <Toolbar
        style={{
          ...theme.variants.center,
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <IconButton
          style={{ color: "inherit" }}
          onClick={() => history.goBack()}
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <Typography variant="h1" component="h1" style={{}}>
          {screen}
        </Typography>
        <IconButton
          style={{ color: "inherit", visibility: homeIconVisibility(screen) }}
        >
          <Link to="/" style={{ color: "inherit" }}>
            <HomeIcon fontSize="large" />
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
