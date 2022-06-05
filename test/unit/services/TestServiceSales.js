const {expect} = require('chai');
const sinon = require('sinon');
const Sales = require('../../../services/servicesSales')
const modelSales = require('../../../models/modelSales')
describe('Testa a função verifySales: ', () => {
  describe('Em caso de sucesso', () => {
    let executeSpy;
    before(() => {
      const executeReturn = [
          {
            "id": 1,
            "date": "2022-05-31T02:53:36.000Z"
          },
          {
            "id": 2,
            "date": "2022-05-31T02:53:36.000Z"
          }
      ]
      executeSpy = sinon.stub(modelSales, 'getAllSales').resolves(executeReturn);
    })
  
    after(() => {
      modelSales.getAllSales.restore();
    });

    it('verifica se existe um array no retorno', async () => {
      const sales = await Sales.verifySales();
      expect(sales).to.be.exist
      expect(sales).to.be.a('array');
    })
    it('verifica se o array não está vazio', async () => {
      const sales = await Sales.verifySales();
      expect(sales).not.empty
    })
    it('verifica se os objetos dentro do array contém a chave "id" e "data"', async () => {
      const sales = await Sales.verifySales();
      const keys = Object.keys(sales[0]); 
      expect(keys.length === 2).to.be.true
      expect(keys).to.include('id');
      expect(keys).to.include('date');
      expect(keys).to.not.include('name');
    })
  })

  describe('Em caso de falha', () => {
    before(() => {
      const executeReturn = [
          {
            error: {
              code: 404,
              message: 'nenhuma venda encontrada',
            }
          }
      ]
      executeSpy = sinon.stub(modelSales, 'getAllSales').resolves(executeReturn);
    })

    after(() => {
      modelSales.getAllSales.restore();
    });

    it('verifica se retorna um objeto de erro', async () => {
      const sales = await Sales.verifySales();
      expect(sales[0]).to.be.exist;
      expect(sales[0].error).to.be.a('object');
    })
    it('verifica se o objeto possui duas as chaves code e message', async () => {
      const sales = await Sales.verifySales();
      const keys = Object.keys(sales[0].error)
      expect(keys).to.include('code');
      expect(keys).to.include('message');
    })
    it('verifica se as chaves tem os valores: code: "404" e message: "nenhuma venda encontrada"', async () => {
      const sales = await Sales.verifySales();
      const code = sales[0].error.code;
      const message = sales[0].error.message;
      expect(code).to.equal(404);
      expect(code).to.not.equal(401);
      expect(message).to.equal('nenhuma venda encontrada');
      expect(message).to.not.equal('nenhuma venda encontrada!!!!');
    })
  })
})