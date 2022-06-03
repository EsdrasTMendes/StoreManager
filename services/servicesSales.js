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

const verifygetSaleById = async (id) => {
  const sale = await Sales.getSaleById(id);
  if (sale.length === 0) {
    return { message: 'Sale not found' };
  }
  return sale;
};

const registerSalesProducts = async (salesArray) => {
  const sale = await Sales.registerSalesProducts(salesArray);
  return sale;
};

const updateSale = async (saleId, productId, quantity) => {
  const saleUpdate = await Sales.uptadeSales(saleId, productId, quantity);
  // console.log('service', saleUpdate);
  return saleUpdate;
};

module.exports = {
  verifySales,
  verifygetSaleById,
  registerSalesProducts,
  updateSale,
};