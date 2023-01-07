-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
--   id            uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

CREATE TABLE users (
  id            SERIAL PRIMARY KEY,
  email         varchar(64) unique, 
  username      varchar(64) not null,
  first_name    varchar(64) not null, 
  last_name     varchar(64) not null,
  password      varchar(255) not null
);  

CREATE TABLE products (
  id            SERIAL PRIMARY KEY,
  name          VARCHAR(100) NOT NULL,
  price         INTEGER NOT NULL,
  category      VARCHAR(50) NULL
);

CREATE TABLE orders (
  id            SERIAL PRIMARY KEY,
  user_id       INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status        VARCHAR(50) NOT NULL CHECK ("status" IN('active', 'complete')) DEFAULT 'active' 
);

CREATE TABLE orders_products(
  id            SERIAL PRIMARY KEY,
  quantity      INTEGER NOT NULL,
  order_id      INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id    INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE
);




