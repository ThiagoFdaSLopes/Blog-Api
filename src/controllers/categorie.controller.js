const { categorieService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categorieService.createCategory(name);

  res.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};