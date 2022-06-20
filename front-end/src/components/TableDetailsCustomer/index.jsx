import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import formatCurrency from '../../utils/formatCurrency';

function TableDetailsCustomer() {
  const dataTest = 'customer_order_details__element-order-details-label-delivery-status';
  function handleButton() {
    console.log('marca como entregue no banco');
  }

  const { orderDetails: order } = useContext(MyContext);
  console.log('compoenten', order);
  return (
    <>

      <table border="1">
        <tr>
          <td
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            pedido
            {' '}
            { order.id }
          </td>
          <td
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            P. vend:
            {' '}
            { order.seller.name }
          </td>
          <td
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { order.saleDate }
          </td>
          <td
            data-testid={ dataTest }
          >
            { order.status }

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
        { order.products.map(({ name, price, SalesProducts, id }, index) => (
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
              { SalesProducts.quantity }
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
              { formatCurrency(SalesProducts.quantity * price) }
            </td>
          </tr>
        )) }
      </table>
      <h2
        data-testid="customer_order_details__element-order-total-price"
      >
        { formatCurrency(order.totalPrice) }
      </h2>
    </>
  );
}

export default TableDetailsCustomer;
