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
    // Refatorar 
  SalesProducts.map(({ productId, quantity }) => connection
    .execute(query, [id, productId, quantity]));
    return {
      id: 1, 
      itemsSold: SalesProducts,
    };
};

const uptadeSales = async (saleId, productId, quantity) => {
  console.log('Model', saleId, productId, saleId);
  const query = `UPDATE StoreManager
    .sales_products AS sp INNER JOIN StoreManager.sales AS s 
    ON sp.sale_id = s.id 
    SET product_id = ?, quantity = ?
    WHERE sp.sale_id = ?`;
    await connection.execute(query, [productId, quantity, saleId]);
    return {
      saleId, 
      itemUpdated: [
        {
          productId,
          quantity,
        },
      ],
    };
};

module.exports = {
  getAllSales,
  getSaleById,
  registerSalesProducts,
  uptadeSales,
};