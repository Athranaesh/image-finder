import React from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import PixabayState from './context/pixabay/PixabayState';
import './App.css';

import Home from './components/pages/Home';
import Image from './components/pages/Image';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4a148c'
    },
    secondary: {
      main: '#fff'
    }
  }
});

const App = () => {
  return (
    <PixabayState>
      <Router>
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/image/:id' component={Image} />
          </Switch>
        </MuiThemeProvider>
      </Router>
    </PixabayState>
  );
};

export default App;
