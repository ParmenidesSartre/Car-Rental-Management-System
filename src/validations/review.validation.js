const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createReview = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    rating: Joi.number().required(),
    comment: Joi.string().required(),
  }),
};

const updateReview = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      rating: Joi.number(),
      comment: Joi.string(),
    })
    .min(1),
};

const deleteReview = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createReview,
  updateReview,
  deleteReview,
};
