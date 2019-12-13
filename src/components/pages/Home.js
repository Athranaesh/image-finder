import React, { Fragment } from 'react';
import Search from '../search/Search';
import ImageResults from '../image-results/ImageResults';

const Home = () => (
  <Fragment>
    <Search />
    <ImageResults />
  </Fragment>
);

export default Home;
