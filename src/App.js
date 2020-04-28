import React, { useState, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./components/Navbar";
import FavoritesContext from "./context/FavoritesContext";
import AllRoutes from "./components/AllRoutes";

import { createTheme } from "./theme.js";
import "./App.css";

const headerFromPath = (path) => {
  const pathName = path.pathname;
  if (pathName === "/") return "HOME";

  const splitPath = pathName.split("/");

  if (splitPath[1] === "substitute") return splitPath[2].split("_").join(" ");
  return splitPath[1].toUpperCase();
};

const saveToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const loadFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const [favorites, setFavorites] = useState(null);
  const [vegan, setVegan] = useState(null);
  const [palette, setPalette] = useState("blackForest");
  const [theme, setTheme] = useState(createTheme(palette));
  const [screen, setScreen] = useState(headerFromPath(location));

  useEffect(() => {
    const { favorites, vegan, palette } = loadFromStorage("data");
    setFavorites(favorites);
    setVegan(vegan);
    setPalette(palette);
  }, []);

  useEffect(() => {
    setTheme(createTheme(palette));
  }, [palette]);

  useEffect(() => {
    setScreen(headerFromPath(location));
  }, [location]);

  useEffect(() => {
    saveToStorage("data", { favorites, vegan, palette });
  }, [favorites, vegan, palette]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar screen={screen} history={history} theme={theme} />
      <FavoritesContext.Provider value={{ favorites, setFavorites }}>
        <Grid
          container
          className="App"
          style={{
            ...theme.variants.center,
            alignItems: "stretch",
            minHeight: "85vh",
            background: theme.palette.secondary.light,
            color: theme.palette.secondary.contrastText,
          }}
        >
          <Grid
            item
            style={{
              width: "90%",
              padding: "5vh 0",
            }}
          >
            <AllRoutes
              favorites={favorites}
              vegan={vegan}
              setVegan={setVegan}
              palette={palette}
              setPalette={setPalette}
            />
          </Grid>
        </Grid>
      </FavoritesContext.Provider>
    </ThemeProvider>
  );
};

export default App;
