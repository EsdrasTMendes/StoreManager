// const { expect } = require('chai');
// const sinon = require('sinon');
// const connection = require ('../../../models/connection');
// const { getAllProducts } = require('../../../models/modelProducts');

// describe('Testa a função getAllProducts', () => {
//   let executeSpy;
//   before(() => {
//     const executeReturn = [
//       [
//         {
//           "id": 1,
//           "name": "Martelo de Thor",
//           "quantity": 10
//         },
//         {
//           "id": 2,
//           "name": "Traje de encolhimento",
//           "quantity": 20
//         },
//         {
//           "id": 3,
//           "name": "Escudo do Capitão América",
//           "quantity": 30
//         }
//       ]
//     ]
//     executeSpy = sinon.stub(connection, 'execute').resolves(executeReturn);
//   })
  
//   after(() => {
//     connection.execute.restore();
//   })

//   describe('quando o retorno é feito com sucesso', () => {
//     it('retorna um objeto com todos os products', async () => {
//       const response = await getAllProducts();
//       expect(response.length > 0).to.be.true;
//       expect(executeSpy.callCount).to.be.equal(1); 
//       const query = executeSpy.getCalls()[0].firstArg.toUpperCase();
//       expect(query).to.contains("SELECT", "ID", "NAME");
//     });
//   })
// })
