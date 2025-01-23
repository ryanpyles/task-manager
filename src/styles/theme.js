import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FF7F00",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF7F00",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#121212",
      paper: "#1F1F1F",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
});
