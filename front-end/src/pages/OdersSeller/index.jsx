import React, { useState, useEffect } from 'react';
import CardOrdersSeller from '../../components/CardOrdersSeller';
import NavbarSeller from '../../components/NavbarSeller';
import { setToken, requestData } from '../../service/request';

function OrdersSeller() {
  // const vendas = [{
  //   pedido: '001',
  //   status: 'Pendente',
  //   saleDate: '08/06/2021',
  //   totalPrice: 'R$ 40,50',
  //   address: 'Rua rua, Bairro bairro, numero 2000',
  // }];

  const [dataSale, setDataSale] = useState([]);

  const cardInfo = async () => {
    const endpoint = '/sale';
    const data = await requestData(endpoint);
    return data;
  };

  useEffect(() => {
    (async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      console.log('Token', token);
      setToken(token);
      const data = await cardInfo();
      console.log('Sale', data);
      setDataSale([...data]);
    })();
  }, []);
  // console.log(setDataUser);

  return (
    <>
      <NavbarSeller />
      {
        dataSale.map((sale) => (
          <CardOrdersSeller key={ sale.id } order={ sale } />
        ))
      }
      <h2>Seller Orders</h2>
    </>
  );
}

export default OrdersSeller;
