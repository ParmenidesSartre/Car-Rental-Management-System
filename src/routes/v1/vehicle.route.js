const express = require('express');
const validate = require('../../middlewares/validate');
const vehicleController = require('../../controllers/vehicle.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/')
  .post(validate(vehicleController.createVehicle), vehicleController.createVehicle) // auth('createVehicle'),
  .get(validate(vehicleController.getVehicles), vehicleController.getVehicles);

router.route('/search').get(validate(vehicleController.searchVehicles), vehicleController.searchVehicles);

router
  .route('/:id')
  .get(validate(vehicleController.searchVehicle), vehicleController.searchVehicle)
  .put(validate(vehicleController.updateVehicle), auth('updateVehicle'), vehicleController.updateVehicle)
  .delete(validate(vehicleController.deleteVehicle), auth('deleteVehicle'), vehicleController.deleteVehicle);

module.exports = router;
