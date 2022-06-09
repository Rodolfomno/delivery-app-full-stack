import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../../context/MyContext';
import { requestCheckout, requestData } from '../../service/request';
import './CardDetailsAndAddress.css';

function CardDetailsAndAddress() {
  // const mockeSeller = ['Iago', 'Lary', 'Luciano', 'Rodolfo', 'Walace'];
  const [sellers, setSellers] = useState([]);

  const { totalCheckoutValor } = useContext(MyContext);
  const [salesDetails, setSalesDetails] = useState({
    id: '',
    seller: '',
    address: '',
    number: '',
  });

  useEffect(() => {
    (async () => {
      const endPoint = '/user/seller';
      const dataSellers = await requestData(endPoint);
      setSellers(dataSellers);
    }
    )();
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value, key } = target;
    setSalesDetails({ ...salesDetails, [name]: value, id: key });
  };

  // post finaliza copra: /sale
  const onSubmitFinish = (e) => {
    const endpoint = '/sale';
    e.preventDefault();
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const requestBody = {
      userId: cart.id,
      sellerId: salesDetails.id,
      totalPrice: totalCheckoutValor,
      deliveryAddress: salesDetails.address,
      deliveryNumber: salesDetails.number,
      products: cart,
    };

    requestCheckout(endpoint, requestBody);
    localStorage.setItem('finish', totalCheckoutValor);
  };
  return (
    <form onSubmit={ (e) => onSubmitFinish(e) } className="form-container">
      <div className="inputs-form">
        <label htmlFor="seller">
          P.Vendedora Responsável:
          <select
            onChange={ handleInputChange }
            value={ salesDetails.seller }
            key={ salesDetails.id }
            data-testid="customer_checkout__select-seller"
            name="seller"
            id="seller"
          >
            { sellers.map((seller) => (
              <option key={ seller.id } value={ seller }>{ seller }</option>
            )) }
          </select>
        </label>

        <label htmlFor="address">
          Endereço:
          <input
            onChange={ handleInputChange }
            data-testid="customer_checkout__input-address"
            type="text"
            value={ salesDetails.address }
            name="address"
            id="address"
          />
        </label>

        <label htmlFor="number">
          Número:
          <input
            onChange={ handleInputChange }
            data-testid="customer_checkout__input-addressNumber"
            type="text"
            inputMode="numeric"
            value={ salesDetails.number }
            name="number"
            id="number"
          />
        </label>
      </div>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="submit"
      >
        Finallizar
      </button>
    </form>
  );
}

export default CardDetailsAndAddress;
