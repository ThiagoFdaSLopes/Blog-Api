const express = require('express');
const { userController } = require('../controllers');
const validateBodyNewUser = require('../middlewares/validateBodyNewUser');

const router = express.Router();

router.post('/', validateBodyNewUser, userController.createUser);

module.exports = router;