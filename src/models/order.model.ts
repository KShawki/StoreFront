import Order from "../types/order.type";
import db from "../database";

// ORDER:
// - Current Order by user (args: user id)[token required]

class OrderModel {
  // [POST] : Create an Order
  async create(order: Order): Promise<Order> {
    try {
      // connect with db;
      const connection = await db.connect();
      // write a sql query to insert order data;
      const sql =
        "INSERT INTO orders (user_id, status) VALUES($1, $2) RETURNING *";

      // execute previous sql statements
      const result = await connection.query(sql, [order.user_id, order.status]);

      // close connection
      connection.release();

      // return results
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // [GET] : Get All Orders;
  async index(): Promise<Order[]> {
    try {
      // connect with db
      const connection = await db.connect();

      // write and execute the query
      const result = await connection.query("SELECT * FROM orders");

      // close the connection;
      connection.release();

      // retrun the result;
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  // [GET] : Get Specific Order;
  async show(id: number): Promise<Order> {
    try {
      // connect with db
      const connection = await db.connect();

      // write and execute the query
      const result = await connection.query(
        "SELECT * FROM orders where id=($1)",
        [id]
      );

      // close the connection;
      connection.release();

      // retrun the result;
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

export default OrderModel;
