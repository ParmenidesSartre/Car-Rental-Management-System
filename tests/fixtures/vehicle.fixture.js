const mongoose = require('mongoose');
const faker = require('faker');
const Vehicle = require('../../src/models/vehicle.model');

const vehicleOne = {
  _id: mongoose.Types.ObjectId(),
  make: faker.vehicle.manufacturer(),
  model: faker.vehicle.model(),
  year: 1960,
  licensePlate: faker.vehicle.vrm(),
  color: 'Red',
  transmission: 'Automatic',
  fuel_type: 'Gasoline',
  seats: faker.random.number(),
  rentalRate: parseInt(faker.finance.amount(), 10),
  status: 'Available',
};

const insertVehicles = async (vehicles) => {
  await Vehicle.insertMany(vehicles.map((vehicle) => ({ ...vehicle })));
};

module.exports = {
  vehicleOne,
  insertVehicles,
};
