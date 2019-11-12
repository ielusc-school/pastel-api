const express = require('express');
const routes = express.Router();

// added my controllers
const PastelController = require('./controllers/PastelController');
const ClienteController = require('./controllers/ClienteController');
const PedidoController = require('./controllers/PedidoController');

routes.get('/pastel', PastelController.index);
routes.post('/pastel', PastelController.store);
routes.get('/pastel/:id', PastelController.show);
routes.put('/pastel/:id', PastelController.update);
routes.delete('/pastel/:id', PastelController.destroy);

// added routes to customers

routes.get('/cliente', ClienteController.index);
routes.post('/cliente', ClienteController.store);
routes.get('/cliente/:id', ClienteController.show);
routes.put('/cliente/:id', ClienteController.update);
routes.delete('/cliente/:id', ClienteController.destroy);


// added routes to order

routes.get('/pedido', PedidoController.index);
routes.post('/pedido', PedidoController.store);
routes.get('/pedido/:id', PedidoController.show);
routes.put('/pedido/:id', PedidoController.update);
routes.delete('/pedido/:id', PedidoController.destroy);

module.exports = routes;