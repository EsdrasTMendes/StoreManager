const express = require('express');

const app = express();
const Products = require('./models/ProductsModel');

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', async (_request, response) => {
const products = await Products.getAll();
if (!products) response.status(401).json({ message: 'nenhum produto encontrado' });
response.status(200).json(products);
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
