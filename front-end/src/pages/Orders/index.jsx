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

  useEffect(() => {
    (async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      console.log(token);
      setToken(token);
      const data = await cardInfo();
      console.log(data);
      setDataUser([...data]);
    })();
  }, []);
  // console.log(setDataUser);

  return (
    <>
      <NavBar />
      <main>
        {dataUser
          .map((user, index) => (
            <CardOrders
              index={ index + 1 }
              userD={ user }
              key={ user.id }
            />))}
      </main>
    </>
  );
}

export default Orders;
