const express = require('express');
const { userController } = require('../controllers');
const validateBodyNewUser = require('../middlewares/validateBodyNewUser');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateBodyNewUser, userController.createUser);
router.get('/', validateToken, userController.findAllUsers);

module.exports = router;