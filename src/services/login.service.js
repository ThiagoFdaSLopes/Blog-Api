const { User } = require('../models');

const checkUserExists = async (email, password) => {
  const userExists = await User.findOne({ where: { email, password } });

  if (!userExists) return { type: 'INVALID_USER', message: 'Invalid fields' };

  return { type: '', message: userExists };
};

module.exports = {
  checkUserExists,
};