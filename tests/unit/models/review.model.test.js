const faker = require('faker');
const { Review } = require('../../../src/models');

describe('Review model', () => {
  describe('Review validation', () => {
    let newReview;
    beforeEach(() => {
      newReview = {
        rating: faker.datatype.number({ min: 1, max: 5 }),
        comment: faker.lorem.sentence(),
      };
    });

    test('should correctly validate a valid review', async () => {
      await expect(new Review(newReview).validate()).resolves.toBeUndefined();
    });

    test('should throw a validation error if rating is less than 1', async () => {
      newReview.rating = 0;
      await expect(new Review(newReview).validate()).rejects.toThrow();
    });

    test('should throw a validation error if rating is greater than 5', async () => {
      newReview.rating = 6;
      await expect(new Review(newReview).validate()).rejects.toThrow();
    });
  });
});
