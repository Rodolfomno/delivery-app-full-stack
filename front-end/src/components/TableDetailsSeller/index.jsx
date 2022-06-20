import React, { useContext } from 'react';
import moment from 'moment';
import MyContext from '../../context/MyContext';
import formatCurrency from '../../utils/formatCurrency';

function TableDetailsSeller() {
  const dataTest = 'seller_order_details__element-order-details-label-delivery-status';
  const { orderDetails: order } = useContext(MyContext);
  console.log('TableSeller', order);

  function handleButton() {
    console.log('marca como entregue no banco');
  }
  return (
    <>
      <table border="1">
        <tr>
          <td
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            pedido
            {' '}
            { order.id }
          </td>
          <td
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            { moment(order.saleDate).format('DD/MM/YYYY') }
          </td>
          <td
            data-testid={ dataTest }
          >
            { order.status }

          </td>
          <button
            data-testid="seller_order_details__button-preparing-check"
            type="button"
            name="marcarButton"
            onClick={ handleButton }
          >
            Preparar Pedido
          </button>
          <button
            data-testid="seller_order_details__button-dispatch-check"
            type="button"
            name="marcarButton"
            onClick={ handleButton }
            disabled="true"
          >
            Saiu para entrega
          </button>
        </tr>
        <tr>
          <td>Item</td>
          <td>descrição</td>
          <td>quantidade</td>
          <td>Valor unitario</td>
          <td>sub-total</td>
        </tr>
        { order.products.map(({ name, price, SalesProducts, id }, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `seller_order_details__element-order-table-item-number-${index}`
              }
            >
              { id }
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-name-${index}`
              }
            >
              { name }

            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-quantity-${index}`
              }
            >
              { SalesProducts.quantity }
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-sub-total-${index}`
              }
            >
              { formatCurrency(price) }
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-total-price-${index}`
              }
            >
              { formatCurrency(SalesProducts.quantity * price) }
            </td>
          </tr>
        )) }
      </table>
      <h2
        data-testid="seller_order_details__element-order-total-price"
      >
        { formatCurrency(order.totalPrice) }
      </h2>
    </>
  );
}

export default TableDetailsSeller;
