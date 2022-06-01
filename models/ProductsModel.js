// Renomeie esse arquivo
const connection = require('./connection');

const getAllProducts = async () => {
const [products] = await connection.execute(
  'SELECT id, name, quantity FROM StoreManager.products',
);
return products;
};

module.exports = {
  getAllProducts,
};