const UserController = require('./user.controller');

const User = require('../models/user.model');

jest.mock('../models/user.model');

describe('User Controller', () => {
  let request;
  let response;

  beforeEach(() => {
    response = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
  });

  describe('Given a createNewUser function', () => {
    beforeEach(() => {
      request = {
        body: {
          picture: { type: 'url.false.net', default: 'http://placehold.it/32x32' },
          user_name: 'Actor secundario Bob',
          email: 'emailfalso123@false.com',
          password: '12345'
        }
      };
    });

    describe('When it is invoked', () => {
      describe('And it resolves', () => {
        test('Then it should call response.json', async () => {
          User.create.mockResolvedValue({ user_name: 'Pepe' });

          await UserController.createNewUser(request, response);

          expect(response.json).toHaveBeenCalled();
        });
      });
      describe('And it rejects', () => {
        test('Then res.status should return error 500', async () => {
          User.create.mockRejectedValue();

          await UserController.createNewUser(request, response);

          expect(response.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a getAllUsers function', () => {
    beforeEach(() => {
      request = {
        query: {}
      };
    });

    describe('When it is invoked', () => {
      describe('And it resolves', () => {
        test('Then it should call response.json', async () => {
          User.create.mockResolvedValue({ user_name: 'Pepe' });

          await UserController.getAllUsers(request, response);

          expect(response.json).toHaveBeenCalled();
        });
      });
      describe('And it rejects', () => {
        test('Then res.status should return error 500', async () => {
          User.find.mockRejectedValue();

          await UserController.getAllUsers(request, response);

          expect(response.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a getUserById function', () => {
    beforeEach(() => {
      request = {
        params: { userId: 'dfgdfw3sdfsd' }
      };
    });

    describe('When it is invoked', () => {
      describe('And it resolves', () => {
        test('Then it should call response.json', async () => {
          User.findById.mockResolvedValue({ user_name: 'Pepe' });

          await UserController.getUserById(request, response);

          expect(response.json).toHaveBeenCalled();
        });
      });
      describe('And it rejects', () => {
        test('Then res.status should return error 418', async () => {
          User.findById.mockRejectedValue();

          await UserController.getUserById(request, response);

          expect(response.status).toHaveBeenCalledWith(418);
        });
      });
    });
  });

  describe('Given a updateUserById function', () => {
    beforeEach(() => {
      request = {
        body: {},
        params: { userId: 'dfdfdsfsf' }
      };
    });

    describe('When it is invoked', () => {
      describe('And it resolves', () => {
        test('Then it should call response.json', async () => {
          User.findByIdAndUpdate.mockResolvedValue({ user_name: 'Pepe' });

          await UserController.updateUserById(request, response);

          expect(response.json).toHaveBeenCalled();
        });
      });
      describe('And it rejects', () => {
        test('Then res.status should return error 418', async () => {
          User.findByIdAndUpdate.mockRejectedValue();

          await UserController.updateUserById(request, response);

          expect(response.status).toHaveBeenCalledWith(418);
        });
      });
    });
  });

  describe('Given a deleteUserById function', () => {
    beforeEach(() => {
      request = {
        params: { userId: 'dfdfdsfsf' },
        response: jest.fn()
      };
    });

    describe('When it is invoked', () => {
      describe('And it resolves', () => {
        test('Then it should call response.json', async () => {
          User.findByIdAndDelete.mockResolvedValue();

          await UserController.deleteUserById(request, response);

          expect(response.send).toHaveBeenCalledWith('User deleted');
        });
      });
      describe('And it rejects', () => {
        test('Then res.status should return error 404', async () => {
          User.findByIdAndDelete.mockRejectedValue();

          await UserController.deleteUserById(request, response);

          expect(response.status).toHaveBeenCalledWith(404);
        });
      });
    });
  });
});
