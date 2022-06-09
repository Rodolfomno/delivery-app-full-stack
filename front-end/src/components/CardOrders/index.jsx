import PropTypes from 'prop-types';
import React from 'react';
import './cardOrders.css';

function CardOrders(props) {
  const { userD } = props;
  console.log(props);
  return (
    <section className="container-orders">
      <div className="card">
        <div className="request-number">
          <h3>Pedido</h3>
          <h2 data-testid={ `customer_orders__element-order-id-${id}` }>{ userD.id }</h2>
        </div>

        <div className="request-status">
          <h2 data-testid="customer_orders__element-delivery-status-<id>">
            { userD.status }
          </h2>
        </div>

        <div className="request-dateprice">
          <span
            data-testid="customer_orders__element-order-date-<id>"
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
  userD: PropTypes.shape({
    data: PropTypes.string,
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
  }).isRequired,
};

export default CardOrders;
