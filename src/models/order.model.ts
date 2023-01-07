import { Order, OrderProducts } from "../types/order.type";
import db from "../database";
import Product from "../types/product.type";

// ORDER:
// - Current Order by user (args: user id)[token required]

// create custom type to retrive orderPorduct from db
type customOrder = {
  id?: number;
  quantity: number;
  order_id: number;
  product_id: number;
};

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

  // [POST] : Add Product
  async addProductToOrder(
    orderId: number,
    productId: number,
    quantity: number
  ): Promise<OrderProducts> {
    try {
      // connect with db;
      const connection = await db.connect();
      // write a sql query to retrive order data;
      const sql = "SELECT * FROM orders WHERE id=($1)";

      // execute previous sql statements
      const res = await connection.query(sql, [orderId]);

      // show the current order
      console.log(res.rows[0]);

      // write a sql query to insert products on order;
      const sqlInsert = `INSERT INTO orders_products (order_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *`;
      const result = await connection.query(sqlInsert, [
        orderId,
        productId,
        quantity,
      ]);

      // close connection
      connection.release();

      // return results
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // [GET] : Get All Products in Specific Order
  async getProductsOnOrder(orderId: number): Promise<Product[]> {
    try {
      // connect with db
      const connection = await db.connect();

      // write the sql statement to execute
      const sql =
        "SELECT products.* FROM orders_products JOIN products ON orders_products.product_id = products.id WHERE order_id=($1)";

      // execute previous sql statement
      const result = await connection.query(sql, [orderId]);

      // close connection with db
      // connection.release();

      // return results
      return result.rows;
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
        "SELECT * FROM orders where user_id=($1)",
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

  // // [GET] : Get Complete Orders by UserID;
  // async completed(id: number): Promise<Order[]> {
  //   try {
  //     // connect with db
  //     const connection = await db.connect();

  //     // write and execute the query
  //     const result = await connection.query(
  //       "SELECT * FROM orders WHERE user_id =($1) AND status = 't';",
  //       [id]
  //     );

  //     // close the connection;
  //     connection.release();

  //     // retrun the result;
  //     return result.rows;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async active(id: number): Promise<Order[]> {
  //   try {
  //     // connect with db
  //     const connection = await db.connect();

  //     // write and execute the query
  //     const result = await connection.query(
  //       "SELECT * FROM orders WHERE user_id =($1) AND status = 'f';",
  //       [id]
  //     );

  //     // close the connection;
  //     connection.release();

  //     // retrun the result;
  //     return result.rows;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}

export default OrderModel;
