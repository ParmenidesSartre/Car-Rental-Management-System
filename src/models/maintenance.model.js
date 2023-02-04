const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const maintenanceSchema = mongoose.Schema({
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Vehicle',
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

// add plugin that converts mongoose to json
maintenanceSchema.plugin(toJSON);
maintenanceSchema.plugin(paginate);

/**
 * @typedef Maintenance
 */
const Maintenance = mongoose.model('Maintenance', maintenanceSchema);

module.exports = Maintenance;
