import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#DFD3C3",
      main: "#C2A68C",
      dark: "#7D6E83",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#F8EDE3",
      main: "#DFD3C3",
      dark: "#C2A68C",
      contrastText: "#3a2f3f",
    },
    background: {
      default: "#F8EDE3",
      paper: "#DFD3C3",
    },
    text: {
      primary: "#3a2f3f",
      secondary: "#7D6E83",
    },
    neutral: {
      100: "#F8EDE3",
      200: "#DFD3C3",
      300: "#C2A68C",
      400: "#7D6E83",
    },
  },
});

export default theme;