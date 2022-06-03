const Sales = require('../services/servicesSales');

const findSales = async (_req, res) => {
  const allSales = await Sales.verifySales();
  res.status(200).json(allSales);
};

const findSaleById = async (req, res) => {
  const { id } = req.params;
  const result = await Sales.verifygetSaleById(id);
  if (result.message) {
    return res.status(404).json(result);
  }
  return res.status(200).json(result);
};

const registerSalesProducts = async (req, res) => {
  const sales = req.body;
  const result = await Sales.registerSalesProducts(sales);
  return res.status(201).json(result);
};

module.exports = {
  findSales,
  findSaleById,
  registerSalesProducts,
};