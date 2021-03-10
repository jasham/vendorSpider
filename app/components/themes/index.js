import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import green from '@material-ui/core/colors/green';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[700],
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
