import React from 'react';
// Material UI imports
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// Custom components
import Navbar from './components/Navbar';

// Define the app theme:
const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '1.9rem',
      fontWeight: 400,
    },
  },
  palette: {
    background: {
      default: "#ffffff"
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#1c90f3',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#ff3860',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
});

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Typography variant="h1">Homepage</Typography>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
