import db from "../database";
import config from "../config";
import User from "../types/user.type";
import OrderModel from "../models/order.model";
import { Order } from "../types/order.type";
import ProductModel from "../models/product.model";
import { create } from "../controllers/user.controller";
import UserModel from "../models/user.model";

const orderModel = new OrderModel();
const productModel = new ProductModel();
const userModel = new UserModel();

describe("orderModel TestSuite", () => {
  describe("==> Test Methods Exsist", () => {
    it("Should be an create method", () => {
      expect(orderModel.create).toBeDefined();
    });

    it("==> Should be an show method .", () => {
      expect(orderModel.show).toBeDefined();
    });

    it("==> Should be an index method .", () => {
      expect(orderModel.index).toBeDefined();
    });

    it("==> Should be a add product to order Method .", () => {
      expect(orderModel.addProductToOrder).toBeDefined();
    });

    it("==> Should be a get product in order Method .", () => {
      expect(orderModel.getProductsOnOrder).toBeDefined();
    });
  });
});

describe("Create Order Test Suite ", () => {
  const product = {
    name: "test",
    price: 100,
    category: "test",
  };

  const order = {
    user_id: 1,
    product_id: 1,
    status: "active",
  } as unknown as Order;

  const user = {
    email: "test1@gmail.com",
    username: "test",
    firstname: "Khaled",
    lastname: "Shawki",
    password: "test",
  } as unknown as User;

  beforeAll(async () => {
    const createdProduct = await productModel.create(product);
    const createdOrder = await orderModel.create(order);
    const createdUser = await userModel.create(user);
  });

  afterAll(async () => {
    const connection = await db.connect();
    const sql = `DELETE FROM orders where user_id = '${order.user_id}';`;
    const sqll = `DELETE FROM users where email = '${user.email}'`;
    const res = await connection.query(sql);
    const ress = await connection.query(sqll); 
    connection.release();
  });

  it("==> must return an order", async () => {
    const result = await orderModel.index();
    expect(result.length).toBeGreaterThan(0);
  });
});
