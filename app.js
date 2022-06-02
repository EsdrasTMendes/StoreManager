const express = require('express');

const app = express();
const products = require('./controllers/controllerProducts');
const sales = require('./controllers/controllerSales');

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', products.findProducts);
app.get('/products/:id', products.findProductById);

app.get('/sales', sales.findSales);
app.get('/sales/:id', sales.findSaleById);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
