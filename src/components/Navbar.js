import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";

const Navbar = ({ ...props }) => {
  const { screen } = props;
  return (
    <AppBar position="static" style={{ textAlign: "center", height: "15vh" }}>
      <Toolbar
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* <IconButton style={{ color: "white", transform: "scale(1.25)" }}> */}
        <IconButton>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <Typography variant="h1" component="h1" style={{}}>
          {screen}
        </Typography>
        <IconButton>
          <HomeIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
