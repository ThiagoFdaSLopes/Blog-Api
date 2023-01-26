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

module.exports = {
  createUser,
};