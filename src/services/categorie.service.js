const { Category } = require('../models');

const createCategory = async (name) => {
    const { dataValues } = await Category.create({ name });
    return dataValues;
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

module.exports = {
  createCategory,
  getAllCategories,
};