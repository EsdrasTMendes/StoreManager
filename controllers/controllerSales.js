const Sales = require('../services/servicesSales');

const findSales = async (_req, res) => {
  const allSales = await Sales.verifySales();
  res.status(200).json(allSales);
};

const findSaleById = async (req, res) => {
  const { id } = req.params;
  const result = await Sales.verifygetSaleById(id);
  res.status(200).json(result);
};

module.exports = {
  findSales,
  findSaleById,
};