import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#92d198',
      main: '#77c67e',
      dark: '#5f9e65',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f50057',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  zIndex:{
      appBar: 0
  }
});

export default theme;