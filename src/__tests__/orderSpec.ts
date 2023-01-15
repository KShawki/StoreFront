import db from "../database";
import config from "../config";
import User from "../types/user.type";
import OrderModel from "../models/order.model";
import { Order } from "../types/order.type";

const orderModel = new OrderModel();

const sql = "";

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
  const order = {
    user_id: 1,
    product_id: 1,
    status: 0,
  } as unknown as Order;

  beforeAll(async () => {
    const createdOrder = await orderModel.create(order);
  });

  afterAll(async () => {
    // const connection = await db.connect();
    // const sql = `DELETE FROM orders;`;
    // await connection.query(sql);
    // connection.release();
    console.log(`==> afterAll in async create order test suite was called`);
  });

  it("==> must return an order", async () => {
    const result = await orderModel.index();
    expect(result).toContain(order);
  });
});
