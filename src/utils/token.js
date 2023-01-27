const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const generateToken = (payload) =>
  jwt.sign(payload, TOKEN_SECRET, {
    algorithm: 'HS256',
  });

const validateToken = (token) => {
    try {
      const validToken = jwt.verify(token, TOKEN_SECRET);
      return { type: '', message: validToken };
    } catch (err) {
      return { type: 'TOKEN_INVALID', message: 'Expired or invalid token' };
    }
};

const verifyToken = (token) => jwt.verify(token, TOKEN_SECRET);
  
module.exports = {
  generateToken,
  validateToken,
  verifyToken,
};