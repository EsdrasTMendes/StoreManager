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
  return product[0];
};

const createProduct = async (name, quantity) => {
  const productAlreadyExist = await Products.getProductByName(name);
  
  if (productAlreadyExist.length > 0) {
    return { message: 'Product already exists' };
  }
  const [product] = await Products.createProducts(name, quantity);
  return product;
};

const updateProduct = async (id, name, quantity) => {
  const productAlreadyExist = await Products.getProductById(id);
  if (productAlreadyExist.length === 0) {
    return { message: 'Product not found' };
  }
  const productReturn = await Products.updateProduct(id, name, quantity);
  return productReturn;
};

const deleteProduct = async (id) => {
  const productAlreadyExist = await Products.getProductById(id);
  if (productAlreadyExist.length > 0) {
    Products.deleteProduct(id);
    return {};
  }
  return { message: 'Product not found' };
};

module.exports = {
  verifyProducts,
  verifygetProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};