const { User } = require('../models');

const createNewUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return { type: '', message: newUser };
  } catch (error) {
    console.log(error);
    return { type: 'USER_EXISTS', message: 'User already registered' };
  }
};

const findAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

module.exports = {
  createNewUser,
  findAllUsers,
};