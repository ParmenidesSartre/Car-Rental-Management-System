const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const pick = require('../utils/pick');
const { vehicleService } = require('../services');

const createVehicle = catchAsync(async (req, res) => {
  const vehicle = await vehicleService.createVehicle(req.body);
  res.status(httpStatus.CREATED).send(vehicle);
});

const getVehicles = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['make', 'model', 'year', 'licensePlate', 'status']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await vehicleService.queryVehicles(filter, options);
  res.send(result);
});

const searchVehicles = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['make', 'model', 'year', 'licensePlate', 'status']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await vehicleService.queryVehicles(filter, options);
  res.send(result);
});

const searchVehicle = catchAsync(async (req, res) => {
  const result = await vehicleService.searchVehicle(req.params.id);
  res.send(result);
});

const updateVehicle = catchAsync(async (req, res) => {
  const vehicle = await vehicleService.updateVehicleById(req.params.id, req.body);
  res.send(vehicle);
});

const deleteVehicle = catchAsync(async (req, res) => {
  await vehicleService.deleteVehicleById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createVehicle,
  getVehicles,
  searchVehicles,
  searchVehicle,
  updateVehicle,
  deleteVehicle,
};
