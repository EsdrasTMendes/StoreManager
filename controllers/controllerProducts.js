const Products = require('../services/serviceProducts');

const findProducts = async (_req, res) => {
  const allProducts = await Products.verifyProducts();
  res.status(200).json(allProducts);
};
const findProductById = async (req, res) => {
  const { id } = req.params;
  const result = await Products.verifygetProductById(id);
  if (result.message) {
    return res.status(404).json(result);
  }
  return res.status(200).json(result);
};
const createProduct = async (req, res) => {
  const { name, quantity } = req.body;
  const product = await Products.createProduct(name, quantity);
  if (product.message) {
    console.log('CONTROLER ERRROR', product);
    return res.status(409).json(product);
  }
  console.log('CONTROLER SUCESS', product);
  res.status(201).json(product);
};
module.exports = {
  findProducts,
  findProductById,
  createProduct,
};