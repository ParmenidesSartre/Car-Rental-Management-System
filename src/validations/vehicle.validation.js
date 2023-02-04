const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createVehicle = {
  body: Joi.object().keys({
    make: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number().required(),
    licensePlate: Joi.string().required(),
    color: Joi.string().required(),
    transmission: Joi.string().required().valid('Automatic', 'Manual'),
    fuel_type: Joi.string().required().valid('Gasoline', 'Diesel', 'Electric'),
    seats: Joi.number().required(),
    rentalRate: Joi.number().required(),
    status: Joi.string().required().valid('Available', 'Reserved', 'Rented', 'Maintenance'),
  }),
};

const getVehicles = {
  query: Joi.object().keys({
    make: Joi.string(),
    model: Joi.string(),
    year: Joi.number(),
    licensePlate: Joi.string(),
    color: Joi.string(),
    transmission: Joi.string().valid('Automatic', 'Manual'),
    fuel_type: Joi.string().valid('Gasoline', 'Diesel', 'Electric'),
    seats: Joi.number(),
    rentalRate: Joi.number(),
    status: Joi.string().valid('Available', 'Reserved', 'Rented', 'Maintenance'),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getVehicle = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

const updateVehicle = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      make: Joi.string(),
      model: Joi.string(),
      year: Joi.number(),
      licensePlate: Joi.string(),
      color: Joi.string(),
      transmission: Joi.string().valid('Automatic', 'Manual'),
      fuel_type: Joi.string().valid('Gasoline', 'Diesel', 'Electric'),
      seats: Joi.number(),
      rentalRate: Joi.number(),
      status: Joi.string().valid('Available', 'Reserved', 'Rented', 'Maintenance'),
    })
    .min(1),
};

const deleteVehicle = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

const addReview = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    reviewer: Joi.required().custom(objectId),
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }),
};

module.exports = {
  createVehicle,
  getVehicles,
  getVehicle,
  updateVehicle,
  deleteVehicle,
  addReview,
};
