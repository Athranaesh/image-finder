import React from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import PixabayState from './context/pixabay/PixabayState';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4a148c'
    },
    secondary: {
      main: '#f44336'
    }
  }
});

const App = () => {
  return (
    <PixabayState>
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Search />
      </MuiThemeProvider>
    </PixabayState>
  );
};

export default App;
