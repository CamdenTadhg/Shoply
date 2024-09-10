import React from 'react';
import ProductDetail from './ProductDetail';
import MiniCart from './MiniCart';
import Grid from '@mui/material/Grid2';

function ProductDetailPage() {

    return (
      <>
      <Grid container>
        <Grid size={9}>
          <ProductDetail/>
        </Grid>
        <Grid size={3}>
          <MiniCart />
        </Grid>
      </Grid>
      </>
    );
  }

  export default ProductDetailPage;