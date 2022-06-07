import React from 'react';
import { useNavigate } from 'react-router-dom';

import './CarButton.css';

function CarButton() {
  const navigate = useNavigate();

  return (
    <button
      className="car-btn"
      type="button"
      onClick={ () => navigate('/customer/checkout') }
    >
      Ver Carrinho: R$ 300.00
    </button>
  );
}

export default CarButton;
