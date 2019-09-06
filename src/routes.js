const express = require("express");
const routes = express.Router();

const RamalController = require("./controllers/RamalController");

routes.get('/ramais', RamalController.index );
routes.get('/ramais/:id', RamalController.show );
routes.post('/ramais', RamalController.store );
routes.put('/ramais/:id', RamalController.update );
routes.delete("/products/:id", RamalController.destroy );
module.exports = routes;

