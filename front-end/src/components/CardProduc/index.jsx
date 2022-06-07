import PropTypes from 'prop-types';
import React from 'react';
import ButtonCardProduc from '../ButtonCardProduct';
import './CardProduc.css';

function CardProduct({ product }) {
  const { id, name, price, urlImage } = product;
  return (
    <div className="card">
      <div className="card-img-price">
        <span data-testid={ `customer_products__element-card-price-${id}` }>
          { `R$ ${price}` }
        </span>
        <img
          src={ urlImage }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          alt="imagem-de-bebida"
        />
      </div>
      <div className="card-un-desc">
        <span data-testid={ `customer_products__element-card-title-${id}` }>
          { name }
        </span>
        <ButtonCardProduc id={ id } />
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default CardProduct;
