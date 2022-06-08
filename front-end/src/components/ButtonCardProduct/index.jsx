import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../../context/MyContext';
import formatCurrency from '../../utils/formatCurrency';
import './ButtonCardProduct.css';

function ButtonCardProduc({ product }) {
  const { id } = product;
  const [countProduct, setCountProduct] = useState({ un: 0 });
  const { setisDisabledButtonCart, setCartTotalValue } = useContext(MyContext);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart || cart.length === 0) {
      setisDisabledButtonCart(true);
    } else {
      setisDisabledButtonCart(false);
    }
  }, [countProduct]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length) {
      console.log('soma', cart);
      const totalValue = cart.map((prod) => Number(prod.price) * prod.qtd)
        .reduce((acc, price) => acc + price, 0);

      setCartTotalValue(formatCurrency(totalValue));
    } else {
      setCartTotalValue('R$ 0,00');
    }
  }, [countProduct, setCartTotalValue]);

  const removeProduct = () => {
    if (countProduct.un !== 0) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCountProduct({ ...countProduct, un: countProduct.un - 1 });
      cart.forEach((prod) => {
        if (prod.id === id) {
          prod.qtd -= 1;
        }
      });
      const filteredCart = cart.filter((prod) => prod.qtd !== 0);
      localStorage.setItem('cart', JSON.stringify(filteredCart));
    }
  };

  const addProduct = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCountProduct({ ...countProduct, un: countProduct.un + 1 });
    const ifContained = cart.some((prod) => prod.id === id);
    if (ifContained) {
      cart.forEach((prod) => {
        if (prod.id === id) {
          prod.qtd += 1;
        }
      });
      // localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      cart.push({ ...product, qtd: countProduct.un + 1 });
      // localStorage.setItem('cart', JSON.stringify(cart));
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const handleCoutProduct = ({ target }) => {
    const { value } = target;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCountProduct({ ...countProduct, un: Number(value) });
    const ifContained = cart.some((prod) => prod.id === product.id);
    if (ifContained) {
      cart.forEach((prod) => {
        if (prod.id === id) {
          prod.qtd = Number(value);
        }
      });
      // localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      cart.push({ ...product, qtd: value });
      // localStorage.setItem('cart', JSON.stringify(cart));
    }
    const filteredCart = cart.filter((prod) => prod.qtd !== 0);
    localStorage.setItem('cart', JSON.stringify(filteredCart));
  };
  return (
    <div className="btn-rm-add">
      <button
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        className="btn-rm"
        type="button"
        onClick={ removeProduct }
      >
        -
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        value={ countProduct.un }
        onChange={ handleCoutProduct }
        type="number"
        min={ 0 }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
        className="btn-add"
        type="button"
        onClick={ addProduct }
      >
        +
      </button>
    </div>
  );
}

ButtonCardProduc.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    priceP: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default ButtonCardProduc;
