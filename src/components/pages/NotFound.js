import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
const NotFound = () => {
  return (
    <Fragment>
      <Container style={{ marginTop: 30 }}>
        <h1>Oops!</h1>
        <Typography style={{ marginTop: 20 }}>
          {' '}
          The page you are looking for does not exist...
        </Typography>
      </Container>
    </Fragment>
  );
};

export default NotFound;
