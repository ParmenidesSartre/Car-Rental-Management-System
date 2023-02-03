# RESTful API Car Rental Management System

[![Build Status](https://travis-ci.org/hagopj13/node-express-boilerplate.svg?branch=master)](https://travis-ci.org/hagopj13/node-express-boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/hagopj13/node-express-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/hagopj13/node-express-boilerplate?branch=master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

This is a REST API for a car rental management system built using Express, Node.js, MongoDB, and Jest for testing. The API allows users to perform CRUD operations on a fleet of vehicles, including creating and updating vehicle information, searching for available vehicles, and reserving or renting vehicles. The MongoDB database is used to store information about each vehicle, including its make, model, year, license plate number, color, transmission, fuel type, seats, rental rate, and status. The API also includes authentication and validation middleware to ensure the security and integrity of the data. The Jest testing framework is used to test the API's functionality and ensure that it meets the requirements of the car rental management system.

## User Stories

### Car Rental Management

1. As an employee, I want to be able to add, update, and manage the inventory of rental cars, including car models, colors, and features.
2. As an employee, I want to be able to manage the availability of rental cars, including setting the rental rate, changing the availability status, and managing the pickup and return locations.
3. As an employee, I want to be able to generate reports on car rental performance, such as the number of reservations, revenue, and customer feedback.
4. As a customer, I want to be able to search for available rental cars by location, date, car type, and price range.
5. As a customer, I want to be able to make a reservation for a rental car, including selecting the pickup and return locations, dates, and car type.
6. As a customer, I want to be able to view the details of my reservation, including the car model, pickup and return locations, dates, and rental rate.

### Reservation Management

1. As an employee, I want to be able to manage rental reservations, including creating new reservations, updating existing reservations, and cancelling reservations.
2. As an employee, I want to be able to manage the rental pickup and return process, including verifying the customer's identity, checking the car condition, and processing payment.
3. As a customer, I want to be able to view the status of my rental reservation, including the pickup and return locations, dates, and rental rate.

### Customer Management

1. As a customer, I want to create an account so that I can manage my reservations, personal information, and payment methods.
2. As a customer, I want to log in to my account using a secure username and password, so that I can access my reservation history and information.
3. As a customer, I want to update my personal information, such as my name, address, email, and phone number, so that the rental company has accurate information for my reservations.
4. As a customer, I want to add and manage my payment methods, such as credit cards, PayPal, or bank transfers, so that I can easily pay for my reservations.
5. As a customer, I want to view my rental history, including past reservations and the cars I have rented.
6. As a customer, I want to be able to receive promotions and discounts, such as a loyalty program or special offers, so that I can save money on future rentals.
7. As an employee, I want to view a customer's account information, including their personal information, payment methods, and rental history.
8. As an employee, I want to be able to update a customer's account information, for example, to correct a mistake or update their contact details.
9. As an employee, I want to be able to generate reports on customer behavior, such as the number of reservations made by each customer or the average length of a customer's rental.
10. As a customer, I want to be able to leave a review or rating after a rental, so that other customers can see my feedback on the car and the rental company.
11. As a customer, I want to be able to receive email or SMS notifications about my reservations, such as confirmation of my rental, reminders about my rental pickup or return, and updates about any changes to my reservation.
12. As an employee, I want to be able to manage customer feedback and ratings, for example, by responding to customer complaints or addressing negative feedback.

## Rate Management

1. As a rental company administrator, I want to set different rental rates based on the type of vehicle, so that I can offer fair prices to customers.
2. As a rental company administrator, I want to set rental rates based on the rental duration, so that I can offer different prices for short-term and long-term rentals.
3. As a rental company administrator, I want to set different rental rates for different seasons, so that I can adjust prices based on demand.
4. As a customer, I want to see the rental rate for a specific vehicle and rental duration, so that I can compare prices and make informed decisions.
5. As a rental company administrator, I want to set discounts for customers who make early bookings, so that I can encourage customers to book in advance.

### Fleet Maintenance Management

1. As a rental company administrator, I want to keep track of the maintenance schedule for each vehicle in my fleet, so that I can ensure that vehicles are kept in good working condition.
2. As a rental company administrator, I want to log the maintenance history of each vehicle, so that I can have a record of what work has been done and when.
3. As a rental company administrator, I want to be notified when a vehicle is due for maintenance, so that I can schedule the work in advance.
4. As a rental company administrator, I want to log the cost of maintenance for each vehicle, so that I can track expenses and make informed decisions about future maintenance work.
5. As a customer, I want to see the maintenance history of a specific vehicle, so that I can assess the reliability and safety of the vehicle before renting it.

### Reporting and Analytics

1. As a rental company administrator, I want to generate reports on the rental activity of my fleet, so that I can analyze my business performance.
2. As a rental company administrator, I want to track the utilization rate of my fleet, so that I can make informed decisions about purchasing new vehicles or retiring older ones.
3. As a rental company administrator, I want to view reports on customer activity, so that I can understand their behavior and preferences.
4. As a rental company administrator, I want to generate financial reports, so that I can monitor my expenses and revenues.
5. As a customer, I want to view reports on my rental history, so that I can keep track of my expenses and receipts.

### Technical Assumptions

1. Performance:
   - The system should be able to handle a large number of simultaneous users and requests without significant latency.
   - The database (MongoDB) should be optimized for fast read and write operations to handle large amounts of data.
   - The application should be designed for scalability to handle growth in usage and data.
2. Usage pattern
   - The system will likely receive a large number of read requests for searching and retrieving information about vehicles and their availability.
   - There may also be a significant number of write requests, such as when creating or updating vehicle information or when booking a vehicle.
3. Data Management
   - The database should be able to handle concurrent access from multiple users to ensure data consistency and prevent data corruption.
   - The system should be able to handle the storage and retrieval of large amounts of data, including information about vehicles, rental rates, reservations, and rental history.
   - The data should be structured in a way that makes it easy to retrieve information quickly and accurately.

## System Architecture

The system architecture is based on the [Model-View-Controller (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) pattern, which is a common design pattern for web applications. The MVC pattern separates the application into three main components: the model, the view, and the controller. The model represents the data and business logic of the application, the view represents the user interface, and the controller handles user requests and interacts with the model and view components.

<img src="https://www.freecodecamp.org/news/content/images/2021/04/MVC3.png" width="50%" height="50%>

## Table of Contents

- [Features](#features)
- [Commands](#commands)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Error Handling](#error-handling)
- [Validation](#validation)
- [Authentication](#authentication)
- [Authorization](#authorization)
- [Logging](#logging)
- [Custom Mongoose Plugins](#custom-mongoose-plugins)
- [Linting](#linting)
- [Contributing](#contributing)

## Features

- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Authentication and authorization**: using [passport](http://www.passportjs.org)
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Error handling**: centralized error handling mechanism
- **API documentation**: with [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
- **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Compression**: gzip compression with [compression](https://github.com/expressjs/compression)
- **CI**: continuous integration with [Travis CI](https://travis-ci.org)
- **Docker support**
- **Code coverage**: using [coveralls](https://coveralls.io)
- **Code quality**: with [Codacy](https://www.codacy.com)
- **Git hooks**: with [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Editor config**: consistent editor configuration using [EditorConfig](https://editorconfig.org)

## Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

Testing:

```bash
# run all tests
yarn test

# run all tests in watch mode
yarn test:watch

# run test coverage
yarn coverage
```

Docker:

```bash
# run docker container in development mode
yarn docker:dev

# run docker container in production mode
yarn docker:prod

# run all tests in a docker container
yarn docker:test
```

Linting:

```bash
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix

# run prettier
yarn prettier

# fix prettier errors
yarn prettier:fix
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3000

# URL of the Mongo DB
MONGODB_URL=mongodb://127.0.0.1:27017/node-boilerplate

# JWT
# JWT secret key
JWT_SECRET=thisisasamplesecret
# Number of minutes after which an access token expires
JWT_ACCESS_EXPIRATION_MINUTES=30
# Number of days after which a refresh token expires
JWT_REFRESH_EXPIRATION_DAYS=30

# SMTP configuration options for the email service
# For testing, you can use a fake SMTP service like Ethereal: https://ethereal.email/create
SMTP_HOST=email-server
SMTP_PORT=587
SMTP_USERNAME=email-server-username
SMTP_PASSWORD=email-server-password
EMAIL_FROM=support@yourapp.com
```

## Project Structure

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Swagger files
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:3000/v1/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

### API Endpoints

List of available routes:

**Auth routes**:\
`POST /v1/auth/register` - register\
`POST /v1/auth/login` - login\
`POST /v1/auth/refresh-tokens` - refresh auth tokens\
`POST /v1/auth/forgot-password` - send reset password email\
`POST /v1/auth/reset-password` - reset password\
`POST /v1/auth/send-verification-email` - send verification email\
`POST /v1/auth/verify-email` - verify email

**User routes**:\
`POST /v1/users` - create a user\
`GET /v1/users` - get all users\
`GET /v1/users/:userId` - get user\
`PATCH /v1/users/:userId` - update user\
`DELETE /v1/users/:userId` - delete user

## Error Handling

The app has a centralized error handling mechanism.

Controllers should try to catch the errors and forward them to the error handling middleware (by calling `next(error)`). For convenience, you can also wrap the controller inside the catchAsync utility wrapper, which forwards the error.

```javascript
const catchAsync = require('../utils/catchAsync');

const controller = catchAsync(async (req, res) => {
  // this error will be forwarded to the error handling middleware
  throw new Error('Something wrong happened');
});
```

The error handling middleware sends an error response, which has the following format:

```json
{
  "code": 404,
  "message": "Not found"
}
```

When running in development mode, the error response also contains the error stack.

The app has a utility ApiError class to which you can attach a response code and a message, and then throw it from anywhere (catchAsync will catch it).

For example, if you are trying to get a user from the DB who is not found, and you want to send a 404 error, the code should look something like:

```javascript
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const User = require('../models/User');

const getUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
};
```

## Validation

Request data is validated using [Joi](https://joi.dev/). Check the [documentation](https://joi.dev/api/) for more details on how to write Joi validation schemas.

The validation schemas are defined in the `src/validations` directory and are used in the routes by providing them as parameters to the `validate` middleware.

```javascript
const express = require('express');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', validate(userValidation.createUser), userController.createUser);
```

## Authentication

To require authentication for certain routes, you can use the `auth` middleware.

```javascript
const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', auth(), userController.createUser);
```

These routes require a valid JWT access token in the Authorization request header using the Bearer schema. If the request does not contain a valid access token, an Unauthorized (401) error is thrown.

**Generating Access Tokens**:

An access token can be generated by making a successful call to the register (`POST /v1/auth/register`) or login (`POST /v1/auth/login`) endpoints. The response of these endpoints also contains refresh tokens (explained below).

An access token is valid for 30 minutes. You can modify this expiration time by changing the `JWT_ACCESS_EXPIRATION_MINUTES` environment variable in the .env file.

**Refreshing Access Tokens**:

After the access token expires, a new access token can be generated, by making a call to the refresh token endpoint (`POST /v1/auth/refresh-tokens`) and sending along a valid refresh token in the request body. This call returns a new access token and a new refresh token.

A refresh token is valid for 30 days. You can modify this expiration time by changing the `JWT_REFRESH_EXPIRATION_DAYS` environment variable in the .env file.

## Authorization

The `auth` middleware can also be used to require certain rights/permissions to access a route.

```javascript
const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', auth('manageUsers'), userController.createUser);
```

In the example above, an authenticated user can access this route only if that user has the `manageUsers` permission.

The permissions are role-based. You can view the permissions/rights of each role in the `src/config/roles.js` file.

If the user making the request does not have the required permissions to access this route, a Forbidden (403) error is thrown.

## Logging

Import the logger from `src/config/logger.js`. It is using the [Winston](https://github.com/winstonjs/winston) logging library.

Logging should be done according to the following severity levels (ascending order from most important to least important):

```javascript
const logger = require('<path to src>/config/logger');

logger.error('message'); // level 0
logger.warn('message'); // level 1
logger.info('message'); // level 2
logger.http('message'); // level 3
logger.verbose('message'); // level 4
logger.debug('message'); // level 5
```

In development mode, log messages of all severity levels will be printed to the console.

In production mode, only `info`, `warn`, and `error` logs will be printed to the console.\
It is up to the server (or process manager) to actually read them from the console and store them in log files.\
This app uses pm2 in production mode, which is already configured to store the logs in log files.

Note: API request information (request url, response code, timestamp, etc.) are also automatically logged (using [morgan](https://github.com/expressjs/morgan)).

## Custom Mongoose Plugins

The app also contains 2 custom mongoose plugins that you can attach to any mongoose model schema. You can find the plugins in `src/models/plugins`.

```javascript
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    /* schema definition here */
  },
  { timestamps: true }
);

userSchema.plugin(toJSON);
userSchema.plugin(paginate);

const User = mongoose.model('User', userSchema);
```

### toJSON

The toJSON plugin applies the following changes in the toJSON transform call:

- removes \_\_v, createdAt, updatedAt, and any schema path that has private: true
- replaces \_id with id

### paginate

The paginate plugin adds the `paginate` static method to the mongoose schema.

Adding this plugin to the `User` model schema will allow you to do the following:

```javascript
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};
```

The `filter` param is a regular mongo filter.

The `options` param can have the following (optional) fields:

```javascript
const options = {
  sortBy: 'name:desc', // sort order
  limit: 5, // maximum results per page
  page: 2, // page number
};
```

The plugin also supports sorting by multiple criteria (separated by a comma): `sortBy: name:desc,role:asc`

The `paginate` method returns a Promise, which fulfills with an object having the following properties:

```json
{
  "results": [],
  "page": 2,
  "limit": 5,
  "totalPages": 10,
  "totalResults": 48
}
```

## Linting

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

In this app, ESLint is configured to follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with some modifications. It also extends [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to turn off all rules that are unnecessary or might conflict with Prettier.

To modify the ESLint configuration, update the `.eslintrc.json` file. To modify the Prettier configuration, update the `.prettierrc.json` file.

To prevent a certain file or directory from being linted, add it to `.eslintignore` and `.prettierignore`.

To maintain a consistent coding style across different IDEs, the project contains `.editorconfig`

## Contributing

Contributions are more than welcome! Please check out the [contributing guide](CONTRIBUTING.md).

## Inspirations

- [danielfsousa/express-rest-es2017-boilerplate](https://github.com/danielfsousa/express-rest-es2017-boilerplate)
- [madhums/node-express-mongoose](https://github.com/madhums/node-express-mongoose)
- [kunalkapadia/express-mongoose-es6-rest-api](https://github.com/kunalkapadia/express-mongoose-es6-rest-api)

## License

[MIT](LICENSE)
