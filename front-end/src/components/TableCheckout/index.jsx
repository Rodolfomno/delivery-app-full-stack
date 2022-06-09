import React, { useEffect, useState } from 'react';

function TableCheckout() {
  const [cartItems, setCartItems] = useState([]);
  const [totalCheckoutValor, setTotalCheckoutValor] = useState(0);
  // zebirita@email.com
  // $#zebirita#$

  function handleButton({ target }) {
    const { name } = target;
    console.log('array antigo', cartItems);
    const newData = cartItems.filter((item) => Number(item.id) !== Number(name));
    console.log('Novo Array', newData);
    setCartItems([...newData]);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart')) || [];
    const total = data.reduce((acc, product) => acc + (product.qtd * product.price), 0);
    localStorage.setItem('totalCart', JSON.stringify());
    setTotalCheckoutValor(total);
    setCartItems([...data] || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));

    const data2 = JSON.parse(localStorage.getItem('cart')) || [];
    const total = data2.reduce((acc, product) => acc + (product.qtd * product.price), 0);

    setTotalCheckoutValor(total);
  }, [cartItems]);

  return (
    <table>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Valor unitario</th>
        <th>Descrição</th>
        <th>Sub-total</th>
        <th>Remover item</th>
      </tr>
      { cartItems && cartItems.map(({ name, price, qtd, id }, indice) => (
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
            data-testid={ `customer_checkout__element-order-table-unit-price-${indice}` }
          >
            { price }
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-quantity-${indice}` }
          >
            { qtd }
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-total-price-${indice}` }
          >
            { price * qtd }
          </td>
          <button
            data-testid={
              `customer_checkout__element-order-table-total-remove-${indice}`
            }
            type="button"
            name={ id }
            onClick={ handleButton }
          >
            Remover
          </button>
        </tr>
      ))}
      <div
        data-testid={
          `customer_checkout__element-order-table-total-total-price-${indice}`
        }
      >
        Total:
        { totalCheckoutValor }
      </div>
    </table>
  );
}

export default TableCheckout;
