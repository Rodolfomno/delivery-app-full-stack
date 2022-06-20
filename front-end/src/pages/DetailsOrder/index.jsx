import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import formatCurrency from '../../utils/formatCurrency';

function DetailsOrder() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isDelivered, setIsDelivered] = useState(false);

  const mockDetails = {
    id: '003',
    nome: 'fulana pereira',
    data: '06/06/1996',
    entregue: 'entregue?',
    marcar: 'marcarComo',
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart')) || [];
    const total = data.reduce((acc, product) => acc + (product.qtd * product.price), 0);
    setTotalPrice(formatCurrency(total));
  }, [setTotalPrice]);

  function handleButton() {
    console.log('marca como entregue no banco');
  }
  return (
    <>
      <NavBar />
      <h1>Detalhes do Pedido</h1>
      <table border="1">
        <tr>
          <td>
            pedido
            {' '}
            { mockDetails.id }
          </td>
          <td>
            P. vend:
            {' '}
            { mockDetails.nome }
          </td>
          <td>{ mockDetails.data }</td>
          <td>{ mockDetails.entregue }</td>
          <button
            type="button"
            name="marcarButton"
            onClick={ handleButton }
          >
            Marcar como entregue
          </button>
        </tr>
        <tr>
          <td>Item</td>
          <td>descrição</td>
          <td>quantidade</td>
          <td>Valor unitario</td>
          <td>sub-total</td>
        </tr>
        { cartItems.map(({ name, price, qtd, id }, index) => (
          <tr key={ index }>
            <td>{ id }</td>
            <td>{ name }</td>
            <td>{ qtd }</td>
            <td>{ formatCurrency(price) }</td>
            <td>{ formatCurrency(qtd * price) }</td>
          </tr>
        )) }
      </table>
      <h2>{ totalPrice }</h2>
    </>

  );
}

export default DetailsOrder;
