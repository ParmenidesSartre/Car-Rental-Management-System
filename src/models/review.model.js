const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const ReviewSchema = new mongoose.Schema({
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// add plugin that converts mongoose to json
ReviewSchema.plugin(toJSON);
ReviewSchema.plugin(paginate);

/**
 *
 * @typedef Review
 */

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
