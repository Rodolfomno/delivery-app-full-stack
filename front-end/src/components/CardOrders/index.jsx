import PropTypes from 'prop-types';
import React from 'react';
// import './cardOrders.css';

function CardOrders(props) {
  const { userD, index } = props;
  console.log(props);
  return (
    <section className="container-orders">
      <div className="card-container">

        <div className="request-number">
          <h3>Pedido</h3>
          <h2 data-testid={ `customer_orders__element-order-id-${index}` }>
            { index + 1 }

          </h2>
        </div>

        <div className="request-status">
          <h2 data-testid={ `customer_orders__element-delivery-status-${index}` }>
            { userD.status }
          </h2>
        </div>

        <div className="request-dateprice">
          <span
            data-testid={ `customer_orders__element-order-date-${index}` }
            className="card-dateprice"
          >
            { userD.saleDate }
          </span>
          <span className="card-dateprice">{ userD.totalPrice }</span>
        </div>
      </div>
    </section>
  );
}

CardOrders.propTypes = {
  index: PropTypes.number.isRequired,
  userD: PropTypes.shape({
    data: PropTypes.string,
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
  }).isRequired,
};

export default CardOrders;
