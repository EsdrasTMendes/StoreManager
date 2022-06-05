const { expect } = require('chai');
const sinon = require('sinon');
const connection = require ('../../../models/connection');
const {
  getAllSales,
  getSaleById,
  registerSalesProducts,
  uptadeSales,
} = require('../../../models/modelSales');

describe('Testa a função getAllSales', () => {
  let executeSpy;
  before(() => {
    const executeReturn = [
      [
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
    ]
    executeSpy = sinon.stub(connection, 'execute').resolves(executeReturn);
  })
  
  after(() => {
    connection.execute.restore();
  })

  describe('quando o retorno é feito com sucesso', () => {
    it('retorna um objeto com todos os products', async () => {
      const response = await getAllSales();
      expect(response.length > 0).to.be.true;
      expect(executeSpy.callCount).to.be.equal(1); 
      const query = executeSpy.getCalls()[0].firstArg.toUpperCase();
      expect(query).to.contains("SELECT", "ID", "NAME");
    });
  })
})


describe('Testa se a função getSaleById', () => {
  let executeSpy;
  before (() => {
    const executeReturn = [
      {
        "id": 1,
        "name": "produto A",
        "quantity": 10
      }
    ] 
    executeSpy = sinon.stub(connection, 'execute').resolves(executeReturn);
  })
    after(() => {
      connection.execute.restore();
    })
  
    describe('Retorna um array com um objeto com as chaves: id, name, quantity', () => {
      it('Testa o retorno da função', async () => {
        const result = await getSaleById(1);
        const query = executeSpy.getCalls()[0].firstArg.toUpperCase();
        const keys = Object.keys(result);
        expect(result).to.be.a('object');
        expect(keys.length === 3).to.be.true;
        expect(keys).includes('id' && 'name' && 'quantity');
        expect(query).includes('ID'&& 'NAME' && 'QUANTITY');
      })
      
    }) 
  });


    describe('Testa se a função registerSalesProducts', () => {
      let executeSpy;
      before (() => {
        const executeReturn = [
          {
            "id": 1,
            "name": "produto",
            "quantity": 10
          }
        ] 
        executeSpy = sinon.stub(connection, 'execute').resolves(executeReturn);
      })
        after(() => {
          connection.execute.restore();
        })
      
        describe('Retorna um array com um objeto com as chaves: id, name, quantity', () => {
          it('Testa o retorno da função', async () => {
            const result = await registerSalesProducts([{productId: 1, quantity:10}]);
            const query = executeSpy.getCalls()[0].firstArg.toUpperCase();
            const keys = Object.keys(result);
            expect(result).to.be.a('object');
            expect(keys.length === 2).to.be.true;
            expect(keys).includes('id' && 'itemsSold');
            expect(query).includes('DATE');
          })
        }) 
      });

      describe('Testa se a função uptadeSales', () => {
        let executeSpy;
        before (() => {
          const executeReturn = [
            {
              "id": 1,
              "name": "produto",
              "quantity": 10
            }
          ] 
          executeSpy = sinon.stub(connection, 'execute').resolves(executeReturn);
        })
          after(() => {
            connection.execute.restore();
          })
          describe('Retorna um array com um objeto com as chaves: id, name, quantity', () => {
            it('Testa o retorno da função', async () => {
              const result = await uptadeSales([{productId: 1, quantity:10}]);
              const query = executeSpy.getCalls()[0].firstArg.toUpperCase();
              const keys = Object.keys(result);
              expect(result).to.be.a('object');
              expect(keys).includes('id' && 'itemUpdated');
              expect(keys.length === 2).to.be.true;
              expect(query).includes('PRODUCT_ID' && 'QUANTITY' && 'SALE_ID');
            })
          }) 
        });
