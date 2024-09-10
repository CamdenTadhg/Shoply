import React from 'react';
import ProductList from './ProductList';
import MiniCart from './MiniCart';
import './App.css';

function App() {

  return (
    <>
      <ProductList/>
      <MiniCart />
    </>
  );
}

export default App


// write tests for action creators
// write tests for reducers
// style page
// create route for product details
// create link for product details page
// create product details component
// allow users to add items to their cart from product details page
// allow users to remove items from their cart from product details page
// style product details page
// create route for cart
// create cart component
// allow users to add items to their cart from the cart
// allow users to remove items from their cart from the cart
// style cart page

//refactor code
//add form to cart page for discount codes
// set up discout codes
// ensure you can only do one discount at a time
// display an error message if user tries to add multiple discounts
// create navbar component
// style navbar
// add taxes functionality
// store cart in local storage
//deploy app on render
// add out of stock functionality
// add responsive styling
// write component tests
// add a backend
// add a secret_discounts_page to add and remove coupon codes
// add a products/new route to add products to the inventory
// add save for later functionality to cart (don't count towards total price)
// write any additional tests I'm missing
// refactor code