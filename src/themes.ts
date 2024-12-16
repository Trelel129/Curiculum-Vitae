import { createTheme, Theme } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";

export type ThemeKey = "dark" | "light" | "blue";

export const themes: Record<ThemeKey, Theme> = {
  dark: createTheme({
    palette: {
      mode: "dark",
      background: {
        default: grey[900],
        paper: grey[900],
      },
      divider: grey[400],
    },
  }),
  light: createTheme({
    palette: {
      mode: "light",
      background: {
        default: grey[100],
      },
    },
  }),
  blue: createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#2196f3",
      },
      background: {
        default: blue[50],
        paper: blue[100],
      },
    },
  }),
};
