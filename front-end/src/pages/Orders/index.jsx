import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import { requestData, setToken } from '../../service/request';
import CardOrders from '../../components/CardOrders';
import './order.css';

function Orders() {
  const [dataUser, setDataUser] = useState([]);
  const cardInfo = async () => {
    const endpoint = '/sale';
    const data = await requestData(endpoint);
    console.log(data);
    return data;
  };

  useEffect(async () => {
    // setDataUser({ ...JSON.parse(localStorage.getItem('user')) });
    const { id, token } = JSON.parse(localStorage.getItem('user'));
    const data = await cardInfo(id);
    setToken(token);
    console.log(data);
    setDataUser([...data]);
  }, []);
  // console.log(setDataUser);

  return (
    <>
      <NavBar />
      <main>
        {dataUser
          .map((user, index) => (
            <CardOrders
              index={ index }
              userD={ user }
              key={ user.id }
            />))}
      </main>
    </>
  );
}

export default Orders;
