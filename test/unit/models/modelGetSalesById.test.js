// const {expect} = require('chai');
// const connection = require('../../../models/connection');

// describe('Testa a função getSalesById', () => {
//   describe('Em caso de sucesso,', () => {
//     let executeSpy;
//     let mock;
//     before(() => {
//       const executeReturn = [
//         [
//           {
//             "date": "2021-09-09T04:54:29.000Z",
//             "productId": 1,
//             "quantity": 2
//           },
//         ]
//       ];
//       mock = executeReturn;
//       executeSpy = sinon.stub(connection, 'execute').resolves(executeReturn)
//     });
//     const returnSales = await sales.getSalesById(1);
//     expect(returnSales).to.be.equal(mock);
//   });

//   describe('Em caso de falha', () => {
//     let executeSpy;
//     let mock;
//     before(() => {
//       const executeReturn = [
//         [
//           { "message": "Sale not found" }
//         ]
//       ];
//       mock = executeReturn;
//       executeSpy = sinon.stub(connection, 'execute').resolves(executeReturn)
//     });
//       const returnSales = await sales.getSalesById(5);
//       expect(returnSales).to.be.equals(mock);
//   });
// })