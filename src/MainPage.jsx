import React from 'react';
import ProductList from './ProductList';
import MiniCart from './MiniCart';
import Grid from '@mui/material/Grid2';

function MainPage() {

    return (
      <>
      <Grid container>
        <Grid size={9}>
          <ProductList/>
        </Grid>
        <Grid size={3}>
          <MiniCart />
        </Grid>
      </Grid>
      </>
    );
  }

  export default MainPage;