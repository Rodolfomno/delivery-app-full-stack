import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <div className="btn-routes">
        <button type="button">
          PRODUTOS
        </button>
        <button type="button">
          MEUS PEDIDOS
        </button>
      </div>
      <div className="btn-login">
        <button type="button">
          Usuário
        </button>
        <button type="button">
          SAIR
        </button>
      </div>
    </nav>

  );
}

export default NavBar;
