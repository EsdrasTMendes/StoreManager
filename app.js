const express = require('express');

const app = express();
const products = require('./controllers/controllerProducts');
const sales = require('./controllers/controllerSales');
const salesMiddleware = require('./middlewares/salesMiddlewares');
const productsMiddleware = require('./middlewares/productsMiddleware');

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', products.findProducts);
app.get('/products/:id', products.findProductById);
app.post('/products', productsMiddleware, (_req, _res) => {
  console.log('TESTE');
});
app.get('/sales', sales.findSales);
app.get('/sales/:id', sales.findSaleById);
app.post('/sales', salesMiddleware, (_req, _res) => {
  console.log('TESTE sales');
});
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
