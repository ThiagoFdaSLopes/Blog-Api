// const jwt = require('jsonwebtoken');
const { loginService } = require('../services');
const { generateToken } = require('../utils/token');

const validateLogin = async (req, res) => {
  const { email, password } = req.body;

  const { type, message } = await loginService.checkUserExists(email, password);

  if (type) return res.status(400).json({ message });

  const payload = {
    email,
  };

  const token = generateToken(payload); 

  res.status(200).json({ token });
};

module.exports = {
  validateLogin,
};