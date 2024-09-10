import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './MainPage';
import ProductDetailPage from './ProductDetailPage';
import './App.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App


//change actionstypes, actioncreators, and rootreducer to allow removing all from cart
// create component to remove all from cart
// allow users to remove all of an item from their cart
// create route for cart
// create cart component
// allow users to add items to their cart
// allow users to remove items from their cart
// style cart page

// refactor code
// add form to cart page for discount codes
// set up discout codes
// ensure you can only do one discount at a time
// display an error message if user tries to add multiple discounts
// create navbar component
// style navbar
// add taxes functionality
// store cart in local storage
//deploy app on render
// add out of stock functionality
// add good, responsive styling
// make prices all show up with decimal places
// write component tests
// add a backend
// add a secret_discounts_page to add and remove coupon codes
// add a products/new route to add products to the inventory
// add save for later functionality to cart (don't count towards total price)
// write any additional tests I'm missing
// refactor code