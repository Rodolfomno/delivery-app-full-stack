const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../api/app');
const { Sales, SalesProducts } = require('../database/models');

chai.use(chaiHttp);
const { expect } = chai;

describe('Testes de integração para rota "/customer/orders:id"', () => {
  describe('Testa requisição com método GET', () => {
    it('1 - Caso NÃO exita pedidos do cliente requerido', async () => {
      chaiHttpResponse = await chai.request(app).get('/customer/orders/5');

      expect(chaiHttpResponse.status).to.be.equal(404);
      expect(chaiHttpResponse.body.message).to.be.equal('No orders found for this customer');
    })
  })
})
