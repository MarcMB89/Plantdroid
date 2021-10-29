const User = require('../models/user.model');

async function createNewUser({ body }, response) {
  try {
    const newUser = await User.create(body);
    response.json(newUser);
  } catch (error) {
    response.status(500);
    response.send(error);
  }
}

async function getAllUsers({ query }, response) {
  try {
    const allUsers = await User.find(query);
    response.json(allUsers);
  } catch (error) {
    response.status(500);
    response.send(error);
  }
}

async function getUserById({ params: { userId } }, response) {
  try {
    const showUserById = await User.findById(userId);
    response.json(showUserById);
  } catch (error) {
    response.status(418);
    response.send(error);
  }
}

async function updateUserById({ body, params: { userId } }, response) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      body,
      {
        new: true,
        useFindAndModify: false
      }
    );
    response.json(updatedUser);
  } catch (error) {
    response.status(418);
    response.send(error);
  }
}

async function deleteUserById({ params: { userId } }, response) {
  try {
    await User.findByIdAndDelete(userId);
    response.send('User deleted');
  } catch (error) {
    response.status(404);
    response.send(error);
  }
}

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
};
