import React, { Fragment, useState, useContext } from 'react';
import PixabayContext from '../../context/pixabay/pixabayContext';
import {
  IconButton,
  GridListTile,
  GridListTileBar,
  GridList,
  Dialog,
  Grow
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ImageResults = () => {
  const pixabayContext = useContext(PixabayContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = image => {
    setOpen(true);
    pixabayContext.setCurrentImage(image);
  };
  const handleClickClose = () => setOpen(false);

  return (
    <div style={{ margin: 30, padding: 20 }}>
      <GridList cols={3}>
        {pixabayContext.images.map(image => (
          <Grow in={true} timeout={800}>
            <GridListTile>
              <img src={image.largeImageURL}></img>
              <GridListTileBar
                title={image.tags}
                key={image.id}
                subtitle={
                  <span>
                    by <strong>{image.user}</strong>
                  </span>
                }
                actionIcon={
                  <IconButton
                    Button
                    color='secondary'
                    onClick={() => handleClickOpen(image.largeImageURL)}
                  >
                    Open
                  </IconButton>
                }
              ></GridListTileBar>
            </GridListTile>
          </Grow>
        ))}
      </GridList>
      <Dialog open={open} onClose={handleClickClose} fullWidth={true}>
        <img
          style={{ width: '100%' }}
          src={pixabayContext.currentImage}
          alt=''
        />
        <Button>Details</Button>
      </Dialog>
    </div>
  );
};

export default ImageResults;
