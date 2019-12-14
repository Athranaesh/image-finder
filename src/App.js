import React, { Fragment } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import PixabayState from './context/pixabay/PixabayState';
import './App.css';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import Image from './components/pages/Image';
import About from './components/pages/About';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121'
    },
    secondary: {
      main: '#fff'
    }
  }
});

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <PixabayState>
        <Router>
          <MuiThemeProvider theme={theme}>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/image/:id' component={Image} />
              <Route exact path='/about' component={About} />
              <Route component={NotFound} />
            </Switch>
          </MuiThemeProvider>
        </Router>
      </PixabayState>
    </Fragment>
  );
};

export default App;
