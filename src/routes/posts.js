const express = require('express');
const { postCategoryController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');
const validateBodyCreatePost = require('../middlewares/validateBodyCreatePost');

const router = express.Router();

router.post('/', validateToken, validateBodyCreatePost, postCategoryController.createPost);

module.exports = router;