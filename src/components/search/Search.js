import React, { useState, useContext } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core/';
import PixabayContext from '../../context/pixabay/pixabayContext';

const Search = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(10);
  const pixabayContext = useContext(PixabayContext);

  const textOnChange = e => {
    setText(e.target.value);
    console.log(text);
    console.log(amount);
    if (text !== '') {
      pixabayContext.searchImages(amount, text);
    }
    console.log(pixabayContext.images);
  };

  const amountOnChange = e => {
    setAmount(e.target.value);
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
      />

      <TextField
        select
        variant='outlined'
        label='Amount'
        style={{ minWidth: 120, marginTop: 10 }}
        onChange={amountOnChange}
        value={amount}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </TextField>
    </Container>
  );
};

export default Search;
