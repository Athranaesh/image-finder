import React, { useState, useEffect, useContext } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

import PixabayContext from '../../context/pixabay/pixabayContext';

const Search = () => {
  const pixabayContext = useContext(PixabayContext);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (initialized) {
      pixabayContext.searchImages();
    }
  }, [pixabayContext.amount, pixabayContext.query, pixabayContext.sort]);

  const textOnChange = e => {
    if (e.target.value === '') {
      setInitialized(false);
      setTimeout(pixabayContext.clearImages, 150);
    } else {
      pixabayContext.setQuery(e.target.value);
      setInitialized(true);
    }
  };

  const amountOnChange = e => {
    pixabayContext.setAmount(e.target.value);
  };

  const sortOnChange = e => {
    setTimeout(pixabayContext.setSort(e.target.value), 100);
  };

  return (
    <Container>
      <Typography style={{ marginTop: 30, marginBottom: 12 }}>
        Search over a million high quality stock photos!{' '}
      </Typography>
      <TextField
        variant='outlined'
        label='Search for images'
        margin='normal'
        fullWidth
        onChange={textOnChange}
        defaultValue={pixabayContext.query}
      />

      <TextField
        select
        variant='outlined'
        label='Per Page'
        style={{ minWidth: 80, marginTop: 10 }}
        onChange={amountOnChange}
        defaultValue={pixabayContext.amount}
      >
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={35}>35</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </TextField>
      <TextField
        select
        variant='outlined'
        label='Sort by'
        style={{ minWidth: 140, marginTop: 10, marginLeft: 20 }}
        onChange={sortOnChange}
        defaultValue={pixabayContext.sort}
      >
        <MenuItem value={'popular'}>Popularity</MenuItem>
        <MenuItem value={'latest'}>Most Recent</MenuItem>
      </TextField>
    </Container>
  );
};

export default Search;
