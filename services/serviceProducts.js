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

module.exports = {
  verifyProducts,
};