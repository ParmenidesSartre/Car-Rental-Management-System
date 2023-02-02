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
    enum: ['Automatic', 'Manual'],
    default: 'Automatic',
  },
  fuel_type: {
    type: String,
    enum: ['Gasoline', 'Diesel', 'Electric'],
    default: 'Gasoline',
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
    enum: ['Available', 'Reserved', 'Rented', 'Maintenance'],
    default: 'Available',
  },
});

// add plugin that converts mongoose to json
vehicleSchema.plugin(toJSON);
vehicleSchema.plugin(paginate);

/**
 * Check if license plate is taken
 * @param {string} _id - The vehicle's plate number
 * @returns {Promise<boolean>}
 */
vehicleSchema.statics.isLicensePlateTaken = async function (licensePlate) {
  const vehicle = await this.findOne({ licensePlate });
  return !!vehicle;
};

/**
 * @typedef Vehicle
 */
const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
