const express = require('express');
const routes = express.Router();

// added my controllers
const PastelController = require('./controllers/PastelController');

routes.get('/pastel', PastelController.index);
routes.post('/pastel', PastelController.store);
routes.put('/pastel', PastelController.update);

module.exports = routes;