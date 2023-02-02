const request = require('supertest');
const faker = require('faker');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
const { Vehicle } = require('../../src/models');
const { vehicleOne, insertVehicles } = require('../fixtures/vehicle.fixture');

setupTestDB();

describe('Vehicle routes', () => {
  describe('Post /v1/vehicles', () => {
    let newVehicle;

    beforeEach(() => {
      newVehicle = {
        make: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        year: 1960,
        licensePlate: faker.vehicle.vrm(),
        color: 'Red',
        transmission: 'Automatic',
        fuel_type: 'Gasoline',
        seats: faker.random.number(),
        rentalRate: parseInt(faker.finance.amount(), 10),
        status: 'Available',
      };
    });

    test('should return 201 and successfully create new vehicle if data is ok', async () => {
      await insertVehicles([vehicleOne]);
      await request(app).post('/v1/vehicles').send(newVehicle).expect(httpStatus.CREATED);
      const dbVehicle = await Vehicle.findOne({ make: newVehicle.make });
      expect(dbVehicle).toBeDefined();
      expect(dbVehicle).toMatchObject(newVehicle);
    });

    test('should return 400 error if make is empty', async () => {
      await insertVehicles([vehicleOne]);
      newVehicle.make = '';
      await request(app).post('/v1/vehicles').send(newVehicle).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if model is empty', async () => {
      await insertVehicles([vehicleOne]);
      newVehicle.model = '';
      await request(app).post('/v1/vehicles').send(newVehicle).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if year is empty', async () => {
      await insertVehicles([vehicleOne]);
      newVehicle.year = '';
      await request(app).post('/v1/vehicles').send(newVehicle).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if licensePlate is empty', async () => {
      await insertVehicles([vehicleOne]);
      newVehicle.licensePlate = '';
      await request(app).post('/v1/vehicles').send(newVehicle).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if color is empty', async () => {
      await insertVehicles([vehicleOne]);
      newVehicle.color = '';
      await request(app).post('/v1/vehicles').send(newVehicle).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if transmission is empty', async () => {
      await insertVehicles([vehicleOne]);
      newVehicle.transmission = '';
      await request(app).post('/v1/vehicles').send(newVehicle).expect(httpStatus.BAD_REQUEST);
    });
  });
});
