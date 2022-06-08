import React, { useEffect, useContext } from 'react';
import MyContext from '../../context/MyContext';
import NavBar from '../../components/NavBar';
import CardProduct from '../../components/CardProduc';
import CartButton from '../../components/CartButton';
import './Products.css';

function Products() {
  const { products, setProducts } = useContext(MyContext);
  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem('products'));
    setProducts([...ls]);
  }, [setProducts]);
  return (
    <>
      <NavBar />
      <main>
        {
          products.map((product) => (
            <CardProduct key={ product.id } product={ product } />
          ))
        }
        <CartButton />
      </main>
    </>
  );
}

export default Products;
