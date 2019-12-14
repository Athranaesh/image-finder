import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';

const About = () => {
  return (
    <Fragment>
      <Container style={{ marginTop: 30 }}>
        <h1>About This App</h1>
        <p>
          <br />
          This app is powered by React, purpose of which is to provide an
          interactive interface for finding high quality stock photos from
          PixaBay as well as users who posted them in an easy and efficient way.
        </p>

        <br />
        <p>Version 1.0.0</p>
      </Container>
    </Fragment>
  );
};

export default About;
