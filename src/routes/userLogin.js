const express = require('express');
const { loginController } = require('../controllers');
const validateBody = require('../middlewares/validateBody');

const router = express.Router();

router.post('/', validateBody, loginController.validateLogin);

module.exports = router;