const { expect } = require('chai');
const sinon = require('sinon');
const Sales = require('../../../services/servicesSales');
const Controller = require('../../../controllers/controllerSales');

describe('Testa a rota get/sales', () => {
    const response = {};
  const request = {};
  before(() => {
    request.body = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(Sales, 'verifySales').resolves([]);
  });
  after(() => {
    Sales.verifySales.restore();
  });
    it('verifica se retorna um status 200', async () => {
      const result = await Controller.findSales(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    })
});

describe('Testa a rota post/sales', () => {
  const response = {};
const request = {};
before(() => {
  request.body = {};
  response.status = sinon.stub().returns(response);
  response.json = sinon.stub().returns();
  sinon.stub(Sales, 'registerSalesProducts').resolves([]);
});
after(() => {
  Sales.registerSalesProducts.restore();
});
  it('verifica se retorna um status 200', async () => {
    const result = await Controller.registerSalesProducts(request, response);
    expect(response.status.calledWith(201)).to.be.equal(true);
  })
})