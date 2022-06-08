import React from 'react';
import './cardOrders.css';

function cardOrders() {
  return (
    <section className="container-orders">
      <div className="card">
        <div className="request-number">
          <h3>Pedido</h3>
          <h2>0001</h2>
        </div>

        <div className="request-status">
          <h2>PREPARANDO</h2>
        </div>

        <div className="request-dateprice">
          <span className="card-dateprice">07/04/21</span>
          <span className="card-dateprice">R$ 28,46</span>
        </div>
      </div>
    </section>
  );
}

export default cardOrders;
