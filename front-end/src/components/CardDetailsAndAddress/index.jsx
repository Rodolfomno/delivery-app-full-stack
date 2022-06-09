import React, { useState, useContext } from 'react';
import MyContext from '../../context/MyContext';
import { requestCheckout, requestData } from '../../service/request';
import './CardDetailsAndAddress.css';

function CardDetailsAndAddress() {
  // const mockeSeller = ['Iago', 'Lary', 'Luciano', 'Rodolfo', 'Walace'];
  const [sellers, setSellers] = useState([]);

  const { totalCheckoutValor } = useContext(MyContext);
  const [clientDetails, setClientDetails] = useState({
    seller: '',
    address: '',
    number: '',
  });

  useEffect(async () => {
    const endPoint = '/user/seller';
    const dataSellers = await requestData(endPoint);
    setSellers(dataSellers);
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setClientDetails({ ...clientDetails, [name]: value });
  };

  // post finaliza copra: /sale
  const onSubmitFinish = (e) => {
    const endpoint = '/ckeckout';
    e.preventDefault();
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const requestBody = {
      cart,
      totalCheckoutValor,
      ...clientDetails,
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
            value={ clientDetails.seller }
            data-testid="customer_checkout__select-seller"
            name="seller"
            id="seller"
          >
            { sellers.map((seller, index) => (
              <option key={ index } value={ seller }>{ seller }</option>
            )) }
          </select>
        </label>

        <label htmlFor="address">
          Endereço:
          <input
            onChange={ handleInputChange }
            data-testid="customer_checkout__input-address"
            type="text"
            value={ clientDetails.address }
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
            value={ clientDetails.number }
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
