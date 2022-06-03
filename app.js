const express = require('express');
const bodyParser = require('body-parser');

const products = require('./controllers/controllerProducts');
const sales = require('./controllers/controllerSales');
const salesMiddleware = require('./middlewares/salesMiddlewares');
const productsMiddleware = require('./middlewares/productsMiddleware');

const app = express();
app.use(bodyParser.json());
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
app.get('/products', products.findProducts);
app.get('/products/:id', products.findProductById);
app.post('/products', productsMiddleware, products.createProduct);
app.put('/products/:id', products.updateProduct);
app.delete('/products/:id', products.deleteProduct);

// sales
app.get('/sales', sales.findSales);
app.get('/sales/:id', sales.findSaleById);
app.post('/sales', salesMiddleware, sales.registerSalesProducts);
app.put('/sales/:id', salesMiddleware, sales.updateSale);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
