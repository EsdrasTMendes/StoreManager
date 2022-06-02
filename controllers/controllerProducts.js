const Products = require('../services/serviceProducts');

const findProducts = async (_req, res) => {
  const allProducts = await Products.verifyProducts();
  res.status(200).json(allProducts);
};
const findProductById = async (req, res) => {
  const { id } = req.params;
  const result = await Products.verifygetProductById(id);
  res.status(200).json(result);
};
module.exports = {
  findProducts,
  findProductById,
};