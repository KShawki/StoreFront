/* Replace with your SQL commands */

CREATE TABLE users(
  id serial primary key, 
  email varchar(64) unique, 
  username varchar(64) not null,
  first_name varchar(64) not null, 
  last_name varchar(64) not null,
  password varchar(255) not null
); 