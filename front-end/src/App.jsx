import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Login from './pages/login';
import Register from './pages/register';
import Products from './pages/products';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="customer/orders/" element={ <Checkout /> } />
      <Route expec path="/" element={ <Navigate to="/login" /> } />
    </Routes>
  );
}

export default App;
