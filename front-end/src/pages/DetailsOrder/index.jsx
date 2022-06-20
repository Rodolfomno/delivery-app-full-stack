import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import { requestData, setToken } from '../../service/request';
import NavBar from '../../components/NavBar';
import TableDetailsCustomer from '../../components/TableDetailsCustomer';

function DetailsOrder() {
  const { id: idParams } = useParams();
  console.log('id', idParams);
  const { setOrderDetails, orderDetails } = useContext(MyContext);
  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user')) || [];
    (
      async () => {
        setToken(token);
        const dataOrder = await requestData(`/sale/${idParams}`);
        console.log('Order1', dataOrder);

        setOrderDetails(dataOrder[0]);
      }
    )();
  }, [setOrderDetails, idParams]);

  return (
    <>
      <NavBar />
      <h1>Detalhes do Pedido</h1>
      {
        orderDetails && <TableDetailsCustomer />
      }
    </>

  );
}

export default DetailsOrder;
