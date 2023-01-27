const Sequelize = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../models');

const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
// Ajustamos para usar a configuração correta para nosso ambiente
const sequelize = new Sequelize(config[env]);

const findPostByid = async (id) => {
  const post = await BlogPost.findOne({ where: { id },
    include: [
      { model: Category, as: 'categories' }, 
      { model: User, as: 'user', attributes: { exclude: ['password'] } }] });

  if (!post) return { type: 'POST_NOT_EXISTS', message: 'Post does not exist' };

  return { type: '', message: post };
};

const getAllPosts = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: Category, as: 'categories' }, 
      { model: User, as: 'user', attributes: { exclude: ['password'] } }] });

  return post;
};

const createPost = async (id, { title, content, categoryIds }) => {
  // const t = await sequelize.transaction();

  try {
    const result = await sequelize.transaction(async (t) => {
      const post = await BlogPost.create({
        title, content, userId: id,
      }, { transaction: t });
      const categoryWithId = categoryIds.map((e) => ({ categoryId: e, postId: post.id }));
      await PostCategory.bulkCreate(categoryWithId, { transaction: t });
      return post;
    });

    const postComplet = await findPostByid(result.id);
    return { type: '', message: postComplet };
  } catch (err) {
    return { type: 'INVALID_CATEGORY', message: 'one or more "categoryIds" not found' };
  }
};

module.exports = {
  createPost,
  findPostByid,
  getAllPosts,
};
