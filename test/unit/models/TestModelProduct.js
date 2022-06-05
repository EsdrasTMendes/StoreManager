const { expect } = require('chai');
const sinon = require('sinon');
const connection = require ('../../../models/connection');
const {
  getAllProducts,
  getProductById,
  getProductByName,
  createProducts,
  updateProduct,
  deleteProduct,
} = require('../../../models/modelProducts');

describe('Testa a função getAllProducts', () => {
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
      const response = await getAllProducts();
      expect(response.length > 0).to.be.true;
      expect(executeSpy.callCount).to.be.equal(1); 
      const query = executeSpy.getCalls()[0].firstArg.toUpperCase();
      expect(query).to.contains("SELECT", "ID", "NAME");
    });
  })
})


describe('Testa se a função getProductsById', () => {
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
        const result = await getProductById(1);
        const query = executeSpy.getCalls()[0].firstArg.toUpperCase();
        const keys = Object.keys(result);
        expect(result).to.be.a('object');
        expect(keys.length === 3).to.be.true;
        expect(keys).includes('id' && 'name' && 'quantity');
        expect(query).includes('ID'&& 'NAME' && 'QUANTITY');
      })
      
    }) 
  });

  describe('Testa se a função getProductsByName', () => {
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
          const result = await getProductByName('produto');
          const query = executeSpy.getCalls()[0].firstArg.toUpperCase();
          const keys = Object.keys(result);
          expect(result).to.be.a('object');
          expect(keys.length === 3).to.be.true;
          expect(keys).includes('id' && 'name' && 'quantity');
          expect(query).includes('ID'&& 'NAME' && 'QUANTITY');
        })
        
      }) 
    });

    describe('Testa se a função createProducts', () => {
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
            const result = await createProducts('exemplo', 10);
            const query = executeSpy.getCalls()[0].firstArg.toUpperCase();
            const keys = Object.keys(result);
            expect(result).to.be.a('object');
            expect(keys.length === 3).to.be.true;
            expect(keys).includes('id' && 'name' && 'quantity');
            expect(query).includes('NAME' && 'QUANTITY');
          })
        }) 
      });

      describe('Testa se a função updateProduct', () => {
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
              const result = await updateProduct('exemplo', 10);
              const query = executeSpy.getCalls()[0].firstArg.toUpperCase();
              const keys = Object.keys(result);
              expect(result).to.be.a('object');
              expect(keys.length === 3).to.be.true;
              expect(keys).includes('id' && 'name' && 'quantity');
              expect(query).includes('NAME' && 'QUANTITY');
            })
          }) 
        });

        describe('Testa se a função deleteProduct', () => {
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
            describe('Deleta um produto quando passamos um id específico', () => {
              it('Testa o retorno da função', async () => {
                const result = await deleteProduct(1);
                const query = executeSpy.getCalls()[0].firstArg.toUpperCase();
                const keys = Object.keys(result);
                expect(result).to.be.a('object');
                expect(keys.length === 0).to.be.true;
                expect(query).includes('ID');
              })
            }) 
          });
