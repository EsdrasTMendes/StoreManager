const Products = require('../services/serviceProducts');

const findProducts = async (_req, res) => {
  const allProducts = await Products.verifyProducts();
  res.status(200).json(allProducts);
};

module.exports = {
  findProducts,
};