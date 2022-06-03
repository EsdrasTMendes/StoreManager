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

const getProductByName = async (name) => {
  const [products] = await connection.execute(
    'SELECT id, name, quantity FROM StoreManager.products Where name = ?', [name],
  );
  return products;
};

const createProducts = async (name, quantity) => {
  const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)';
  const [createdProduct] = await connection.execute(query, [name, quantity]);
  return getProductById(createdProduct.insertId);
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductByName,
  createProducts,
};