const mongoose = require('mongoose');
const faker = require('faker');
const Vehicle = require('../../src/models/vehicle.model');

const vehicleOne = {
  _id: '5f3f3f3f3f3f3f3f3f3f3f3f',
  make: 'Toyota',
  model: 'Corolla',
  year: 1960,
  licensePlate: faker.vehicle.vrm(),
  color: 'Red',
  transmission: 'Automatic',
  fuel_type: 'Gasoline',
  seats: faker.datatype.number(),
  rentalRate: parseInt(faker.finance.amount(), 10),
  status: 'Available',
};

const vehicleTwo = {
  _id: mongoose.Types.ObjectId(),
  make: 'Honda',
  model: 'Civic',
  year: 1962,
  licensePlate: faker.vehicle.vrm(),
  color: 'Red',
  transmission: 'Automatic',
  fuel_type: 'Gasoline',
  seats: faker.datatype.number(),
  rentalRate: parseInt(faker.finance.amount(), 10),
  status: 'Available',
};

const insertVehicles = async (vehicles) => {
  await Vehicle.insertMany(vehicles.map((vehicle) => ({ ...vehicle })));
};

module.exports = {
  vehicleOne,
  vehicleTwo,
  insertVehicles,
};
