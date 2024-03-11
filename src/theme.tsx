import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const primary = "#004643";
const { palette } = createTheme();

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: "#709775",
    },
    mysage: "#abd1c6",
    mypink: "#e8b4b8",
    mywhite: "#fffffe",
    error: {
      main: red.A400,
    },
    background: {
      default: primary,
    },
  },
  typography: {
    fontFamily: "Sometype Mono, monospace",
    fontSize: 23,
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
        },
      },
    },
  },
});

export default theme;

declare module "@mui/material/styles" {
  interface Palette {
    mysage: string;
    mypink: string;
    mywhite: string;
  }
  interface PaletteOptions {
    mysage: string;
    mypink: string;
    mywhite: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    mysage: true;
    mypink: true;
    mywhite: true;
  }
}
