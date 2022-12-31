<h2 align="center">Build a Storefront Backend</h2>
<p align="center">Advanced Full-Stack Nanodegree - Udacity</p>

## About The Project

Build a JavaScript API based on a requirements given by the stakeholders. You will architect the database, tables, and columns to fulfill the requirements. Create a RESTful API to be accessible to the frontend developer. You will also have written test, secured user information with encryption, and provide tokens for integration into the frontend.

<hr />

### USAGE

```shell
$ git clone git@github.com:KShawki/StoreFront.git
$ cd StoreFront;
$ npm install
$ npx db-migrate up
$ npm run dev
```

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

| Syntax               | METHOD | LINK                                          |
| -------------------- | ------ | --------------------------------------------- |
| HOME                 | GET    | `http://localhost:3000/`                      |
| CREATE USER          | POST   | `http://localhost:3000/api/users/create`      |
| GET ALL USER         | GET    | `http://localhost:3000/api/users/index`       |
| GET SPECIFIC USER    | GET    | `http://localhost:3000/api/users/show/:id`    |
| CREATE PRODUCT       | POST   | `http://localhost:3000/api/proudcts/create`   |
| GET ALL PRODUCT      | GET    | `http://localhost:3000/api/products/index`    |
| GET SPECIFIC PRODUCT | GET    | `http://localhost:3000/api/products/show/:id` |
