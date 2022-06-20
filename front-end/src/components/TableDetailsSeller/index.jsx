import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import formatCurrency from '../../utils/formatCurrency';
import { requestStatus, setToken } from '../../service/request';

function TableDetailsSeller() {
  const { id: idParams } = useParams();
  const [isPreparing, setIsPreparing] = useState(false);
  const [isFinish, setIsFinish] = useState(true);

  const dataTest = 'seller_order_details__element-order-details-label-delivery-status';
  const { orderDetails: order } = useContext(MyContext);

  useEffect(() => {
    if (order.status === 'Preparando') {
      setIsPreparing(true);
      setIsFinish(false);
    } else if (order.status === 'Em Trânsito') {
      setIsPreparing(true);
    }
  }, [order.status]);

  const handleButtonState = async (body) => {
    const { token } = JSON.parse(localStorage.getItem('user')) || [];
    setToken(token);
    const endPoint = `/sale/${idParams}`;
    console.log('status', await requestStatus(endPoint, body));
  };
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
            disabled={ isPreparing }
            onClick={ () => {
              handleButtonState({ status: 'Preparando' });
              setIsPreparing(true);
            } }
          >
            Preparar Pedido
          </button>
          <button
            data-testid="seller_order_details__button-dispatch-check"
            type="button"
            name="marcarButton"
            disabled={ isFinish }
            onClick={ () => {
              handleButtonState({ status: 'Em Trânsito' });
              setIsFinish(true);
            } }
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
