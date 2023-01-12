# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index
- Show
- Create [token required]

#### Users

- Index [token required]
- Show [token required]
- Create [token required]

#### Orders

- Current Order by user (args: user id)[token required]

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

## Data Shapes

#### Product

- id
- name
- price
- [OPTIONAL] category

#### User

- id
- firstName
- lastName
- password

#### Orders

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

## Models

### User

| Field      | Data Type        | Restrication        |
| ---------- | ---------------- | ------------------- |
| id         | Integer          | SERIAL, PRIMARY KEY |
| email      | String (64 char) | UNIQUE, REQUIRED    |
| password   | String (64 char) | NOT NULL            |
| first_name | String (64 char) | NOT NULL            |
| last_name  | String (64 char) | NOT NULL            |

### Products

| Field    | Data Type         | Restrication        |
| -------- | ----------------- | ------------------- |
| id       | Integer           | SERIAL, PRIMARY KEY |
| name     | String (100 char) | REQUIRED, NOT NULL  |
| price    | Integer           | NOT NULL            |
| category | String (50 char)  | NOT NULL            |

### Orders

| Field        | Data Type                       | Restrication                           |
| ------------ | ------------------------------- | -------------------------------------- |
| id           | Integer                         | SERIAL, PRIMARY KEY                    |
| user_id (FK) | Integer                         | NOT NULL, REFERENCES users(id)         |
| status       | status ("active" OR "complete") | REQUIRED, NOT NULL, Default = "Active" |

### Order_Product

| Field           | Data Type | Restrication                      |
| --------------- | --------- | --------------------------------- |
| id              | Integer   | SERIAL, PRIMARY KEY               |
| quantity        | Integer   | NOT NULL                          |
| order_id (FK)   | Integer   | NOT NULL, REFERENCES orders(id)   |
| product_id (FK) | Integer   | NOT NULL, REFERENCES products(id) |

### Note: All End Points is Defined in README.md
