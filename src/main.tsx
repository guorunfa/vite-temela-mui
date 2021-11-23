import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import ReactDOM from "react-dom";
import Home from "./views/Home";

let theme = createTheme({
  palette: {
    primary: {
      main: "#00bcd4",
    },
    secondary: {
      main: "#ff4081",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Home />
  </ThemeProvider>,
  document.getElementById("root")
);
