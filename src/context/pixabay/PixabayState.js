import React, { useReducer } from 'react';
import axios from 'axios';
import PixabayContext from './pixabayContext';
import PixabayReducer from './pixabayReducer';
import {
  SEARCH_PHOTOS,
  SET_QUERY,
  SET_AMOUNT,
  CLEAR_IMAGES,
  SET_CURRENTIMAGE,
  LOAD_MORE,
  GET_IMAGE
} from '../types';

let ClientId;
let page = 1;

if (process.env.NODE_ENV !== 'production') {
  ClientId = process.env.REACT_APP_PIXABAY_CLIENT_ID;
} else {
  ClientId = process.env.PIXABAY_CLIENT_ID;
}

const PixabayState = props => {
  const initialState = {
    query: '',
    amount: 15,
    images: [],
    totalHits: null,
    currentImage: {},
    moreImages: []
  };

  const [state, dispatch] = useReducer(PixabayReducer, initialState);

  //Clear images

  const clearImages = () => {
    page = 1;
    dispatch({
      type: CLEAR_IMAGES
    });
  };
  //Search images
  const searchImages = async (page = 1) => {
    const res = await axios.get(
      `https://pixabay.com/api/?key=${ClientId}&q=${state.query}&image_type=photo&page=${page}per_page=${state.amount}`
    );

    dispatch({
      type: SEARCH_PHOTOS,
      payload: res.data
    });
    console.log(state.images);
  };

  const loadMore = async () => {
    page++;
    const res = await axios.get(
      `https://pixabay.com/api/?key=${ClientId}&q=${state.query}&image_type=photo&page=${page}&per_page=${state.amount}`
    );

    dispatch({
      type: LOAD_MORE,
      payload: state.images.concat(res.data.hits)
    });
    console.log(state.moreImages);
  };

  //Set query

  const setQuery = text => {
    page = 1;
    dispatch({
      type: SET_QUERY,
      payload: text
    });
  };

  //Get Image

  const getImage = async id => {
    const res = await axios.get(
      `https://pixabay.com/api/?key=${ClientId}&id=${id}`
    );
    dispatch({
      type: GET_IMAGE,
      payload: res.data.hits[0]
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
    page = 1;
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
        setCurrentImage,
        loadMore,
        totalHits: state.totalHits,
        getImage
      }}
    >
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
