import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FB2E86",
    },
    background: {
      default: "#00FF00",
    },
  },
  typography: {
    fontFamily: '"Josefin Sans", sans-serif', // Define your custom font family here
  },
});

export default theme;
