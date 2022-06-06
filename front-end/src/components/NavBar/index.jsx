import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <div className="btn-routes">
        <button
          data-testid="customer_products__element-navbar-link-products"
          type="button"
        >
          PRODUTOS
        </button>
        <button
          data-testid="customer_products__element-navbar-link-orders"
          type="button"
        >
          MEUS PEDIDOS
        </button>
      </div>
      <div className="btn-login">
        <button
          data-testid="customer_products__element-navbar-user-full-name"
          type="button"
        >
          Usuário
        </button>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
        >
          SAIR
        </button>
      </div>
    </nav>

  );
}

export default NavBar;
