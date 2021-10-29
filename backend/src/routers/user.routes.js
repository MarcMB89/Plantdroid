const { Router } = require('express');
const userController = require('../controllers/user.controller');

const userRouter = new Router();

userRouter
  .route('/')
  .post(userController.createNewUser)
  .get(userController.getAllUsers);

userRouter
  .route('/:userId')
  .get(userController.getUserById)
  .put(userController.updateUserById)
  .delete(userController.deleteUserById);

module.exports = userRouter;
