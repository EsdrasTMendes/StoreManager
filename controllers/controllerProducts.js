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
    return res.status(409).json(product);
  }
  res.status(201).json(product);
};

const updateProduct = async (req, res) => {
const { id } = req.params;
const { name, quantity } = req.body;
const product = await Products.updateProduct(id, name, quantity);
if (product.message) {
  return res.status(404).json(product);
}
res.status(200).json(product);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Products.deleteProduct(id);
  if (product.message) {
    return res.status(404).json(product);
  }
  return res.status(204).json();
};

module.exports = {
  findProducts,
  findProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};