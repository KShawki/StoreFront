import User from "../types/user.type";
import db from "../database";

// USER EndPoints
// --- Index [token required] : `'/users' [GET]`
// --- Show [token required] : `'/users/:id' [GET]`
// --- Create [token required] : `'/users' [POST]`
// --- Authenticate (args: username, password) [token required] : `'/auth' [GET]`
// --- AddProductToOrder (args: orderId, productId, quantity) [token required]: `'/users/:id/add-product-to-order' [POST]`
// --- RemoveProductFromOrder (args: orderId, productId) [token required] `'/users/:id/remove-product-from-order' [DELETE]`

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
        user.password,
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

  // get specific user
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
}

export default UserModel;
