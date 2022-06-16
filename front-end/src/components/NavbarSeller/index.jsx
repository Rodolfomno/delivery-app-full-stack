import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import './NavBar.css';

function NavbarSeller() {
  const navigate = useNavigate();

  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    setDataUser({ ...JSON.parse(localStorage.getItem('user')) });
  }, []);

  const logOut = () => {
    navigate('/login');
    // localStorage.clear();
  };

  return (
    <nav>
      <div className="btn-routes">
        <button
          data-testid="customer_products__element-navbar-link-orders"
          type="button"
          onClick={ () => navigate('/seller/orders') }
        >
          PEDIDOS
        </button>
      </div>
      <div className="btn-login">
        <button
          data-testid="customer_products__element-navbar-user-full-name"
          type="button"
        >
          { dataUser.name }
        </button>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={ logOut }
        >
          SAIR
        </button>
      </div>
    </nav>

  );
}

export default NavbarSeller;
