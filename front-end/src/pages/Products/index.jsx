import React, { useEffect, useContext } from 'react';
import MyContext from '../../context/MyContext';
import NavBar from '../../components/NavBar';
import CardProduct from '../../components/CardProduc';
import CarButton from '../../components/CarButton';
import './Products.css';

function Products() {
  const { products, setProducts } = useContext(MyContext);
  // const [products, setProducts] = useState([]);
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
