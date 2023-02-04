const express = require('express');
const validate = require('../../middlewares/validate');
const { vehicleValidation, reviewValidation } = require('../../validations');
const { vehicleController } = require('../../controllers');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/search').get(validate(vehicleController.searchVehicles), vehicleController.searchVehicles);

router
  .route('/:id')
  .get(validate(vehicleValidation.getVehicle), vehicleController.searchVehicle)
  .put(auth('updateVehicle'), validate(vehicleValidation.updateVehicle), vehicleController.updateVehicle)
  .delete(auth('deleteVehicle'), validate(vehicleValidation.deleteVehicle), vehicleController.deleteVehicle);

router.route('/:id/reviews').post(auth(), validate(reviewValidation.createReview), vehicleController.addReview);

router
  .route('/')
  .post(auth('createVehicle'), validate(vehicleValidation.createVehicle), vehicleController.createVehicle) // auth('createVehicle'),
  .get(validate(vehicleValidation.getVehicles), vehicleController.getVehicles);

module.exports = router;
