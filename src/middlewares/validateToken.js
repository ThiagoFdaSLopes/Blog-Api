const { validateToken, verifyToken } = require('../utils/token');
const userService = require('../services/user.service');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const { type, message } = validateToken(authorization);
  if (type) return res.status(401).json({ message });

  const decoded = verifyToken(authorization);

  const user = await userService.findUserByEmail(decoded.email);

  if (!user) return res.status(400).json({ message: 'User Not Found' });

  req.user = user;
  next();
};