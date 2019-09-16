import { createMuiTheme } from '@material-ui/core';

import { 
  blue,
  yellow,
  amber,
  grey,
} from "@material-ui/core/colors";

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  constraints: {
    maxWidth: 640,
  },
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      contrastText: '#fff',
    },
    secondary: {
      light: yellow[300],
      main: yellow[500],
      dark: yellow[700],
      contrastText: '#fff',
    },
    accent: {
      light: amber[300],
      main: amber[500],
      dark: amber[700],
      contrastText: '#fff',
    },
    background: {
      main: '#282c34',
    },
    border: {
      light: grey[300],
      main: grey[400],
      dark: grey[500],
      contrastText: '#fff',
    },
  },
});