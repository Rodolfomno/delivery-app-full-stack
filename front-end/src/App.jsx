import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Checkout from './pages/Checkout';
import DetailsOrder from './pages/DetailsOrder';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/orders" element={ <Orders /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/customer/orders/:id" element={ <DetailsOrder /> } />
      <Route expec path="/" element={ <Navigate to="/login" /> } />
    </Routes>
  );
}

export default App;
