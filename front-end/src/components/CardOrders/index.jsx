import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
// import './cardOrders.css';

function CardOrders(props) {
  const navigate = useNavigate();
  const { userD, index } = props;
  console.log(props);
  return (
    <section className="container-orders">
      <div className="card-container">
        <button type="button" onClick={ () => navigate(`/customer/orders/${userD.id}`) }>
          <div className="request-number">
            <h3>Pedido</h3>
            <h2 data-testid={ `customer_orders__element-order-id-${index}` }>
              { index }

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
              { moment(userD.saleDate).format('DD/MM/YYYY') }
            </span>
            <span
              data-testid={ `customer_orders__element-card-price-${index}` }
              className="card-dateprice"
            >
              { userD.totalPrice.replace('.', ',')}

            </span>
          </div>
        </button>

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
