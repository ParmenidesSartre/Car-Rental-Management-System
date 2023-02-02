const faker = require('faker');
const { Vehicle } = require('../../../src/models');

describe('Vehicle model', () => {
  describe('Vehicle validation', () => {
    let newVehicle;
    beforeEach(() => {
      newVehicle = {
        make: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        year: 1971,
        licensePlate: faker.vehicle.vrm(),
        color: 'Red',
        transmission: 'Automatic',
        fuel_type: 'Gasoline',
        seats: 5,
        rentalRate: parseInt(faker.finance.amount(), 10),
        status: 'Available',
      };
    });

    test('should correctly validate a valid vehicle', async () => {
      await expect(new Vehicle(newVehicle).validate()).resolves.toBeUndefined();
    });

    test('should throw a validation error if transmission is invalid', async () => {
      newVehicle.transmission = 'invalid';
      await expect(new Vehicle(newVehicle).validate()).rejects.toThrow();
    });

    test('should throw a validation error if fuel_type is invalid', async () => {
      newVehicle.fuel_type = 'invalid';
      await expect(new Vehicle(newVehicle).validate()).rejects.toThrow();
    });

    test('should throw a validation error if status is invalid', async () => {
      newVehicle.status = 'invalid';
      await expect(new Vehicle(newVehicle).validate()).rejects.toThrow();
    });

    test('should throw a validation error if make is empty', async () => {
      newVehicle.make = '';
      await expect(new Vehicle(newVehicle).validate()).rejects.toThrow();
    });

    test('should throw a validation error if model is empty', async () => {
      newVehicle.model = '';
      await expect(new Vehicle(newVehicle).validate()).rejects.toThrow();
    });

    test('should throw a validation error if year is empty', async () => {
      newVehicle.year = '';
      await expect(new Vehicle(newVehicle).validate()).rejects.toThrow();
    });

    test('should throw a validation error if licensePlate is empty', async () => {
      newVehicle.licensePlate = '';
      await expect(new Vehicle(newVehicle).validate()).rejects.toThrow();
    });

    test('should throw a validation error if color is empty', async () => {
      newVehicle.color = '';
      await expect(new Vehicle(newVehicle).validate()).rejects.toThrow();
    });

    test('should throw a validation error if seats is empty', async () => {
      newVehicle.seats = '';
      await expect(new Vehicle(newVehicle).validate()).rejects.toThrow();
    });

    test('should throw a validation error if rentalRate is empty', async () => {
      newVehicle.rentalRate = '';
      await expect(new Vehicle(newVehicle).validate()).rejects.toThrow();
    });

    test('should throw a validation error if status is empty', async () => {
      newVehicle.status = '';
      await expect(new Vehicle(newVehicle).validate()).rejects.toThrow();
    });
  });
});
