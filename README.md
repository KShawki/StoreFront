<h3 align="center">Build a Storefront Backend</h3>
<p align="center">Advanced Full-Stack Nanodegree - Udacity</p>

## About The Project

Build a JavaScript API based on a requirements given by the stakeholders. You will architect the database, tables, and columns to fulfill the requirements. Create a RESTful API to be accessible to the frontend developer. You will also have written test, secured user information with encryption, and provide tokens for integration into the frontend.

<hr />

### USAGE

```
  1. create database called store
  2. create environment variables (".env") and add the information required
  3. run the following commands:
```

```shell
$ git clone git@github.com:KShawki/StoreFront.git
$ cd StoreFront;
$ npm install
$ npx db-migrate up
$ npm run dev
```
<small><b>Note:</b> I'll add a postman collection to test api!</small>


<hr />

### Scripts:

```JSON
  "scripts": {
    "dev": "nodemon src/index.ts",
    "build": "tsc",
    "start": "npm run build && node dist/index.js",
    "prettier": "prettier --watch src/**/*.ts",
    "test": "export NODE_ENV && tsc && db-migrate up --env test && tsc && jasmine && db-migrate reset",
    "test:windows": "export NODE_ENV && tsc && db-migrate up --env test && tsc && jasmine && db-migrate reset",
    "migration:up": "db-migrate up"
  }
```

<hr />

### EndPoints

| Syntax                    | METHOD | LINK                                            |
| ------------------------- | ------ | ----------------------------------------------- |
| HOME                      | GET    | `http://localhost:3000/`                        |
| CREATE USER               | POST   | `http://localhost:3000/api/users/create`        |
| GET ALL USER              | GET    | `http://localhost:3000/api/users/index`         |
| GET SPECIFIC USER         | GET    | `http://localhost:3000/api/users/show/:id`      |
| CREATE PRODUCT            | POST   | `http://localhost:3000/api/proudcts/create`     |
| GET ALL PRODUCT           | GET    | `http://localhost:3000/api/products/index`      |
| GET SPECIFIC PRODUCT      | GET    | `http://localhost:3000/api/products/show/:id`   |
| CREATE ORDER              | POST   | `http://localhost:3000/api/orders/create`       |
| GET ALL ORDER             | GET    | `http://localhost:3000/api/orders/index`        |
| GET SPECIFIC ORDER        | GET    | `http://localhost:3000/api/orders/show/1`       |
| Add Product to Order      | POST   | `http://localhost:3000/api/orders/addProduct`   |
| Get All Products On Order | GET    | `http://localhost:3000/api/orders/getProduct/1` |

### Environement Variable

```shell
PORT = 3000
NODE_ENV=dev

# DB Configration
POSTGRES_HOST = localhost
POSTGRES_PORT = 5432
POSTGRES_DB = store
POSTGRES_DB_TEST = store_test
POSTGRES_USER = postgres
POSTGRES_PASSWORD = YourPasswordHere

# Hashing Password
BYCRYPT_PASSWORD = YourPasswordHere
SALT_ROUNDS = 10

# JSON Web Token (JWT)
TOKEN = YourPasswordHere
```
