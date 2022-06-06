import React from 'react';
import NavBar from '../../components/NavBar';
import CardProduct from '../../components/CardProduc';
import './Products.css';

function Products() {
  return (
    <>
      <NavBar />
      {/* <h1>PRODUTOS</h1> */}
      <main>
        <CardProduct />
      </main>
    </>
  );
}

export default Products;
