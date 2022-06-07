const Joi = require('joi');

const emptyField = 'All fields must be filled in correctly';

const registerSchema = Joi.object({
  name: Joi.string().min(2).required().messages({
    'string.min': 'Name must be longer than 2 characters',
    'any.required': emptyField,
    'string.empty': emptyField,
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Incorrect email or password',
    'any.required': emptyField,
    'string.empty': emptyField,
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Incorrect email or password',
    'any.required': emptyField,
    'string.empty': emptyField,
  }),
});

module.exports = registerSchema;
