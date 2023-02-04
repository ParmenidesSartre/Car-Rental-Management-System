const request = require('supertest');
const faker = require('faker');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
const { Review } = require('../../src/models');
const { userOne, userTwo, admin, insertUsers } = require('../fixtures/user.fixture');
const { insertVehicles } = require('../fixtures/vehicle.fixture');
const { userOneAccessToken } = require('../fixtures/token.fixture');

setupTestDB();

describe('Review routes', () => {
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
      _id: '5f3f3f3f3f3f3f3f3f3f3f3f',
    };
  });
  describe('Post /v1/vehicle/:id/reviews', () => {
    test('should return 201 and successfully create new review if data is ok', async () => {
      await insertVehicles([newVehicle]);
      await insertUsers([userOne, userTwo, admin]);
      await request(app)
        .post('/v1/vehicles/5f3f3f3f3f3f3f3f3f3f3f3f/reviews')
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .send({
          rating: 5,
          comment: 'This is a test comment',
        })
        .expect(httpStatus.CREATED);
      const dbReview = await Review.findOne({ rating: 5 });
      expect(dbReview).toBeDefined();
      expect(dbReview).toMatchObject({
        rating: 5,
        comment: 'This is a test comment',
      });
    });

    test('should return 400 error if rating is empty', async () => {
      await insertVehicles([newVehicle]);
      await insertUsers([userOne, userTwo, admin]);
      await request(app)
        .post('/v1/vehicles/5f3f3f3f3f3f3f3f3f3f3f3f/reviews')
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .send({
          comment: 'This is a test comment',
        })
        .expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if comment is empty', async () => {
      await insertVehicles([newVehicle]);
      await insertUsers([userOne, userTwo, admin]);
      await request(app)
        .post('/v1/vehicles/5f3f3f3f3f3f3f3f3f3f3f3f/reviews')
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .send({
          rating: 5,
        })
        .expect(httpStatus.BAD_REQUEST);
    });
  });
});
