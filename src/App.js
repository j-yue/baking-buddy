import React, { useState, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./components/Navbar";
import FavoritesContext from "./context/FavoritesContext";
import AllRoutes from "./components/AllRoutes";

import { createTheme } from "./theme.js";
import {
  saveToStorage,
  loadFromStorage,
  updateHooks,
} from "./components/utils/storage.js";

import { headerFromPath } from "./components/utils/path.js";

import "./App.css";

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const [favorites, setFavorites] = useState({});
  const [vegan, setVegan] = useState(false);
  const [palette, setPalette] = useState("coffee");
  const [theme, setTheme] = useState(createTheme(palette));
  const [screen, setScreen] = useState(headerFromPath(location));

  useEffect(() => {
    const data = loadFromStorage("data");
    if (data) updateHooks(data, setFavorites, setVegan, setPalette);
  }, []);

  useEffect(() => {
    setTheme(createTheme(palette));
  }, [palette]);

  useEffect(() => {
    setScreen(headerFromPath(location));
  }, [location]);

  useEffect(() => {
    saveToStorage({ favorites, vegan, palette });
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
