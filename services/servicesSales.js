const Sales = require('../models/modelSales');

const verifySales = async () => {
  const allSalesReturn = Sales.getAllSales();
  if (!allSalesReturn) {
    return {
      error: {
        code: 404,
        message: 'nenhuma venda encontrada',
      },
    };
  }
  return allSalesReturn;
};

module.exports = {
  verifySales,
};