const { categorieService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categorieService.createCategory(name);

  res.status(201).json(newCategory);
};

const getAllCategories = async (_req, res) => {
  const categories = await categorieService.getAllCategories();

  res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};