const { expect } = require('chai');
const sinon = require('sinon');
const Products = require('../../../services/serviceProducts');
const Controller = require('../../../controllers/controllerProducts');

describe('Testa a rota get/products', () => {
    const response = {};
  const request = {};
  before(() => {
    request.body = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(Products, 'verifyProducts').resolves([]);
  });
  after(() => {
    Products.verifyProducts.restore();
  });
    it('verifica se retorna um status 200', async () => {
      const result = await Controller.findProducts(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    })
})

describe('Testa a rota post/products', () => {
  const response = {};
  const request = {};
before(() => {
  request.body = {};
  request.params = {};
  response.status = sinon.stub().returns(response);
  response.json = sinon.stub().returns();
  sinon.stub(Products, 'createProduct').resolves([]);
});
after(() => {
  Products.createProduct.restore();
});
  it('verifica se retorna um status 201', async () => {
    const result = await Controller.createProduct(request, response);
    expect(response.status.calledWith(201)).to.be.equal(true);
  })
})