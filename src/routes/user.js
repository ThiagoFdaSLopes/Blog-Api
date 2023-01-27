const express = require('express');
const { userController } = require('../controllers');
const validateBodyNewUser = require('../middlewares/validateBodyNewUser');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateBodyNewUser, userController.createUser);
router.get('/', validateToken, userController.findAllUsers);
router.get('/:id', validateToken, userController.findUserById);
router.delete('/me', validateToken, userController.deleteUserById);

module.exports = router;