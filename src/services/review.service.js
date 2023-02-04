const httpStatus = require('http-status');
const { Review } = require('../models');
const ApiError = require('../utils/ApiError');

const updateReview = async (id, updateBody) => {
  const review = await Review.findByIdAndUpdate(id, updateBody, { new: true });
  if (!review) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review not found');
  }
  return review;
};

const deleteReview = async (id) => {
  const review = await Review.findByIdAndDelete(id);
  if (!review) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review not found');
  }
};

module.exports = {
  updateReview,
  deleteReview,
};
