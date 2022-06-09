import React from 'react';
import './CardDetailsAndAddress.css';

function CardDetailsAndAddress() {
  const mockeSeller = ['Iago', 'Lary', 'Luciano', 'Rodolfo', 'Walace'];

  return (
    <form className="form-container">
      <div className="inputs-form">
        <label htmlFor="seller">
          P.Vendedora Responsável:
          <select
            data-testid="customer_checkout__select-seller"
            name="seller"
            id="seller"
          >
            { mockeSeller.map((seller, index) => (
              <option key={ index } value={ seller }>{ seller }</option>
            )) }
          </select>
        </label>

        <label htmlFor="address">
          Endereço:
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            name="address"
            id="address"
          />
        </label>

        <label htmlFor="number">
          Número:
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="text"
            inputMode="numeric"
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
