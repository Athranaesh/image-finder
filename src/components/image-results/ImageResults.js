import React, { useContext } from 'react';
import PixabayContext from '../../context/pixabay/pixabayContext';
import Image from './Image';
import { Container, IconButton, Grid } from '@material-ui/core';

const ImageResults = () => {
  const pixabayContext = useContext(PixabayContext);

  return (
    <div style={{ margin: 30, padding: 20 }}>
      <Grid container spacing={1}>
        <Grid container item xs={6} spacing={5}>
          {pixabayContext.images.map(image => (
            <Image key={image.id} image={image}></Image>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

const imageStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default ImageResults;
