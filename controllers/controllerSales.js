const Sales = require('../services/servicesSales');

const findSales = async (_req, res) => {
  const allSales = await Sales.verifySales();
  res.status(200).json(allSales);
};

module.exports = {
  findSales,
};