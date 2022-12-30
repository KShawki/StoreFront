/* Replace with your SQL commands */

-- to run migrate (npx db-migrate up/down); 

CREATE EXTENSION "uuid-ossp";

CREATE TABLE users(
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  email varchar(64) unique, 
  username varchar(64) not null,
  first_name varchar(64) not null, 
  last_name varchar(64) not null,
  password varchar(255) not null
);  