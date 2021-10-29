const PlantController = require('./plant.controller');

const Plant = require('../models/plant.model');

jest.mock('../models/plant.model');

describe('Plant Controller', () => {
  let request;
  let response;

  beforeEach(() => {
    response = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
  });

  describe('Given a createNewPlant function', () => {
    beforeEach(() => {
      request = {
        body: {}
      };
    });

    describe('When it is invoked', () => {
      describe('And it resolves', () => {
        test('Then it should call response.json', async () => {
          Plant.create.mockResolvedValue({ common_name: 'Pepe la planta' });

          await PlantController.createNewPlant(request, response);

          expect(response.json).toHaveBeenCalled();
        });
      });
      describe('And it rejects', () => {
        test('Then res.status should return error 500', async () => {
          Plant.create.mockRejectedValue();

          await PlantController.createNewPlant(request, response);

          expect(response.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a getAllPlants function', () => {
    beforeEach(() => {
      request = {
        query: {}
      };
    });

    describe('When it is invoked', () => {
      describe('And it resolves', () => {
        test('Then it should call response.json', async () => {
          Plant.find.mockResolvedValue({ common_name: 'Pepe la planta' });

          await PlantController.getAllPlants(request, response);

          expect(response.json).toHaveBeenCalled();
        });
      });
      describe('And it rejects', () => {
        test('Then res.status should return error 500', async () => {
          Plant.find.mockRejectedValue();

          await PlantController.getAllPlants(request, response);

          expect(response.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a getPlantById function', () => {
    beforeEach(() => {
      request = {
        params: { plantId: 'dfgdfw3sdfsd' }
      };
    });

    describe('When it is invoked', () => {
      describe('And it resolves', () => {
        test('Then it should call response.json', async () => {
          Plant.findById.mockResolvedValue({ common_name: 'Pepe la planta' });

          await PlantController.getPlantById(request, response);

          expect(response.json).toHaveBeenCalled();
        });
      });
      describe('And it rejects', () => {
        test('Then res.status should return error 418', async () => {
          Plant.findById.mockRejectedValue();

          await PlantController.getPlantById(request, response);

          expect(response.status).toHaveBeenCalledWith(418);
        });
      });
    });
  });

  describe('Given a updatePlantById function', () => {
    beforeEach(() => {
      request = {
        body: {},
        params: { plantId: 'dfdfdsfsf' }
      };
    });

    describe('When it is invoked', () => {
      describe('And it resolves', () => {
        test('Then it should call response.json', async () => {
          Plant.findByIdAndUpdate.mockResolvedValue({ common_name: 'Pepe la planta' });

          await PlantController.updatePlantById(request, response);

          expect(response.json).toHaveBeenCalled();
        });
      });
      describe('And it rejects', () => {
        test('Then res.status should return error 418', async () => {
          Plant.findByIdAndUpdate.mockRejectedValue();

          await PlantController.updatePlantById(request, response);

          expect(response.status).toHaveBeenCalledWith(418);
        });
      });
    });
  });

  describe('Given a deletePlantById function', () => {
    beforeEach(() => {
      request = {
        params: { plantId: 'dfdfdsfsf' },
        response: jest.fn()
      };
    });

    describe('When it is invoked', () => {
      describe('And it resolves', () => {
        test('Then it should call response.json', async () => {
          Plant.findByIdAndDelete.mockResolvedValue();

          await PlantController.deletePlantById(request, response);

          expect(response.send).toHaveBeenCalledWith('Plant deleted');
        });
      });
      describe('And it rejects', () => {
        test('Then res.status should return error 404', async () => {
          Plant.findByIdAndDelete.mockRejectedValue();

          await PlantController.deletePlantById(request, response);

          expect(response.status).toHaveBeenCalledWith(404);
        });
      });
    });
  });
});
