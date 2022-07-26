const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../api/app');
const { Sales, SalesProducts } = require('../database/models');

chai.use(chaiHttp);
const { expect } = chai;

describe('Testes de integração para rota "/customer"', () => {
  describe('Testa requisição com método POST', () => {
    it('1 - Caso a requisição não submeta informações da entrega corretamente', async () => {
      chaiHttpResponse = await chai.request(app).post('/customer').send({
        "userId": 3,
        "sellerId": 2,
        "totalPrice": 100,
        "deliveryAddress": "rua",
        "deliveryNumber": 997811212,
        "products": [
          {
            "productId": 4,
            "quantity": 6
          },
          {
            "productId": 5,
            "quantity": 6
          },
          {
            "productId": 9,
            "quantity": 6
          }
        ]
      });

      expect(chaiHttpResponse.status).to.be.equal(401);
      expect(chaiHttpResponse.body.message).to.be.equal('Incomplete address');
    })
    it('2 - Caso a requisição NÂO tenha o formato esperado', async () => {
      chaiHttpResponse = await chai.request(app).post('/customer').send({
        "userId": 3,
        "sellerId": "e",
        "totalPrice": 100,
        "deliveryAddress": "Rua da Margura",
        "deliveryNumber": 997811212,
        "products": [
          {
            "productId": 4,
            "quantity": 6
          },
          {
            "productId": 5,
            "quantity": 6
          },
          {
            "productId": 9,
            "quantity": 6
          }
        ]
      });

      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body.message).to.be.equal('"sellerId" must be a number');
    })
    it('3 - Caso o vendedor e cliente sejam iguais', async () => {
      chaiHttpResponse = await chai.request(app).post('/customer').send({
        "userId": 3,
        "sellerId": 3,
        "totalPrice": 100,
        "deliveryAddress": "Rua da Margura",
        "deliveryNumber": 997811212,
        "products": [
          {
            "productId": 4,
            "quantity": 6
          },
          {
            "productId": 5,
            "quantity": 6
          },
          {
            "productId": 9,
            "quantity": 6
          }
        ]
      });

      expect(chaiHttpResponse.status).to.be.equal(409);
      expect(chaiHttpResponse.body.message).to.be.equal('Seller and customer cannot be the same');
    })
    it('4 - Caso os produtos vendidos não estejam cadastrados', async () => {
      chaiHttpResponse = await chai.request(app).post('/customer').send({
        "userId": 3,
        "sellerId": 2,
        "totalPrice": 100,
        "deliveryAddress": "Rua da Margura",
        "deliveryNumber": 997811212,
        "products": [
          {
            "productId": 4,
            "quantity": 6
          },
          {
            "productId": 25,
            "quantity": 6
          },
          {
            "productId": 9,
            "quantity": 6
          }
        ]
      });

      expect(chaiHttpResponse.status).to.be.equal(404);
      expect(chaiHttpResponse.body.message).to.be.equal('Products not found');
    })
    it('5 - Caso a requisição tenha o formato esperado', async () => {
      before(async () => {
        sinon.stub(Sales, 'create').resolves({ id: 1 });
        sinon.stub(SalesProducts, 'create').resolves();
      })
      chaiHttpResponse = await chai.request(app).post('/customer').send({
        "userId": 3,
        "sellerId": 2,
        "totalPrice": 100,
        "deliveryAddress": "Rua da Margura",
        "deliveryNumber": 997811212,
        "products": [
          {
            "productId": 4,
            "quantity": 6
          },
          {
            "productId": 5,
            "quantity": 6
          },
          {
            "productId": 9,
            "quantity": 6
          }
        ]
      });

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.have.property('saleId');
    })
  })
})
