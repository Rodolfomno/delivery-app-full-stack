import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import CardProduct from '../../components/CardProduc';
import CarButton from '../../components/CarButton/inde';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem('products'));
    setProducts([...ls]);
  }, []);
  return (
    <>
      <NavBar />
      <main>
        {
          products.map((product) => (
            <CardProduct key={ product.id } product={ product } />
          ))
        }
        <CarButton />
      </main>
    </>
  );
}

export default Products;
