const Products = require('../models/modelProducts');

const verifyProducts = async () => {
  const allProductsReturn = await Products.getAllProducts();
  if (!allProductsReturn) {
    return {
      error: {
        code: 404,
        message: 'nenhum produto encontrado',
      },
    };
  }
  return allProductsReturn;
};

const verifygetProductById = async (id) => {
  const product = await Products.getProductById(id);
  if (product.length === 0) {
    return { message: 'Product not found' };
  }
  return product;
};

module.exports = {
  verifyProducts,
  verifygetProductById,
};