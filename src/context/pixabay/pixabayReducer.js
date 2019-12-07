import { SEARCH_PHOTOS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_PHOTOS:
      return {
        ...state,
        images: action.payload
      };

    default:
      return state;
  }
};
