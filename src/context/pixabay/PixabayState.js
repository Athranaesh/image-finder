import React, { useReducer } from 'react';
import axios from 'axios';
import PixabayContext from './pixabayContext';
import PixabayReducer from './pixabayReducer';
import { SEARCH_PHOTOS, SET_QUERY, SET_AMOUNT } from '../types';

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
    images: []
  };

  const [state, dispatch] = useReducer(PixabayReducer, initialState);

  //Clear images

  const clearImages = () => {
    state.images = [];
  };
  //Search images
  const searchImages = async (amount, text) => {
    // const res = await axios.get(
    //   `https://pixabay.com/api/?key=${ClientId}&q=${text}&image_type=photo&per_page=${amount}`
    // );
    const res = {
      totalHits: 500,
      hits: [
        {
          largeImageURL:
            'https://pixabay.com/get/55e0d340485aa814f6da8c7dda79367a103bdae554526c4870287edc9448c15bb1_1280.jpg',
          webformatHeight: 426,
          webformatWidth: 640,
          likes: 1045,
          imageWidth: 6000,
          id: 3063284,
          user_id: 1564471,
          views: 676342,
          comments: 236,
          pageURL:
            'https://pixabay.com/photos/rose-flower-petal-floral-noble-3063284/',
          imageHeight: 4000,
          webformatURL:
            'https://pixabay.com/get/55e0d340485aa814f6da8c7dda79367a103bdae554526c4870287edc9448c15bb1_640.jpg',
          type: 'photo',
          previewHeight: 99,
          tags: 'rose, flower, petal',
          downloads: 427841,
          user: 'annca',
          favorites: 908,
          imageSize: 3574625,
          previewWidth: 150,
          userImageURL:
            'https://cdn.pixabay.com/user/2015/11/27/06-58-54-609_250x250.jpg',
          previewURL:
            'https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_150.jpg'
        },
        {
          largeImageURL:
            'https://pixabay.com/get/55e1d4404953a414f6da8c7dda79367a103bdae554526c4870287edc9448c15bb1_1280.jpg',
          webformatHeight: 426,
          webformatWidth: 640,
          likes: 801,
          imageWidth: 2736,
          id: 3113318,
          user_id: 7410713,
          views: 444085,
          comments: 123,
          pageURL:
            'https://pixabay.com/photos/sunflower-nature-flora-flower-3113318/',
          imageHeight: 1824,
          webformatURL:
            'https://pixabay.com/get/55e1d4404953a414f6da8c7dda79367a103bdae554526c4870287edc9448c15bb1_640.jpg',
          type: 'photo',
          previewHeight: 99,
          tags: 'sunflower, nature, flora',
          downloads: 323778,
          user: 'bichnguyenvo',
          favorites: 541,
          imageSize: 1026006,
          previewWidth: 150,
          userImageURL:
            'https://cdn.pixabay.com/user/2017/12/16/10-28-39-199_250x250.jpg',
          previewURL:
            'https://cdn.pixabay.com/photo/2018/01/28/11/24/sunflower-3113318_150.jpg'
        },
        {
          largeImageURL:
            'https://pixabay.com/get/55e2dc414351ae14f6da8c7dda79367a103bdae554526c4870287edc9448c15bb1_1280.jpg',
          webformatHeight: 400,
          webformatWidth: 640,
          likes: 782,
          imageWidth: 3200,
          id: 3292932,
          user_id: 2216431,
          views: 388406,
          comments: 72,
          pageURL:
            'https://pixabay.com/photos/sunflower-vase-vintage-retro-wall-3292932/',
          imageHeight: 2000,
          webformatURL:
            'https://pixabay.com/get/55e2dc414351ae14f6da8c7dda79367a103bdae554526c4870287edc9448c15bb1_640.jpg',
          type: 'photo',
          previewHeight: 93,
          tags: 'sunflower, vase, vintage',
          downloads: 293468,
          user: 'Yuri_B',
          favorites: 986,
          imageSize: 2563708,
          previewWidth: 150,
          userImageURL:
            'https://cdn.pixabay.com/user/2018/01/15/10-52-15-382_250x250.png',
          previewURL:
            'https://cdn.pixabay.com/photo/2018/04/05/14/09/sunflower-3292932_150.jpg'
        },
        {
          largeImageURL:
            'https://pixabay.com/get/54e2dc464e51a814f6da8c7dda79367a103bdae554526c4870287edc9448c15bb1_1280.jpg',
          webformatHeight: 426,
          webformatWidth: 640,
          likes: 838,
          imageWidth: 5363,
          id: 2295434,
          user_id: 334088,
          views: 144168,
          comments: 68,
          pageURL:
            'https://pixabay.com/photos/spring-bird-bird-tit-spring-blue-2295434/',
          imageHeight: 3575,
          webformatURL:
            'https://pixabay.com/get/54e2dc464e51a814f6da8c7dda79367a103bdae554526c4870287edc9448c15bb1_640.jpg',
          type: 'photo',
          previewHeight: 99,
          tags: 'spring bird, bird, tit',
          downloads: 63114,
          user: 'JillWellington',
          favorites: 931,
          imageSize: 2938651,
          previewWidth: 150,
          userImageURL:
            'https://cdn.pixabay.com/user/2018/06/27/01-23-02-27_250x250.jpg',
          previewURL:
            'https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_150.jpg'
        },
        {
          largeImageURL:
            'https://pixabay.com/get/57e5d4414253af14f6da8c7dda79367a103bdae554526c4870287edc9448c15bb1_1280.jpg',
          webformatHeight: 323,
          webformatWidth: 640,
          likes: 322,
          imageWidth: 3861,
          id: 1512813,
          user_id: 2364555,
          views: 87898,
          comments: 23,
          pageURL:
            'https://pixabay.com/photos/lily-flowers-early-flower-garden-1512813/',
          imageHeight: 1952,
          webformatURL:
            'https://pixabay.com/get/57e5d4414253af14f6da8c7dda79367a103bdae554526c4870287edc9448c15bb1_640.jpg',
          type: 'photo',
          previewHeight: 75,
          tags: 'lily, flowers, early',
          downloads: 42862,
          user: 'pixel2013',
          favorites: 334,
          imageSize: 1037708,
          previewWidth: 150,
          userImageURL:
            'https://cdn.pixabay.com/user/2019/07/15/18-51-07-612_250x250.jpg',
          previewURL:
            'https://cdn.pixabay.com/photo/2016/07/12/18/54/lily-1512813_150.jpg'
        },
        {
          largeImageURL:
            'https://pixabay.com/get/51e1d0464e52b108f5d084609629337b113bdee2504c704c722a73d79249c651_1280.jpg',
          webformatHeight: 360,
          webformatWidth: 640,
          likes: 300,
          imageWidth: 3020,
          id: 715540,
          user_id: 916237,
          views: 99840,
          comments: 33,
          pageURL:
            'https://pixabay.com/photos/yellow-natural-flower-blossom-715540/',
          imageHeight: 1703,
          webformatURL:
            'https://pixabay.com/get/51e1d0464e52b108f5d084609629337b113bdee2504c704c722a73d79249c651_640.jpg',
          type: 'photo',
          previewHeight: 84,
          tags: 'yellow, natural, flower',
          downloads: 50593,
          user: 'Wow_Pho',
          favorites: 317,
          imageSize: 974940,
          previewWidth: 150,
          userImageURL:
            'https://cdn.pixabay.com/user/2015/04/07/14-10-15-590_250x250.jpg',
          previewURL:
            'https://cdn.pixabay.com/photo/2015/04/10/00/41/yellow-715540_150.jpg'
        },
        {
          largeImageURL:
            'https://pixabay.com/get/54e1d1464f51a514f6da8c7dda79367a103bdae554526c4870287edc9448c15bb1_1280.jpg',
          webformatHeight: 390,
          webformatWidth: 640,
          likes: 437,
          imageWidth: 4000,
          id: 2145539,
          user_id: 2364555,
          views: 57310,
          comments: 32,
          pageURL:
            'https://pixabay.com/photos/crocus-flower-wet-spring-2145539/',
          imageHeight: 2443,
          webformatURL:
            'https://pixabay.com/get/54e1d1464f51a514f6da8c7dda79367a103bdae554526c4870287edc9448c15bb1_640.jpg',
          type: 'photo',
          previewHeight: 91,
          tags: 'crocus, flower, wet',
          downloads: 32921,
          user: 'pixel2013',
          favorites: 398,
          imageSize: 823922,
          previewWidth: 150,
          userImageURL:
            'https://cdn.pixabay.com/user/2019/07/15/18-51-07-612_250x250.jpg',
          previewURL:
            'https://cdn.pixabay.com/photo/2017/03/15/09/00/crocus-2145539_150.jpg'
        },
        {
          largeImageURL:
            'https://pixabay.com/get/57e5d6454a5aa414f6da8c7dda79367a103bdae554526c4870287edc9448c15bb1_1280.jpg',
          webformatHeight: 419,
          webformatWidth: 640,
          likes: 309,
          imageWidth: 4896,
          id: 1536088,
          user_id: 1195798,
          views: 295053,
          comments: 58,
          pageURL:
            'https://pixabay.com/photos/sunflower-flower-bloom-yellow-1536088/',
          imageHeight: 3208,
          webformatURL:
            'https://pixabay.com/get/57e5d6454a5aa414f6da8c7dda79367a103bdae554526c4870287edc9448c15bb1_640.jpg',
          type: 'photo',
          previewHeight: 98,
          tags: 'sunflower, flower, bloom',
          downloads: 54089,
          user: 'Couleur',
          favorites: 279,
          imageSize: 5103399,
          previewWidth: 150,
          userImageURL:
            'https://cdn.pixabay.com/user/2019/11/30/22-04-27-928_250x250.jpg',
          previewURL:
            'https://cdn.pixabay.com/photo/2016/07/23/00/12/sun-flower-1536088_150.jpg'
        },
        {
          largeImageURL:
            'https://pixabay.com/get/53e6d1424e4fad0bffd8992cc62c327a113fd9e64e50744e702778d1934ecc_1280.jpg',
          webformatHeight: 428,
          webformatWidth: 640,
          likes: 555,
          imageWidth: 3872,
          id: 56414,
          user_id: 9003,
          views: 81758,
          comments: 83,
          pageURL:
            'https://pixabay.com/photos/anemone-flower-blossom-bloom-blue-56414/',
          imageHeight: 2592,
          webformatURL:
            'https://pixabay.com/get/53e6d1424e4fad0bffd8992cc62c327a113fd9e64e50744e702778d1934ecc_640.jpg',
          type: 'photo',
          previewHeight: 100,
          tags: 'anemone, flower, blossom',
          downloads: 34943,
          user: 'Albenheim',
          favorites: 474,
          imageSize: 770723,
          previewWidth: 150,
          userImageURL:
            'https://cdn.pixabay.com/user/2012/09/08/21-14-56-990_250x250.jpg',
          previewURL:
            'https://cdn.pixabay.com/photo/2012/09/08/21/51/anemone-56414_150.jpg'
        },
        {
          largeImageURL:
            'https://pixabay.com/get/51e2dc464b57b108f5d084609629337b113bdee2504c704c722a73d79249c651_1280.jpg',
          webformatHeight: 416,
          webformatWidth: 640,
          likes: 348,
          imageWidth: 1980,
          id: 729515,
          user_id: 909086,
          views: 51923,
          comments: 24,
          pageURL:
            'https://pixabay.com/photos/flower-beautiful-bloom-blooming-729515/',
          imageHeight: 1288,
          webformatURL:
            'https://pixabay.com/get/51e2dc464b57b108f5d084609629337b113bdee2504c704c722a73d79249c651_640.jpg',
          type: 'photo',
          previewHeight: 97,
          tags: 'flower, beautiful, bloom',
          downloads: 33370,
          user: 'Bessi',
          favorites: 446,
          imageSize: 370390,
          previewWidth: 150,
          userImageURL:
            'https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg',
          previewURL:
            'https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729515_150.jpg'
        }
      ],
      total: 22110
    };

    dispatch({
      type: SEARCH_PHOTOS,
      // payload: res.data.hits
      payload: res.hits
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
        query: state.query,
        amount: state.amount,
        searchImages,
        setQuery,
        setAmount
      }}
    >
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
