const { Category } = require('../models');

const createCategory = async (name) => {
    const { dataValues } = await Category.create({ name });
    return dataValues;
};

module.exports = {
  createCategory,
};