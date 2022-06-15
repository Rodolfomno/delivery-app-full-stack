import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import { requestCheckout, requestData, setToken } from '../../service/request';
// import './CardDetailsAndAddress.css';

function CardDetailsAndAddress() {
  const navigate = useNavigate();

  const [sellers, setSellers] = useState([]);
  const { totalCheckoutValor } = useContext(MyContext);
  const [salesDetails, setSalesDetails] = useState({
    idSeller: 0,
    address: '',
    number: '',
  });

  useEffect(() => {
    (async () => {
      const endPoint = '/user/seller';
      const dataSellers = await requestData(endPoint);
      console.log('seller', dataSellers);
      setSellers([...dataSellers]);
    }
    )();
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    setSalesDetails({ ...salesDetails, [name]: value });
  };

  const onSubmitFinish = async (e) => {
    e.preventDefault();
    const endpoint = '/sale';
    const total = totalCheckoutValor.slice(2).replace(',', '.');
    const { token, id } = JSON.parse(localStorage.getItem('user')) || [];
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const requestBody = {
      userId: id,
      sellerId: +salesDetails.idSeller,
      totalPrice: +total,
      deliveryAddress: salesDetails.address,
      deliveryNumber: salesDetails.number,
      products: cart,
    };
    setToken(token);
    const { saleId } = await requestCheckout(endpoint, requestBody);
    localStorage.setItem('finish', totalCheckoutValor);
    navigate(`/customer/orders/${saleId}`);
  };
  return (
    <form onSubmit={ (e) => onSubmitFinish(e) } className="form-container">
      <div className="inputs-form">
        <label htmlFor="seller">
          P.Vendedora Responsável:
          <select
            data-testid="customer_checkout__select-seller"
            onChange={ handleInputChange }
            value={ salesDetails.idSeller }
            key={ salesDetails.id }
            name="idSeller"
            id="seller"
          >
            <option>Vendedor</option>
            { sellers.map((seller) => (
              <option
                value={ seller.id }
                key={ seller.id }
              >
                { seller.name }

              </option>
            )) }
          </select>
        </label>

        <label htmlFor="address">
          Endereço:
          <input
            data-testid="customer_checkout__input-address"
            onChange={ handleInputChange }
            type="text"
            value={ salesDetails.address }
            name="address"
            id="address"
          />
        </label>

        <label htmlFor="number">
          Número:
          <input
            data-testid="customer_checkout__input-addressNumber"
            onChange={ handleInputChange }
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
