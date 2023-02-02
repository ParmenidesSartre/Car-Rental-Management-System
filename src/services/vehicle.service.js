const httpStatus = require('http-status');
const { Vehicle } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a vehicle
 * @param {Object} vehicleBody
 * @returns {Promise<Vehicle>}
 */
const createVehicle = async (vehicleBody) => {
  if (await Vehicle.isLicensePlateTaken(vehicleBody.licensePlate)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'License Plate already taken');
  }
  return Vehicle.create(vehicleBody);
};

/**
 * Query for vehicles
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryVehicles = async (filter, options) => {
  const vehicles = await Vehicle.paginate(filter, options);
  return vehicles;
};

/**
 * Get vehicle by id
 * @param {ObjectId} id
 * @returns {Promise<Vehicle>}
 * */
const searchVehicle = async (id) => {
  const vehicle = await Vehicle.findById(id);
  return vehicle;
};

/**
 * Update vehicle by id
 * @param {ObjectId} id
 * @returns {Promise<Vehicle>}
 * */

const updateVehicle = async (id, updateBody) => {
  const vehicle = await searchVehicle(id);
  if (!vehicle) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Vehicle not found');
  }
  if (updateBody.licensePlate && (await Vehicle.isLicensePlateTaken(updateBody.licensePlate))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'License Plate already taken');
  }
  Object.assign(vehicle, updateBody);
  await vehicle.save();
  return vehicle;
};

const deleteVehicle = async (id) => {
  const vehicle = await searchVehicle(id);
  if (!vehicle) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Vehicle not found');
  }
  await vehicle.remove();
  return vehicle;
};

module.exports = {
  createVehicle,
  queryVehicles,
  searchVehicle,
  updateVehicle,
  deleteVehicle,
};
