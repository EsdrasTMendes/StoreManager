const { expect } = require('chai');
const sinon = require('sinon');
const connection = require ('../../../models/connection');
const { getAllSales } = require('../../../models/modelSales');

describe('Testa a função getAllSales', () => {
  let executeSpy;
  before(() => {
    const executeReturn = [
      [
        {
          "id": 1,
          "date": "2022-05-31T02:53:36.000Z"
        },
        {
          "id": 2,
          "date": "2022-05-31T02:53:36.000Z"
        }
      ]
    ]
    executeSpy = sinon.stub(connection, 'execute').resolves(executeReturn);
  })
  
  after(() => {
    connection.execute.restore();
  })

  describe('quando o retorno é feito com sucesso', () => {
    it('retorna um objeto com todos as sales', async () => {
      const response = await getAllSales();
      // console.log(response.map((object) => Object.keys(object)));
      expect(response.length > 0).to.be.true;
      expect(executeSpy.callCount).to.be.equal(1); 
      const query = executeSpy.getCalls()[0].firstArg.toUpperCase();
      // console.log(query);
      expect(query).to.includes("ID");
      expect(query).to.includes("DATE");
    });
  })
})
