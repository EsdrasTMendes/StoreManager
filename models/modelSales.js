const connection = require('./connection');

const getAllSales = async () => {
const [sales] = await connection.execute(
  `SELECT sp.sale_id AS saleId, s.date , sp.product_id AS productId, sp.quantity FROM 
  StoreManager.sales_products sp
  INNER JOIN StoreManager.sales s
  ON sp.sale_id = s.id`,
);
return sales;
};

const getSaleById = async (id) => {
  const [Sale] = await connection.execute(
    `SELECT sp.sale_id ,s.date , sp.product_id AS productId, sp.quantity FROM 
    StoreManager.sales_products sp
    INNER JOIN StoreManager.sales s
    ON sp.sale_id = s.id
    WHERE s.id = ?`, [id],
  );
  return Sale;
};

module.exports = {
  getAllSales,
  getSaleById,
};