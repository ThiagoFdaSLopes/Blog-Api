const express = require('express');
const { categorieController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.post('/', validateToken, validateName, categorieController.createCategory);

module.exports = router;