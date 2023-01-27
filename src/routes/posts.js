const express = require('express');
const { postCategoryController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');
const validateBodyCreatePost = require('../middlewares/validateBodyCreatePost');
const validateBodyUpdate = require('../middlewares/validateBodyUpdate');

const router = express.Router();

router.post('/', validateToken, validateBodyCreatePost, postCategoryController.createPost);
router.put('/:id', validateToken, validateBodyUpdate, postCategoryController.updatePost);
router.get('/search', validateToken, postCategoryController.search);
router.get('/', validateToken, postCategoryController.findAllPosts);
router.get('/:id', validateToken, postCategoryController.findPostByid);
router.delete('/:id', validateToken, postCategoryController.deletePostId);

module.exports = router;