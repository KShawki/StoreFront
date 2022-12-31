import Product from "../types/product.type";
import db from "../database";
import config from "../config";
import { index } from "../controllers/user.controller";

/**
 * Products
    - Index
    - Show
    - Create [token required]
    - [OPTIONAL] Top 5 most popular products
    - [OPTIONAL] Products by category (args: product category)
 */

class ProductModel {
  // [GET]: Get all Products
  async index(): Promise<Product[]> {
    try {
      // connect with db;
      const connection = await db.connect();

      // write the sql query
      const sql = `SELECT * FROM products;`;
      const result = await connection.query(sql);

      // close connection
      connection.release();

      // return results
      return result.rows;
    } catch (error) {
      // throw error if happen
      throw error;
    }
  }

  // [GET]: Get a specific product
  async show(id: number): Promise<Product> {
    try {
      // connect with db;
      const connection = await db.connect();

      // write the sql query
      const sql = `SELECT * FROM products WHERE id = ($1);`;
      const result = await connection.query(sql, [id]);

      // close connection
      connection.release();

      // return results
      return result.rows[0];
    } catch (error) {
      // throw error if happen
      throw error;
    }
  }

  // [POST]: Create New Product.
  async create(product: Product): Promise<Product> {
    try {
      // connect with db;
      const connection = await db.connect();

      // write the sql query
      const sql = `INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *;`;

      // execute the sql query
      const result = await connection.query(sql, [
        product.name,
        product.price,
        product.category,
      ]);

      // close the db connection
      connection.release();

      // return the result
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

export default ProductModel;
