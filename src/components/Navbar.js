import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";

const homeIconVisibility = (screen) =>
  screen === "HOME" ? "hidden" : "visible";

const Navbar = ({ ...props }) => {
  const { screen, history, theme } = props;

  return (
    <AppBar
      position="static"
      style={{
        textAlign: "center",
        height: "15vh",
        padding: "1vh 5%",
        ...theme.variants.center,
        justifyContent: "space-between",
      }}
    >
      <IconButton
        style={{
          color: "inherit",
        }}
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon style={{ fontSize: "8vh" }} />
      </IconButton>
      <Typography variant="h1" component="h1">
        {screen}
      </Typography>
      <IconButton
        style={{
          color: "inherit",
          visibility: homeIconVisibility(screen),
        }}
      >
        <Link
          to="/"
          style={{ color: "inherit", fontSize: "8vh" }}
          className="linkhome"
        >
          <HomeIcon style={{ fontSize: "8vh" }} />
        </Link>
      </IconButton>
    </AppBar>
  );
};

export default Navbar;
