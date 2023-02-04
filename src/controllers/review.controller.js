const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { reviewService } = require('../services');

const updateReview = catchAsync(async (req, res) => {
  const review = await reviewService.updateReview(req.params.id, req.body);
  res.send(review);
});

const deleteReview = catchAsync(async (req, res) => {
  await reviewService.deleteReviewById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  updateReview,
  deleteReview,
};
