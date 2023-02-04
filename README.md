# RESTful API Car Rental Management System

The car rental management system REST API provides a comprehensive solution for managing a fleet of vehicles. It allows users to perform various CRUD operations on the vehicles and provides a robust authentication and validation system to ensure data security and integrity. The API is built using Express, Node.js, MongoDB, and Jest, and has been designed with scalability and performance in mind. The MongoDB database provides a flexible and efficient way to store and retrieve information about each vehicle, including its make, model, year, license plate number, color, transmission, fuel type, seats, rental rate, and status.

The Jest testing framework has been used to test the API's functionality and ensure that it meets the requirements of the car rental management system. The API has been designed with the intention of creating a front-end for it as well when the time permits, to provide a complete and user-friendly solution for car rental management.

## Table of Contents

- [User Stories](#user-stories)
  - [Car Rental Management](#car-rental-management)
  - [Reservation Management](#reservation-management)
  - [Customer Management](#customer-management)
  - [Rate Management](#rate-management)
  - [Fleet Maintenance Management](#fleet-maintenance-management)
  - [Reporting & Analytics](#reporting--analytics)
  - [Technical Assumptions](#technical-assumptions)
- [Technical Design](#technical-design)
  - [Architecture](#architecture)
  - [Project Structure](#project-structure)
- [Features](#features)
- [Commands](#commands)
- [Environment Variables](#environment-variables)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Authentication](#authentication)
- [Authorization](#authorization)
- [Error Handling](#error-handling)
- [Validation](#validation)
- [Logging](#logging)
- [Custom Mongoose Plugins](#custom-mongoose-plugins)
- [Linting](#linting)

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

### Reporting & Analytics

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

## Technical Design

### Architecture

The system architecture for the car rental management system is based on a modular structure that separates the application into different components, each responsible for a specific part of the application. The structure of the system is defined by a set of directories and files, as follows:

- `config` : This directory contains environment variables and configuration related things that are used throughout the application. It stores all the information required to run the application in different environments, such as development, testing, and production.

- `controllers` : This directory contains the route controllers, which act as the interface between the incoming HTTP requests and the application logic. Each controller is responsible for handling a specific type of request and returning the appropriate response.

- `docs` : This directory contains Swagger files that define the API documentation for the application. The Swagger files are used to generate a human-readable API documentation that can be used by developers and users to understand the functionality of the API.

- `middlewares` : This directory contains custom express middlewares, which are functions that are executed before the actual route handler is executed. Middlewares are used to perform tasks such as authentication, request validation, and data manipulation.

- `models` : This directory contains Mongoose models, which represent the data layer of the application. The models define the structure of the data that is stored in the MongoDB database and are used to perform database operations.

- `routes` : This directory contains the routes for the application. Each route is defined as a separate file and maps a specific URL to a corresponding controller.

- `services` : This directory contains the business logic for the application, which is separated from the controller layer. The service layer is responsible for performing the actual business logic, such as retrieving and manipulating data, and returning the results to the controller layer.

- `utils` : This directory contains utility classes and functions that are used throughout the application. The utilities provide common functionality that can be reused in multiple parts of the application.

- `validations` : This directory contains request data validation schemas, which define the structure and format of the data that is received by the application. The validation schemas are used to validate incoming requests and ensure that the data received is in the correct format.

- `app.js` : This file contains the Express app, which is the main entry point for the application. The Express app is responsible for setting up the Express framework, defining the routes, and starting the application.

- `index.js` : This file is the app entry point and is responsible for starting the application by calling the appropriate functions in the app.js file.

### Project Structure

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

### Data Flow

[![](https://mermaid.ink/img/pako:eNp1UkFuwyAQ_MqKc_oBDpGq9NJDpDS5ctnaGxcJA2UhUhXl7wWM68RtTx57Z2ZnVr6KzvUkpGD6TGQ7etE4BByVBfAYou60RxthZzTlB3JD6_nRpUhlXMEvtbMxOGMoVIeftzXvROGiu-rT4Jqxz2lNmVegbJlPiZ6227pbZqntGRBCqcQRooP4QfB8eC3sSsrkJYWEAzITV9ZKhN4H54PG3K57yL3os1lLK2GHxsxGhi4lMi9NGi0LanwJb4mCbpt7jPiOTJBY26F-2js7OMc0t4UJ3C88UkzBLg6Pa-5L_sV8KNHOt-b9d7969fnaU2P2zua0TTAxxEaMFEbUff7LrsVBiTwdSQmZYU9nTCYqoewtUzFFd_qynZAxJNqI5HOE-acU8oyG6fYN1xH3SQ?type=png)](https://mermaid.live/edit#pako:eNp1UkFuwyAQ_MqKc_oBDpGq9NJDpDS5ctnaGxcJA2UhUhXl7wWM68RtTx57Z2ZnVr6KzvUkpGD6TGQ7etE4BByVBfAYou60RxthZzTlB3JD6_nRpUhlXMEvtbMxOGMoVIeftzXvROGiu-rT4Jqxz2lNmVegbJlPiZ6227pbZqntGRBCqcQRooP4QfB8eC3sSsrkJYWEAzITV9ZKhN4H54PG3K57yL3os1lLK2GHxsxGhi4lMi9NGi0LanwJb4mCbpt7jPiOTJBY26F-2js7OMc0t4UJ3C88UkzBLg6Pa-5L_sV8KNHOt-b9d7969fnaU2P2zua0TTAxxEaMFEbUff7LrsVBiTwdSQmZYU9nTCYqoewtUzFFd_qynZAxJNqI5HOE-acU8oyG6fYN1xH3SQ)

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

**Vehicle routes**:\
`POST /v1/vehicles` - create a vehicle\
`POST /v1/vehicles?sortBy` - sort vehicles\
`POST /v1/vehicles?limit` - limit number of vehicles\
`POST /v1/vehicles?page` - get pagination page\
`POST /v1/vehicles?make` - get vehicles by make\
`POST /v1/vehicles?model` - get vehicles by model\
`POST /v1/vehicles?year` - get vehicles by year\
`POST /v1/vehicles?color` - get vehicles by color\
`POST /v1/vehicles?transmission` - get vehicles by transmission type\
`GET /v1/vehicles` - get all vehicles\
`GET /v1/vehicles/:id` - get vehicle\
`PUT /v1/vehicles/:id - update vehicle\ `DELETE /v1/vehicles/:id` - delete vehicle\

**Review routes**:\
`POST /v1/vehicle/:vehicleId/reviews` - create a review\
`PUT /v1/reviews/:reviewId` - update review\
`DELETE /v1/reviews/:reviewId` - delete review

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

## License

[MIT](LICENSE)
