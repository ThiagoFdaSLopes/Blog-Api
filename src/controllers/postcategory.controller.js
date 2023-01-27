const { postService } = require('../services');

const createPost = async (req, res) => {
  const { user } = req;

  const { type, message } = await postService.createPost(user.id, req.body);

  if (type) return res.status(400).json({ message });

  res.status(201).json(message);
};

module.exports = {
  createPost,
};