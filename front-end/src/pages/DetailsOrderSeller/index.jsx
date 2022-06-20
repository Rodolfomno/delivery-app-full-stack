import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestData, setToken } from '../../service/request';
import NavbarSeller from '../../components/NavbarSeller';
import TableDetailsSeller from '../../components/TableDetailsSeller';
import MyContext from '../../context/MyContext';

function DetailsOrderSeller() {
  const { id: idParams } = useParams();
  const { setOrderDetails, orderDetails } = useContext(MyContext);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user')) || [];
    (
      async () => {
        setToken(token);
        const dataOrder = await requestData(`/sale/${idParams}`);

        setOrderDetails(dataOrder[0]);
      }
    )();
  }, [setOrderDetails, idParams]);

  return (
    <>
      <NavbarSeller />
      <h1>Detalhes do Pedido: SELLER</h1>
      {
        orderDetails && <TableDetailsSeller />
      }
    </>

  );
}

export default DetailsOrderSeller;
