const { User } = require('../models');

const createNewUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return { type: '', message: newUser };
  } catch (error) {
    return { type: 'USER_EXISTS', message: 'User already registered' };
  }
};

const findAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const findUserById = async (id) => {
  try {
    const { dataValues } = await 
    User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    return { type: '', message: dataValues };
  } catch (err) {
    return { type: 'USER_NOT_EXIST', message: 'User does not exist' };
  }
};

const findUserByEmail = async (email) => {
  const { dataValues } = await 
  User.findOne({ where: { email }, attributes: { exclude: ['password'] } });

  return dataValues;
};

const deleteUserById = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  createNewUser,
  findAllUsers,
  findUserById,
  findUserByEmail,
  deleteUserById,
};