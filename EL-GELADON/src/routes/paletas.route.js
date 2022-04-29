const express = require('express');
const swaggerUi = require('swagger-ui-express');
const route = express.Router();

//const route = require('express').Router();
const controllerPaletas = require('../controllers/paletas.controller');
const controllerCarrinho = require('../controllers/carrinho.controller');
const swaggerDocument = require('../../swagger.json');


const {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
} = require('../middlewares/paleta.middleware');

route.get('/all-paletas', controllerPaletas.findAllPaletasController);
route.get(
  '/one-paleta/:id',
  validId,
  controllerPaletas.findByIdPaletaController,
);
route.post(
  '/create-paleta',
  validObjectBody,
  controllerPaletas.createPaletaController,
);
route.put(
  '/update-paleta/:id',
  validId,
  validObjectBody,
  controllerPaletas.updatePaletaController,
);
route.delete(
  '/delete-paleta/:id',
  validId,
  controllerPaletas.deletePaletaController,
);

route.get('/all-carrinnho', controllerCarrinho.findAllCarrinhoController);
route.post(
  '/create-carrinho',
  validObjectBodyCarrinho,
  controllerCarrinho.createManyItemsCarrinhoController,
);
route.delete(
  '/finish-carrinho',
  controllerCarrinho.deleteAllItemsCarrinhoController,
);

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));
module.exports = route;
