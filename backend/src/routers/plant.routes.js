const { Router } = require('express');
const plantController = require('../controllers/plant.controller');

const plantRouter = new Router();

plantRouter
  .route('/')
  .post(plantController.createNewPlant)
  .get(plantController.getAllPlants);

plantRouter
  .route('/:plantId')
  .get(plantController.getPlantById)
  .put(plantController.updatePlantById)
  .delete(plantController.deletePlantById);

module.exports = plantRouter;
