import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import formatCurrency from '../../utils/formatCurrency';

const dataTest = 'customer_order_details__element-order-details-label-delivery-status';

function DetailsOrder() {
  const { id } = useParams();
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
          <td
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            pedido
            {' '}
            { mockDetails.id }
          </td>
          <td
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            P. vend:
            {' '}
            { mockDetails.nome }
          </td>
          <td
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { mockDetails.data }
          </td>
          <td
            data-testid={ dataTest }
          >
            { mockDetails.entregue }

          </td>
          <button
            data-testid="customer_order_details__button-delivery-check"
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
            <td
              data-testid={
                `customer_order_details__element-order-table-item-number-${index}`
              }
            >
              { id }
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-name-${index}`
              }
            >
              { name }

            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-quantity-${index}`
              }
            >
              { qtd }
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-sub-total-${index}`
              }
            >
              { formatCurrency(price) }
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-total-price-${index}`
              }
            >
              { formatCurrency(qtd * price) }
            </td>
          </tr>
        )) }
      </table>
      <h2>{ totalPrice }</h2>
    </>

  );
}

export default DetailsOrder;
