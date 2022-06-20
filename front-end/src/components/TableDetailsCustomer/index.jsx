import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import formatCurrency from '../../utils/formatCurrency';
import { setToken, requestStatus } from '../../service/request';

function TableDetailsCustomer() {
  const { id: idParams } = useParams();
  const dataTest = 'customer_order_details__element-order-details-label-delivery-status';
  const { orderDetails: order } = useContext(MyContext);
  const [isFinish, setIsFinish] = useState(true);

  useEffect(() => {
    if (order.status === 'Em Trânsito') {
      setIsFinish(false);
    }
  }, [order.status]);

  const handleButtonState = async (body) => {
    const { token } = JSON.parse(localStorage.getItem('user')) || [];
    setToken(token);
    const endPoint = `/sale/${idParams}`;
    console.log('status', await requestStatus(endPoint, body));
  };

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
            { moment(order.saleDate).format('DD/MM/YYYY') }
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
            onClick={ () => {
              handleButtonState({ status: 'Entregue' });
              setIsFinish(true);
            } }
            disabled={ isFinish }
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
