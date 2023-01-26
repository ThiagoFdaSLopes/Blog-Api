const Joi = require('joi');

const validateBody = (body) => Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
}).validate(body);

module.exports = (req, res, next) => {
  const { error } = validateBody(req.body);

  if (error) return res.status(400).json({ message: error.message });

  next();
};