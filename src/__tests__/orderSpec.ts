import db from "../database";
import config from "../config";
import User from "../types/user.type";
import OrderModel from "../models/order.model";
import { Order } from "../types/order.type";
import ProductModel from "../models/product.model";

const orderModel = new OrderModel();
const productModel = new ProductModel();

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

  beforeAll(async () => {
    const createdProduct = await productModel.create(product);
    const createdOrder = await orderModel.create(order);
  });

  afterAll(async () => {
    const connection = await db.connect();
    const sql = `DELETE FROM orders where user_id = '${order.user_id}';`;
    await connection.query(sql);
    connection.release();
  });

  it("==> must return an order", async () => {
    const result = await orderModel.index();
    expect(result.length).toBeGreaterThan(0);
  });
});
