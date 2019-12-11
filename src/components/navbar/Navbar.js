import React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

//Custom styling for the App Bar.

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appbar: {
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Marmelad',
    alignSelf: 'center',
    padding: theme.spacing(4)
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appbar}>
        <Typography className={classes.title} variant='h5' align='center'>
          PixaBay Image Finder
        </Typography>
      </AppBar>
    </div>
  );
};

export default Navbar;
