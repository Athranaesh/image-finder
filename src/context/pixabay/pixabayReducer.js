import {
  SEARCH_PHOTOS,
  SET_QUERY,
  SET_AMOUNT,
  CLEAR_IMAGES,
  SET_CURRENTIMAGE
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_PHOTOS:
      return {
        ...state,
        images: action.payload
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload
      };
    case SET_AMOUNT:
      return {
        ...state,
        amount: action.payload
      };
    case CLEAR_IMAGES:
      return {
        ...state,
        images: []
      };
    case SET_CURRENTIMAGE:
      return {
        ...state,
        currentImage: action.payload
      };

    default:
      return state;
  }
};
