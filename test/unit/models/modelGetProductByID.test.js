// const {expect} = require('chai');
// const connection = require('../../../models/connection');

// describe('Testa a função getProductById', () => {
//   describe('Em caso de sucesso,', () => {
//     let executeSpy;
//     let mock;
//     before(() => {
//       const executeReturn = [
//         {
//           "id": 1,
//           "name": "produto A",
//           "quantity": 10
//         }
//       ];
//       mock = executeReturn;
//       executeSpy = sinon.stub(connection, 'execute').resolves(executeReturn)
//     });
//     const returnProducts = await sales.getProductById(1);
//     expect(returnProducts).to.be.equal(mock);
//   });

//   describe('Em caso de falha', () => {
//     let executeSpy;
//     let mock;
//     before(() => {
//       const executeReturn = [
//         [
//           { "message": "Product not found" }
//         ]
//       ];
//       mock = executeReturn;
//       executeSpy = sinon.stub(connection, 'execute').resolves(executeReturn)
//     });
//       const returnProducts = await sales.getProductById(0);
//       expect(returnProducts).to.be.equals(mock);
//   });
// })