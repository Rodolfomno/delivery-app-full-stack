import React, { useState } from 'react';
import './ButtonCardProduct.css';

function ButtonCardProduc() {
  const [countProduct, setCountProduct] = useState(0);
  return (
    <div className="btn-rm-add">
      <button
        type="button"
        onClick={ () => setCountProduct(countProduct - 1) }

      >
        -
      </button>
      <span>{countProduct}</span>
      <button
        type="button"
        onClick={ () => setCountProduct(countProduct + 1) }
      >
        +
      </button>
    </div>
  );
}

export default ButtonCardProduc;
