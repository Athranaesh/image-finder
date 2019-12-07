import React, { useReducer } from 'react';
import axios from 'axios';
import PixabayContext from './pixabayContext';
import PixabayReducer from './pixabayReducer';
import { SEARCH_PHOTOS } from '../types';

let ClientId;

if (process.env.NODE_ENV !== 'production') {
  ClientId = process.env.REACT_APP_PIXABAY_CLIENT_ID;
} else {
  ClientId = process.env.PIXABAY_CLIENT_ID;
}

const PixabayState = props => {
  const initialState = {
    amount: 10,
    images: []
  };

  const [state, dispatch] = useReducer(PixabayReducer, initialState);

  //Search images
  const searchImages = async (amount, text) => {
    const res = await axios.get(
      `https://pixabay.com/api/?key=${ClientId}&q=${text}&image_type=photo&per_page=${amount}`
    );

    dispatch({
      type: SEARCH_PHOTOS,
      payload: res.data.hits
    });
  };

  return (
    <PixabayContext.Provider
      value={{
        images: state.images,
        searchImages
      }}
    >
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
