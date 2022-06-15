import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import './cardOrders.css';

function CardOrdersSeller(props) {
  const { order } = props;

  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/seller/orders/${order.id}`);
  };

  return (
    <section className="container-orders">
      <button
        onClick={ goToDetails }
        type="button"
        className="card-container"
      >

        <div className="request-number">
          <h3>Pedido</h3>
          <h2 data-testid={ `seller_orders__element-order-id-${order.id}` }>
            { order.id }

          </h2>
        </div>

        <div className="request-status">
          <h2 data-testid={ `seller_orders__element-delivery-status-${order.id}` }>
            { order.status }
          </h2>
        </div>

        <div className="request-dateprice">
          <span
            data-testid={ `seller_orders__element-order-date-${order.id}` }
            className="card-dateprice"
          >
            { order.saleDate }
          </span>
          <br />
          <span
            data-testid={ `seller_orders__element-card-price-${order.id}` }
            className="card-dateprice"
          >
            { order.totalPrice }
          </span>
          <br />
          <span
            data-testid={ `seller_orders__element-card-address-${order.id}` }
          >
            Rua tal, Bairro X numero 888
          </span>
        </div>
      </button>
    </section>
  );
}

CardOrdersSeller.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
  }).isRequired,
};

export default CardOrdersSeller;
