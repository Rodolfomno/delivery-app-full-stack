import React, { useEffect, useState, useContext } from 'react';
import formatCurrency from '../../utils/formatCurrency';
import MyContext from '../../context/MyContext';

function TableCheckout() {
  const [cartItems, setCartItems] = useState([]);
  const { totalCheckoutValor, setTotalCheckoutValor } = useContext(MyContext);
  // const [totalCheckoutValor, setTotalCheckoutValor] = useState(0);
  // zebirita@email.com
  // $#zebirita#$

  function handleButton({ target }) {
    const { name } = target;
    const newData = cartItems.filter((item) => Number(item.id) !== Number(name));
    setCartItems(newData);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart')) || [];
    const total = data.reduce((acc, product) => acc + (product.qtd * product.price), 0);
    // localStorage.setItem('totalCart', JSON.stringify());
    setTotalCheckoutValor(total);
    setCartItems([...data] || []);
  }, [setTotalCheckoutValor]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));

    const data2 = JSON.parse(localStorage.getItem('cart')) || [];
    const total = data2.reduce((acc, product) => acc + (product.qtd * product.price), 0);

    setTotalCheckoutValor(formatCurrency(total));
  }, [cartItems, setTotalCheckoutValor]);

  return (
    <table>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
        <th>Remover Item</th>
      </tr>
      { cartItems.map(({ name, price, qtd, id }, indice) => (
        <tr key={ id }>
          <td
            data-testid={
              `customer_checkout__element-order-table-item-number-${indice}`
            }
          >
            { indice + 1 }
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-name-${indice}` }
          >
            { name }
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-quantity-${indice}` }
          >
            { qtd }
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-unit-price-${indice}` }
          >
            { formatCurrency(price)}
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-sub-total-${indice}` }
          >
            { formatCurrency(price * qtd)}
          </td>
          <td>
            <button
              data-testid={
                `customer_checkout__element-order-table-remove-${indice}`
              }
              type="button"
              name={ id }
              onClick={ handleButton }
            >
              Remover
            </button>
          </td>

        </tr>
      ))}
      <div
        data-testid="customer_checkout__element-order-total-price"
      >
        Total:
        { totalCheckoutValor }
      </div>
    </table>
  );
}

export default TableCheckout;
