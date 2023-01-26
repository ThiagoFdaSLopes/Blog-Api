const { validateToken } = require('../utils/token');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const { type, message } = validateToken(authorization);
  if (type) return res.status(401).json({ message });

  next();
};