import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// Material UI imports
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Pages
import home from './pages/home';
import signIn from './pages/signIn';
import signUp from './pages/signUp';

// Custom components
import Navbar from './components/Navbar';

// Define the app theme:
const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '1.9rem',
      fontWeight: 400,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
  },
  palette: {
    background: {
      default: "#ffffff"
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#6200EE',
      // dark: will be calculated from palette.primary.main,
      contrastText: '#fff'
    },
    secondary: {
      // light: '#0066ff',
      main: '#03DAC6',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#fff',
    },
  },
});

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/signin" component={signIn} />
          <Route exact path="/signup" component={signUp} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
