const { postService } = require('../services');

const createPost = async (req, res) => {
  const { user } = req;

  const { type, message } = await postService.createPost(user.id, req.body);

  if (type) return res.status(400).json({ message });

  res.status(201).json(message);
};

const findPostByid = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await postService.findPostByid(id);

  if (type) return res.status(404).json({ message });

  res.status(200).json(message);
};

const findAllPosts = async (_req, res) => {
  const posts = await postService.getAllPosts();

  res.status(200).json(posts);
};

const updatePost = async (req, res) => {
  const { user } = req;
  const { id } = req.params;

  const { type, message } = await postService.updatePost(user.id, id, req.body);

  if (type) return res.status(401).json({ message });

  res.status(200).json(message);
};

const deletePostId = async (req, res) => {
  const { user } = req;
  const { id } = req.params;

  const { type, message } = await postService.updatePost(user.id, id);

  if (type === 'POST_NOT_EXISTS') return res.status(404).json({ message });

  if (type) return res.status(401).json({ message });

  res.status(204).json();
};

module.exports = {
  createPost,
  findPostByid,
  findAllPosts,
  updatePost,
  deletePostId,
};