import { createTheme, Theme } from "@mui/material/styles";
import { blue, common, grey, indigo } from "@mui/material/colors";

export type ThemeKey = "dark" | "light" | "blue";

export const themes: Record<ThemeKey, Theme> = {
  dark: createTheme({
    palette: {
      mode: "dark",
      text: {
        primary: common.white,
      },
      background: {
        default: common.black,
        paper: grey[900],
      },
      action: {
        selected: grey[700],
        hover: indigo[900],
      },
      divider: indigo[300],
    },
  }),
  light: createTheme({
    palette: {
      mode: "light",
      primary: {
        main: common.white,
      },
      background: {
        default: grey[100],
        paper: grey[50],
      },
      divider: indigo[700],
    },
  }),
  blue: createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#2196f3",
      },
      background: {
        default: blue[200],
        paper: blue[100],
      },
      divider: indigo[900],
    },
  }),
};
