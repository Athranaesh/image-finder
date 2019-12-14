import React, { useContext, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PixabayContext from '../../context/pixabay/pixabayContext';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';

import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import ButtonGroup from '@material-ui/core/ButtonGroup';

const Link1 = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

const Image = ({ match }) => {
  const pixabayContext = useContext(PixabayContext);
  const { getImage, currentImage } = pixabayContext;
  useEffect(() => {
    getImage(match.params.id);
  }, []);
  return (
    <div>
      <Grow in={true} timeout={1000}>
        <Container maxWidth='md' style={{ marginTop: 20 }}>
          <Grid container direction='row'>
            <Grid container item>
              <Grid item xs={12} sm={3}>
                <Button
                  variant='contained'
                  component={Link1}
                  fullWidth
                  to='/'
                  style={{ marginBottom: 40 }}
                >
                  Main Page
                </Button>
              </Grid>
            </Grid>
            <Grid container item justify='space-between' spacing={6}>
              <Grid item sm={6} xs={12}>
                <img
                  src={currentImage.largeImageURL}
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
                <CardContent>
                  <Typography style={{ marginTop: 15 }}>
                    Image Tags: {currentImage.tags}
                  </Typography>
                  <Typography style={{ marginTop: 15 }}>
                    Image Height: {currentImage.imageHeight}
                  </Typography>
                  <Typography style={{ marginTop: 15, marginBottom: 15 }}>
                    Image Width: {currentImage.imageWidth}
                  </Typography>

                  <ButtonGroup style={{ marginTop: 15 }} fullWidth>
                    <Button
                      variant='contained'
                      href={currentImage.largeImageURL}
                      color='primary'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      See Full Screen
                    </Button>
                    <Button
                      color='secondary'
                      variant='contained'
                      href={currentImage.pageURL}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      Pixabay Page
                    </Button>
                  </ButtonGroup>
                </CardContent>
              </Grid>
              <Grid item sm={6} xs={12} justify='center'>
                <div
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'center'
                  }}
                >
                  <Typography
                    variant='h5'
                    style={{
                      textAlign: 'center',
                      marginBottom: 20
                    }}
                  >
                    Photo by:
                  </Typography>

                  <img
                    src={currentImage.userImageURL}
                    style={{
                      maxWidth: 100,
                      maxHeight: 100,
                      borderRadius: '50%'
                    }}
                  />

                  <Typography variant='h6'>
                    {' '}
                    <strong>${currentImage.user}</strong>
                  </Typography>
                  <Button
                    style={{
                      marginTop: 20,
                      backgroundColor: '#333333',
                      color: 'white',
                      width: 220
                    }}
                    variant='contained'
                    href={`https://pixabay.com/users/${currentImage.user}-${currentImage.user_id}`}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    User Profile
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default Image;
