const {expect} = require('chai');
const sinon = require('sinon');
const Products = require('../../../services/serviceProducts')
const modelProducts = require('../../../models/modelProducts')
describe('Testa a função verifyProducts: ', () => {
  describe('Em caso de sucesso', () => {
    let executeSpy;
    before(() => {
      const executeReturn = [
        {
          "id": 1,
          "name": "Martelo de Thor",
          "quantity": 10
        },
        {
          "id": 2,
          "name": "Traje de encolhimento",
          "quantity": 20
        },
        {
          "id": 3,
          "name": "Escudo do Capitão América",
          "quantity": 30
        }
      ]
      executeSpy = sinon.stub(modelProducts, 'getAllProducts').resolves(executeReturn);
    })
  
    after(() => {
      modelProducts.getAllProducts.restore();
    });

    it('verifica se existe um array no retorno', async () => {
      const products = await Products.verifyProducts();
      expect(executeSpy.callCount).to.be.equal(1);
      expect(products).to.be.exist;
      expect(products).to.be.a('array');
    })
    it('verifica se o array não está vazio', async () => {
      const products = await Products.verifyProducts();
      expect(executeSpy.callCount).to.be.equal(2);
      expect(products).not.empty
    })
    it('verifica se os objetos dentro do array contém as chaves "id", "name" e "quantity "', async () => {
      const products = await Products.verifyProducts();
      expect(executeSpy.callCount).to.be.equal(3);
      const keys = Object.keys(products[0]); 
      expect(keys.length === 3).to.be.true
      expect(keys).to.include('id');
      expect(keys).to.include('quantity');
      expect(keys).to.include('name')
      expect(keys).to.not.include('date');
    })
  })

  describe('Em caso de falha', () => {
    before(() => {
      const executeReturn = [
          {
            error: {
              code: 404,
              message: 'nenhum produto encontrado',
            }
          }
      ]
      executeSpy = sinon.stub(modelProducts, 'getAllProducts').resolves(executeReturn);
    })

    after(() => {
      modelProducts.getAllProducts.restore();
    });

    it('verifica se retorna um objeto de erro', async () => {
      const products = await Products.verifyProducts();
      expect(products).to.be.exist;
      expect(products).to.be.a('array');
      expect(products[0]).to.be.exist;
      expect(products[0].error).to.be.a('object');
    })
    it('verifica se o objeto possui duas as chaves code e message', async () => {
      const products = await Products.verifyProducts();
      const error = Object.keys(products[0]);
      expect(error[0]).to.equals('error');
      const keys = Object.keys(products[0].error)
      expect(keys).to.include('code');
      expect(keys).to.include('message');
    })
    it('verifica se as chaves tem os valores: code: "404" e message: "nenhum produto encontrado"', async () => {
      const products = await Products.verifyProducts();
      const code = products[0].error.code;
      const message = products[0].error.message;
      expect(code).to.equal(404);
      expect(code).to.not.equal(401);
      expect(message).to.equal('nenhum produto encontrado');
      expect(message).to.not.equal('nenhum produto encontrado!!!!');
    })
  })
})