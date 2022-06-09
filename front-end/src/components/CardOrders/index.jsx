import React from 'react';
import './cardOrders.css';

function cardOrders() {
  return (
    <section className="container-orders">
      <div className="card-orders">
        <div className="request-number">
          <h3>Pedido</h3>
          <h2 data-testid="customer_orders__element-order-id-<id>">0001</h2>
        </div>

        <div className="request-status">
          <h2 data-testid="customer_orders__element-delivery-status-<id>">PREPARANDO</h2>
        </div>

        <div className="request-dateprice">
          <span
            data-testid="customer_orders__element-order-date-<id>"
            className="card-dateprice"
          >
            07/04/21
          </span>
          <span className="card-dateprice">R$ 28,46</span>
        </div>
      </div>
    </section>
  );
}

export default cardOrders;
