import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// Material UI imports
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from './utils/muiTheme';

// Pages
import home from './pages/home';
import signIn from './pages/signIn';
import signUp from './pages/signUp';

// Custom components
import Navbar from './components/Navbar';

// Define the overall app theme using custom muiTheme file
const theme = createMuiTheme(muiTheme);

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/home" component={home} />
          <Route exact path="/signin" component={signIn} />
          <Route exact path="/signup" component={signUp} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
