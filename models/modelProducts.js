const connection = require('./connection');

const getAllProducts = async () => {
const [products] = await connection.execute(
  'SELECT id, name, quantity FROM StoreManager.products',
);
return products;
};

const getProductById = async (id) => {
  const [products] = await connection.execute(
    'SELECT id, name, quantity FROM StoreManager.products WHERE id = ?', [id],
  );
  return products;
};

module.exports = {
  getAllProducts,
  getProductById,
};