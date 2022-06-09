import React from 'react';
import NavBar from '../../components/NavBar';
import CardDetailsAndAddress from '../../components/CardDetailsAndAddress';
import './Checkout.css';

import TableCheckout from '../../components/TableCheckout';


function Checkout() {
  return (
    <>
      <NavBar />
      <main>
        <section className="orders-conteiner">
          <h2>Finalizar Pedidos</h2>
          <TableCheckout />
        </section>
        <section className="delivery-container">
          <h2>Detalhes e Endereço de Entrega</h2>
          <CardDetailsAndAddress />
        </section>
      </main>
    </>
  );
}

export default Checkout;
