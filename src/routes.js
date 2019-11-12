const express = require('express');
const routes = express.Router();

// added my controllers
const PastelController = require('./controllers/PastelController');

routes.get('/pastel', PastelController.index);
routes.post('/pastel', PastelController.store);
routes.get('/pastel/:id', PastelController.show);
routes.put('/pastel/:id', PastelController.update);
routes.delete('/pastel/:id', PastelController.destroy);

module.exports = routes;