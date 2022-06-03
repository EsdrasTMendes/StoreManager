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
    `SELECT s.date , sp.product_id AS productId, sp.quantity FROM 
    StoreManager.sales_products sp
    INNER JOIN StoreManager.sales s
    ON sp.sale_id = s.id
    WHERE s.id = ?`, [id],
  );
  console.log('MODEL', Sale);
  return Sale;
};

const registerSale = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW()) ';
  const [saleReturn] = await connection.execute(query);
  return saleReturn.insertId;
};

const registerSalesProducts = async (SalesProducts) => {
  const id = await registerSale();
  const query = `INSERT INTO StoreManager
    .sales_products (sale_id ,product_id, quantity) VALUES (?, ?, ?)`;
  SalesProducts.map(({ productId, quantity }) => connection
    .execute(query, [id, productId, quantity]));
    return {
      id: 1, 
      itemsSold: SalesProducts,
    };
};

module.exports = {
  getAllSales,
  getSaleById,
  registerSalesProducts,
};