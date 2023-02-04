const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { reviewValidation } = require('../../validations');
const { reviewController } = require('../../controllers');

const router = express.Router();

router
  .route('/:id')
  .put(validate(reviewValidation.updateReview), reviewController.updateReview)
  .delete(auth(), validate(reviewValidation.deleteReview), reviewController.deleteReview);

module.exports = router;
