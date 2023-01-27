// const jwt = require('jsonwebtoken');
const { userService } = require('../services');
const { generateToken } = require('../utils/token');

const createUser = async (req, res) => {
  const { displayName, email } = req.body;
  const { type, message } = await userService.createNewUser(req.body);

  if (type) return res.status(409).json({ message });

  const payload = {
    displayName,
    email,
  };

  const token = generateToken(payload); 

  res.status(201).json({ token });
};

const findAllUsers = async (_req, res) => {
  const users = await userService.findAllUsers();

  res.status(200).json(users);
};

const findUserById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userService.findUserById(id);

  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

const deleteUserById = async (req, res) => {
  const { user } = req;
  await userService.deleteUserById(user.id);
  res.status(204).json();
};

module.exports = {
  createUser,
  findAllUsers,
  findUserById,
  deleteUserById,
};