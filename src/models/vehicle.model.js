const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const vehicleSchema = mongoose.Schema({
  make: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
    trim: true,
  },
  licensePlate: {
    type: String,
    required: true,
    trim: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
  transmission: {
    type: String,
    enums: ['Automatic', 'Manual'],
    required: true,
  },
  fuel_type: {
    type: String,
    enums: ['Gasoline', 'Diesel', 'Electric'],
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  rentalRate: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enums: ['Available', 'Reserved', 'Rented', 'Maintenance'],
  },
});

// add plugin that converts mongoose to json
vehicleSchema.plugin(toJSON);
vehicleSchema.plugin(paginate);

/**
 * Check vehicle status
 * @param {string} _id - The vehicle's id
 * @returns {Promise<boolean>}
 */
vehicleSchema.statics.isAvailable = async function (_id) {
  const vehicle = await this.findOne({ _id, status: 'Available' });
  return !!vehicle;
};

/**
 * Update vehicle status
 * @param {string} _id - The vehicle's id
 * @param {string} status - The vehicle's status
 * @returns {Promise<boolean>}
 */
vehicleSchema.methods.updateStatus = async function (_id, status) {
  const vehicle = await this.findOne({ _id });
  vehicle.status = status;
  return vehicle.save();
};

/**
 * Get rental rate
 * @param {string} _id - The vehicle's id
 * @returns {Promise<boolean>}
 */
vehicleSchema.methods.getRentalRate = async function (_id) {
  const vehicle = await this.findOne({ _id });
  return vehicle.rentalRate;
};

/**
 * Update rental rate
 * @param {string} _id - The vehicle's id
 * @returns {Promise<boolean>}
 */
vehicleSchema.methods.updateRentalRate = async function (_id, rentalRate) {
  const vehicle = await this.findOne({ _id });
  vehicle.rentalRate = rentalRate;
  return vehicle.save();
};

/**
 * Generate vehicle report
 * @param {string} _id - The vehicle's id
 * @returns {Promise<boolean>}
 */
vehicleSchema.methods.generateReport = async function (_id) {
  // Return only make, model, year, license plate number, and current status.
  const vehicle = await this.findOne({ _id });
  return {
    make: vehicle.make,
    model: vehicle.model,
    year: vehicle.year,
    licensePlate: vehicle.licensePlate,
    status: vehicle.status,
  };
};

/**
 * @typedef Vehicle
 */
const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
