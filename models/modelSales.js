const connection = require('./connection');

const getAllSales = async () => {
const [sales] = await connection.execute(
  'SELECT id, date FROM StoreManager.sales',
);
return sales;
};

module.exports = {
  getAllSales,
};