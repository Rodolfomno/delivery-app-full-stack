import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';

import './CartButton.css';

function CartButton() {
  const navigate = useNavigate();
  const { cartTotalValue } = useContext(MyContext);
  // const [cartTotalValue, setCartTotalValue] = useState(0);
  // useEffect(() => {
  //   const cart = JSON.parse(localStorage.getItem('cart')) || [];
  //   console.log('LS', cart);
  //   if (cart.length) {
  //     const totalValue = cart.map((prod) => Number(prod.price) * prod.qtd)
  //       .reduce((acc, price) => acc + price, 0);
  //     console.log('totalValueRDC', totalValue);
  //     setCartTotalValue(totalValue);
  //     console.log('DEptotalValueRDC', totalValue);
  //     console.log('useEffect', cart);
  //   }
  // }, [countProduct]);

  return (
    <button
      data-testid="customer_products__button-cart"
      className="cart-btn"
      type="button"
      onClick={ () => navigate('/customer/checkout') }
    >
      <span
        data-testid="customer_products__checkout-bottom-value"
      >
        { `Ver Carrinho: ${cartTotalValue} `}
      </span>
    </button>
  );
}

export default CartButton;
