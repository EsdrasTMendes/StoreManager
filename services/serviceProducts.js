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
    console.log('SERVICE Já existe, doidão', productAlreadyExist);
    return { message: 'Product already exists' };
  }
  const [product] = await Products.createProducts(name, quantity);
  console.log(product);
  return product;
};

module.exports = {
  verifyProducts,
  verifygetProductById,
  createProduct,
};