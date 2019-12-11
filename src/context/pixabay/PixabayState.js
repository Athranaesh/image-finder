import React, { useReducer } from 'react';
import axios from 'axios';
import PixabayContext from './pixabayContext';
import PixabayReducer from './pixabayReducer';
import {
  SEARCH_PHOTOS,
  SET_QUERY,
  SET_AMOUNT,
  CLEAR_IMAGES,
  SET_CURRENTIMAGE
} from '../types';

let ClientId;

if (process.env.NODE_ENV !== 'production') {
  ClientId = process.env.REACT_APP_PIXABAY_CLIENT_ID;
} else {
  ClientId = process.env.PIXABAY_CLIENT_ID;
}

const PixabayState = props => {
  const initialState = {
    query: '',
    amount: 10,
    images: [],
    currentImage: null
  };

  const [state, dispatch] = useReducer(PixabayReducer, initialState);

  //Clear images

  const clearImages = () => {
    dispatch({
      type: CLEAR_IMAGES
    });
  };
  //Search images
  const searchImages = async (amount, text) => {
    const res = await axios.get(
      `https://pixabay.com/api/?key=${ClientId}&q=${text}&image_type=photo&per_page=${amount}`
    );

    dispatch({
      type: SEARCH_PHOTOS,
      payload: res.data.hits
    });
    console.log(state.images);
  };

  //Set query

  const setQuery = text => {
    dispatch({
      type: SET_QUERY,
      payload: text
    });
  };

  //Set current image

  const setCurrentImage = image => {
    dispatch({
      type: SET_CURRENTIMAGE,
      payload: image
    });
  };

  const setAmount = amount => {
    dispatch({
      type: SET_AMOUNT,
      payload: amount
    });
  };

  return (
    <PixabayContext.Provider
      value={{
        images: state.images,
        currentImage: state.currentImage,
        query: state.query,
        amount: state.amount,
        searchImages,
        setQuery,
        setAmount,
        clearImages,
        setCurrentImage
      }}
    >
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
