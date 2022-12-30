import dotenv from "dotenv";
dotenv.config();

const {
  PORT,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_DB_TEST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  NODE_ENV,
  BYCRYPT_PASSWORD,
  SALT_ROUNDS,
  TOKEN,
} = process.env;

export default {
  port: PORT,
  host: POSTGRES_HOST,
  dbPort: POSTGRES_PORT,
  database: NODE_ENV === "dev" ? POSTGRES_DB : POSTGRES_DB_TEST,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  pepper: BYCRYPT_PASSWORD,
  salt: SALT_ROUNDS,
  tokenSecret: TOKEN,
};
