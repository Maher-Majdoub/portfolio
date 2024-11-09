import { createTheme } from "@mui/material";

const globalStyles: any = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "var(--mui-palette-primary-main)",
          backgroundColor: "transparent",
          ":hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--mui-palette-primary-main)",
          },
        },
        notchedOutline: {
          borderColor: "var(--mui-palette-primary-main)",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "var(--mui-palette-primary-main)",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
  },
  typography: {
    fontFamily: '"Roboto Condensed", sans-serif',
    h1: {
      fontSize: "5rem",
      "@media (max-width:500px)": {
        fontSize: "4rem",
      },
    },
    h2: {
      fontSize: "4rem",
      "@media (max-width:500px)": {
        fontSize: "3rem",
      },
    },
    h3: {
      fontSize: "3rem",
      "@media (max-width:500px)": {
        fontSize: "2.2rem",
      },
    },
    h4: {
      fontSize: "1.8rem",
      "@media (max-width:500px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontSize: "1.3rem",
      "@media (max-width:500px)": {
        fontSize: "1.3rem",
      },
    },
    h6: {
      fontSize: "1rem",
      "@media (max-width:500px)": {
        fontSize: "1rem",
      },
    },
  },
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#0088c4",
    },
    background: {
      default: "#FFF",
      paper: "#FFF",
    },
  },
  ...globalStyles,
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#FFCB6C",
    },
    background: {
      default: "#242528",
      paper: "#31333B",
    },
  },
  ...globalStyles,
});

export { lightTheme, darkTheme };
