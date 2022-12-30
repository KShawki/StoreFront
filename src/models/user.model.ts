import User from "../types/user.type";
import db from "../database";
import config from "../config";
import bcrypt from "bcrypt";

// USER EndPoints
// --- Index [token required] : `'/users' [GET]`
// --- Show [token required] : `'/users/:id' [GET]`
// --- Create [token required] : `'/users' [POST]`
// --- Authenticate (args: username, password) [token required] : `'/auth' [GET]`
// --- AddProductToOrder (args: orderId, productId, quantity) [token required]: `'/users/:id/add-product-to-order' [POST]`
// --- RemoveProductFromOrder (args: orderId, productId) [token required] `'/users/:id/remove-product-from-order' [DELETE]`

const hashPass = (password: string) => {
  const salt = parseInt(config.salt as string, 10);
  const pepper = config.pepper;
  return bcrypt.hashSync(`${password}${config.pepper}`, salt);
};

class UserModel {
  // [POST]: create new user
  async create(user: User): Promise<User> {
    try {
      const connection = await db.connect();
      const sql =
        "INSERT INTO users (email, username , first_name, last_name, password) VALUES ($1, $2, $3, $4, $5) RETURNING *;";

      const result = await connection.query(sql, [
        user.email,
        user.username,
        user.firstname,
        user.lastname,
        hashPass(user.password as string),
      ]);
      const { id, username, first_name, last_name, password } = result.rows[0];
      connection.release();
      return user;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  // [GET]: get all users
  async index(): Promise<User[]> {
    try {
      // connect with database
      const connection = await db.connect();
      const sql = `SELECT * FROM users;`;
      const result = await connection.query(sql);

      // close connection
      connection.release();

      // return the results
      return result.rows;
    } catch (error) {
      // handle the error if happen
      throw new Error(`Error: ${error}`);
    }
  }

  // [GET]: get specific user
  async show(id: string): Promise<User> {
    try {
      // connect with database
      const connection = await db.connect();
      const sql = `SELECT * FROM users WHERE id=($1);`;
      const result = await connection.query(sql, [id]);

      // close connection
      connection.release();

      // return the results
      return result.rows[0];
    } catch (error) {
      // handle the error if happen
      throw new Error(`Error: ${error}`);
    }
  }

  async auth(email: string, password: string): Promise<User | undefined> {
    try {
      // connect with DB
      const connection = await db.connect();

      // query to retrive all data
      const sql = `SELECT password FROM users WHERE email=($1)`;

      // execute the query
      const result = await connection.query(sql, [email]);

      // check the results if not null
      if (result.rows.length) {
        // check if the pass is valid or not by compare between two password
        // (user and hashed password) using compare sync built in function
        const { password: hashPass } = result.rows[0];
        const isPasswordValid = bcrypt.compareSync(
          `${password}${config.pepper}`,
          hashPass
        );

        // return the password and email if exsist
        if (isPasswordValid) {
          const userInfo = await connection.query(
            `SELECT id, email, username, first_name, last_name FROM users where email=($1)`,
            [email]
          );
          return userInfo.rows[0];
        }

        // close connections
        connection.release();
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}

export default UserModel;
