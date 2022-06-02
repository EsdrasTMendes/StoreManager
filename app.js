const express = require('express');

const app = express();
const Products = require('./models/ProductsModel');
const Sales = require('./models/SalesModel');

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', async (_request, response) => {
const products = await Products.getAllProducts();
if (!products) response.status(401).json({ message: 'nenhum produto encontrado' });
response.status(200).json(products);
});

app.get('/sales', async (_request, response) => {
  const sales = await Sales.getAllSales();
  if (!sales) response.status(401).json({ message: 'nenhum produto encontrado' });
  response.status(200).json(sales);
  });
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
