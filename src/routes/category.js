const express = require('express');
const { categorieController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.post('/', validateToken, validateName, categorieController.createCategory);
router.get('/', validateToken, categorieController.getAllCategories);

module.exports = router;