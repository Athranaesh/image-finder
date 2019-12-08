import React, { Fragment, useContext } from 'react';
import PixabayContext from '../../context/pixabay/pixabayContext';

const Image = ({ image }) => {
  console.log(image);
  return (
    <div>
      <img
        style={{ height: 350, width: 350 }}
        src={image.largeImageURL}
        alt=''
      />
    </div>
  );
};

export default Image;
