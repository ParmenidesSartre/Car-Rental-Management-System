const request = require('supertest');
const faker = require('faker');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
const { Vehicle } = require('../../src/models');
const { vehicleOne, vehicleTwo, insertVehicles } = require('../fixtures/vehicle.fixture');
const { userOne, userTwo, admin, insertUsers } = require('../fixtures/user.fixture');
const { adminAccessToken } = require('../fixtures/token.fixture');

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
        seats: faker.datatype.number(),
        rentalRate: parseInt(faker.finance.amount(), 10),
        status: 'Available',
      };
    });

    test('should return 201 and successfully create new vehicle if data is ok', async () => {
      await insertVehicles([vehicleOne]);
      await insertUsers([userOne, userTwo, admin]);
      await request(app)
        .post('/v1/vehicles')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newVehicle)
        .expect(httpStatus.CREATED);
      const dbVehicle = await Vehicle.findOne({ make: newVehicle.make });
      expect(dbVehicle).toBeDefined();
      expect(dbVehicle).toMatchObject(newVehicle);
    });

    test('should return 400 error if make is empty', async () => {
      await insertVehicles([vehicleOne]);
      await insertUsers([userOne, userTwo, admin]);
      newVehicle.make = '';
      await request(app)
        .post('/v1/vehicles')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newVehicle)
        .expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if model is empty', async () => {
      await insertVehicles([vehicleOne]);
      await insertUsers([userOne, userTwo, admin]);
      newVehicle.model = '';
      await request(app)
        .post('/v1/vehicles')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newVehicle)
        .expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if year is empty', async () => {
      await insertVehicles([vehicleOne]);
      await insertUsers([userOne, userTwo, admin]);
      newVehicle.year = '';
      await request(app)
        .post('/v1/vehicles')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newVehicle)
        .expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if licensePlate is empty', async () => {
      await insertVehicles([vehicleOne]);
      await insertUsers([userOne, userTwo, admin]);
      newVehicle.licensePlate = '';
      await request(app)
        .post('/v1/vehicles')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newVehicle)
        .expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if color is empty', async () => {
      await insertVehicles([vehicleOne]);
      await insertUsers([userOne, userTwo, admin]);
      newVehicle.color = '';
      await request(app)
        .post('/v1/vehicles')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newVehicle)
        .expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if transmission is empty', async () => {
      await insertVehicles([vehicleOne]);
      await insertUsers([userOne, userTwo, admin]);
      newVehicle.transmission = '';
      await request(app)
        .post('/v1/vehicles')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newVehicle)
        .expect(httpStatus.BAD_REQUEST);
    });
  });

  describe('GET /v1/vehicles', () => {
    test('should return 200 and apply the default query options', async () => {
      await insertVehicles([vehicleOne, vehicleTwo]);
      await insertUsers([userOne, admin]);

      const res = await request(app).get('/v1/vehicles').send().expect(httpStatus.OK);
      expect(res.body.results).toBeDefined();
      expect(res.body.results.length).toBe(2);
      expect(res.body.results[0]).toHaveProperty('make');
      expect(res.body.results[0]).toHaveProperty('model');
      expect(res.body.results[0]).toHaveProperty('year');
      expect(res.body.results[0]).toHaveProperty('licensePlate');
      expect(res.body.results[0]).toHaveProperty('color');
      expect(res.body.results[0]).toHaveProperty('transmission');
      expect(res.body.results[0]).toHaveProperty('fuel_type');
      expect(res.body.results[0]).toHaveProperty('seats');
      expect(res.body.results[0]).toHaveProperty('rentalRate');
      expect(res.body.results[0]).toHaveProperty('status');
      expect(res.body.results[0]).toHaveProperty('id');
    });

    test('should return 200 and apply the given query string', async () => {
      await insertVehicles([vehicleOne, vehicleTwo]);
      await insertUsers([userOne, admin]);

      const res = await request(app).get('/v1/vehicles?make=Toyota').send().expect(httpStatus.OK);
      expect(res.body.results).toBeDefined();
      expect(res.body.results.length).toBe(1);
      expect(res.body.results[0]).toHaveProperty('make');
      expect(res.body.results[0]).toHaveProperty('model');
      expect(res.body.results[0]).toHaveProperty('year');
      expect(res.body.results[0]).toHaveProperty('licensePlate');
      expect(res.body.results[0]).toHaveProperty('color');
      expect(res.body.results[0]).toHaveProperty('transmission');
      expect(res.body.results[0]).toHaveProperty('fuel_type');
      expect(res.body.results[0]).toHaveProperty('seats');
      expect(res.body.results[0]).toHaveProperty('rentalRate');
      expect(res.body.results[0]).toHaveProperty('status');
      expect(res.body.results[0]).toHaveProperty('id');
    });

    test('should return 200 and sort the results', async () => {
      await insertVehicles([vehicleOne, vehicleTwo]);
      await insertUsers([userOne, admin]);

      const res = await request(app).get('/v1/vehicles?sortBy=seats').send().expect(httpStatus.OK);
      expect(res.body.results).toBeDefined();
      expect(res.body.results.length).toBe(2);
      expect(res.body.results[0]).toHaveProperty('make');
      expect(res.body.results[0]).toHaveProperty('model');
      expect(res.body.results[0]).toHaveProperty('year');
      expect(res.body.results[0]).toHaveProperty('licensePlate');
      expect(res.body.results[0]).toHaveProperty('color');
      expect(res.body.results[0]).toHaveProperty('transmission');
      expect(res.body.results[0]).toHaveProperty('fuel_type');
      expect(res.body.results[0]).toHaveProperty('seats');
      expect(res.body.results[0]).toHaveProperty('rentalRate');
      expect(res.body.results[0]).toHaveProperty('status');
      expect(res.body.results[0]).toHaveProperty('id');
    });

    test('should return 200 and limit the results', async () => {
      await insertVehicles([vehicleOne, vehicleTwo]);
      await insertUsers([userOne, admin]);

      const res = await request(app).get('/v1/vehicles?limit=1').send().expect(httpStatus.OK);
      expect(res.body.results).toBeDefined();
      expect(res.body.results.length).toBe(1);
      expect(res.body.results[0]).toHaveProperty('make');
      expect(res.body.results[0]).toHaveProperty('model');
      expect(res.body.results[0]).toHaveProperty('year');
      expect(res.body.results[0]).toHaveProperty('licensePlate');
      expect(res.body.results[0]).toHaveProperty('color');
      expect(res.body.results[0]).toHaveProperty('transmission');
      expect(res.body.results[0]).toHaveProperty('fuel_type');
      expect(res.body.results[0]).toHaveProperty('seats');
      expect(res.body.results[0]).toHaveProperty('rentalRate');
      expect(res.body.results[0]).toHaveProperty('status');
      expect(res.body.results[0]).toHaveProperty('id');
    });

    test('should return 200 and get page 2 with return zero result', async () => {
      await insertVehicles([vehicleOne, vehicleTwo]);
      await insertUsers([userOne, admin]);

      const res = await request(app).get('/v1/vehicles?page=2').send().expect(httpStatus.OK);

      expect(res.body.results).toBeDefined();
      expect(res.body.results.length).toBe(0);
    });
  });

  describe('GET /v1/vehicles/:id', () => {
    test('should return 200 and the vehicle object if data is ok', async () => {
      await insertVehicles([vehicleOne]);
      await insertUsers([userOne, admin]);
      const res = await request(app).get(`/v1/vehicles/${vehicleOne._id}`).send().expect(httpStatus.OK);
      expect(res.body).toBeDefined();
      expect(res.body).toHaveProperty('make');
      expect(res.body).toHaveProperty('model');
      expect(res.body).toHaveProperty('year');
      expect(res.body).toHaveProperty('licensePlate');
      expect(res.body).toHaveProperty('color');
      expect(res.body).toHaveProperty('transmission');
      expect(res.body).toHaveProperty('fuel_type');
      expect(res.body).toHaveProperty('seats');
      expect(res.body).toHaveProperty('rentalRate');
      expect(res.body).toHaveProperty('status');
      expect(res.body).toHaveProperty('id');
    });

    test('should return 404 error if vehicle is not found', async () => {
      await insertVehicles([vehicleOne]);
      await insertUsers([userOne, admin]);
      await request(app).get(`/v1/vehicles/${vehicleTwo._id}`).send().expect(httpStatus.NOT_FOUND);
    });
  });

  describe('PUT /v1/vehicles/:id', () => {
    test('should return 200 and successfully update vehicle if data is ok', async () => {
      await insertVehicles([vehicleOne]);
      await insertUsers([userOne, admin]);
      const res = await request(app)
        .put(`/v1/vehicles/${vehicleOne._id}`)
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send({
          make: 'Toyota',
          model: 'Camry',
          year: 2010,
          licensePlate: 'ABC123',
          color: 'Black',
          transmission: 'Automatic',
          fuel_type: 'Gasoline',
          seats: 5,
          rentalRate: 50,
          status: 'Available',
        })
        .expect(httpStatus.OK);

      expect(res.body).toBeDefined();
      expect(res.body).toHaveProperty('make');
      expect(res.body).toHaveProperty('model');
      expect(res.body).toHaveProperty('year');
      expect(res.body).toHaveProperty('licensePlate');
      expect(res.body).toHaveProperty('color');
      expect(res.body).toHaveProperty('transmission');
      expect(res.body).toHaveProperty('fuel_type');
      expect(res.body).toHaveProperty('seats');
      expect(res.body).toHaveProperty('rentalRate');
      expect(res.body).toHaveProperty('status');
      expect(res.body).toHaveProperty('id');
    });

    test('should return 400 error if make is empty', async () => {
      await insertVehicles([vehicleOne]);
      await insertUsers([userOne, admin]);
      await request(app)
        .put(`/v1/vehicles/${vehicleOne._id}`)
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send({
          make: '',
          model: 'Camry',
          year: 2010,
          licensePlate: 'ABC123',
          color: 'Black',
          transmission: 'Automatic',
          fuel_type: 'Gasoline',
          seats: 5,
          rentalRate: 50,
          status: 'Available',
        })
        .expect(httpStatus.BAD_REQUEST);
    });
  });

  describe('DELETE /v1/vehicles/:id', () => {
    test('should return 200 and successfully delete vehicle if data is ok', async () => {
      await insertVehicles([vehicleOne]);
      await insertUsers([userOne, admin]);
      await request(app)
        .delete(`/v1/vehicles/${vehicleOne._id}`)
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send()
        .expect(httpStatus.NO_CONTENT);
    });

    test('should return 404 error if vehicle is not found', async () => {
      await insertVehicles([vehicleOne]);
      await insertUsers([userOne, admin]);
      await request(app)
        .delete(`/v1/vehicles/${vehicleTwo._id}`)
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send()
        .expect(httpStatus.NOT_FOUND);
    });
  });
});
