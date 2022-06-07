const Joi = require('joi');

const emptyField = 'All fields must be filled in correctly';

const saleSchema = Joi.object({
  userId: Joi.number().positive().required().messages({
    'number.positive': emptyField,
    'any.required': emptyField,
    'number.empty': emptyField,
  }),
  sellerId: Joi.number().positive().required().messages({
    'number.positive': emptyField,
    'any.required': emptyField,
    'number.empty': emptyField,
  }),
  totalPrice: Joi.number().precision(2).required().messages({
    'number.integer': emptyField,
    'any.required': emptyField,
    'number.empty': emptyField,
  }),
  deliveryAddress: Joi.string().min(5).required().messages({
    'string.min': 'Incomplete address',
    'any.required': emptyField,
    'string.empty': emptyField,
  }),
  deliveryNumber: Joi.number().required()
.messages({
    'any.required': emptyField,
    'number.empty': emptyField,
  }),
  products: Joi.array().min(1).required().messages({
    'array.min': 'No products were included',
    'any.required': emptyField,
    'array.empty': emptyField,
  }),
});

module.exports = saleSchema;
