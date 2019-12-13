import React, { useState, useEffect, useContext } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import PixabayContext from '../../context/pixabay/pixabayContext';

const Search = () => {
  const pixabayContext = useContext(PixabayContext);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (initialized) {
      pixabayContext.searchImages();
    }
  }, [pixabayContext.amount, pixabayContext.query]);

  //UseEffect is used because of the fact that state changes asynchronously and there may be lag in state changes. Use Effect will execute once the props passed in the brackets at the end are updated successfully, preventing wrong image display due to the lag. NOTE: The brackets are necessary, otherwise useEffect, at least in this project, will run infinitely and Pixabay will hate me as a result.

  const textOnChange = e => {
    if (e.target.value === '') {
      setTimeout(pixabayContext.clearImages, 150);
    } else {
      pixabayContext.setQuery(e.target.value);
      setInitialized(true);
    }
  };

  const amountOnChange = e => {
    pixabayContext.setAmount(e.target.value);
  };

  const clearImages = () => {
    pixabayContext.clearImages();
  };

  return (
    <Container>
      <Typography style={{ padding: 15, marginTop: 15 }}>
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
        style={{ minWidth: 120, marginTop: 10 }}
        onChange={amountOnChange}
        defaultValue={pixabayContext.amount}
      >
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={35}>35</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </TextField>
    </Container>
  );
};

export default Search;
