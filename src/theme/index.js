import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';
import myColor from './colorPallete';

const {
  darkBlue, brightBlue, mediumBlue, gray, white
} = myColor;

const theme = createMuiTheme({
  // palette: {
  //   background: {
  //     default: '#F4F6F8',
  //     paper: colors.common.white
  //   },
  //   primary: {
  //     contrastText: '#ffffff',
  //     main: '#5664d2'
  //   },
  //   text: {
  //     primary: '#172b4d',
  //     secondary: '#6b778c'
  //   }
  // },
  // theme settings

  palette: {
    // type: "light",

    background: {
      default: '#F4F6F8',
      paper: colors.common.white
    },

    primary: {
      main: darkBlue.main, // color for (AppBar, footer,...)
      light: darkBlue.light,
      dark: darkBlue.dark
      // contrastText: ""
    },
    secondary: {
      main: brightBlue.main, // color for Buttons in (AppBar, signup pg, login pg)
      light: brightBlue.light, // color for Buttons in (forms, ...)
      dark: brightBlue.dark
    },
    tertiary: {
      main: mediumBlue.main,
      light: mediumBlue.light, // color for (comment btn, ...)
      dark: mediumBlue.dark
    },
    customGray: {
      main: gray.main,
      shade100: gray.shade100,
      shade200: gray.shade200,
      shade300: gray.shade300,
      shade400: gray.shade400,
      shade700: gray.shade700,
      shade900: gray.shade900
    },
    customWhite: {
      main: white.main,
      shade50: white.shade50,
      shade100: white.shade100
    }
    // error: "",
    // warning: "",
    // info: "",
    // success: ""
  },

  // typography: {
  //   h1: {},
  //   h2: {},
  //   h3: {},
  //   h4: {},
  //   h5: {},
  //   h6: {},
  //   body1: {},
  //   body2: {},
  //   subtitle1: {},
  //   subtitle2: {},
  // },
  shadows,
  typography
});

export default theme;
