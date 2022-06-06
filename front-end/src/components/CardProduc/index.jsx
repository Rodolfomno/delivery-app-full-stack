import React from 'react';
import ButtonCardProduc from '../ButtonCardProduct';
import './CardProduc.css';

function CardProduct() {
  // const [countProduct, setCountProduct] = useState(0);
  return (
    <div className="card">
      <div className="card-img-price">
        <span>$Preco</span>
        <span>Imagem</span>
      </div>
      <div className="card-un-desc">
        <span>Descricao</span>
        <ButtonCardProduc />
        {/* <div className="btn-rm-add">
          <button type="button">-</button>
          <span>{countProduct}</span>
          <button type="button">+</button>
        </div> */}
      </div>
    </div>
  );
}

export default CardProduct;
