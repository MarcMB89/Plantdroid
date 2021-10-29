const Plant = require('../models/plant.model');

async function createNewPlant({ body }, response) {
  try {
    const newPlant = await Plant.create(body);
    response.json(newPlant);
  } catch (error) {
    response.status(500);
    response.send(error);
  }
}

async function getAllPlants({ query }, response) {
  try {
    const allPlants = await Plant.find(query);
    response.json(allPlants);
  } catch (error) {
    response.status(500);
    response.send(error);
  }
}

async function getPlantById({ params: { plantId } }, response) {
  try {
    const showPlantById = await Plant.findById(plantId);
    response.json(showPlantById);
  } catch (error) {
    response.status(418);
    response.send(error);
  }
}

async function updatePlantById({ body, params: { plantId } }, response) {
  try {
    const updatedPlant = await Plant.findByIdAndUpdate(
      plantId,
      body,
      {
        new: true,
        useFindAndModify: false
      }
    );
    response.json(updatedPlant);
  } catch (error) {
    response.status(418);
    response.send(error);
  }
}

async function deletePlantById({ params: { plantId } }, response) {
  try {
    await Plant.findByIdAndDelete(plantId);
    response.send('Plant deleted');
  } catch (error) {
    response.status(404);
    response.send(error);
  }
}

module.exports = {
  createNewPlant,
  getAllPlants,
  getPlantById,
  updatePlantById,
  deletePlantById
};
