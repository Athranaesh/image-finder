import React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from 'react-router-dom/Link';

const Navbar = () => {
  return (
    <div>
      <AppBar position='static' style={{ paddingTop: 30, paddingBottom: 30 }}>
        <Container>
          <Grid
            container
            alignItems='center'
            justify='space-between'
            spacing={2}
          >
            <Grid item>
              <Typography variant='h6'>
                <Link
                  className='title'
                  to='/'
                  style={{
                    textDecoration: 'none',
                    color: 'white'
                  }}
                >
                  <i
                    className={'fas fa-camera'}
                    style={{ marginRight: 10 }}
                  ></i>
                  PixaFinder
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Link
                to='/'
                style={{
                  fontSize: 22,
                  textDecoration: 'none',
                  color: 'white',
                  marginRight: 14
                }}
              >
                Home
              </Link>

              <Link
                to='/About'
                style={{
                  fontSize: 22,
                  textDecoration: 'none',
                  color: 'white',
                  marginLeft: 14
                }}
              >
                About
              </Link>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
