import db from "../database";
import config from "../config";
import User from "../types/user.type";
import OrderModel from "../models/order.model";

const orderModel = new OrderModel();

const sql = "";

describe("orderModel TestSuite .", () => {
  describe("Test Methods Exsist", () => {
    it("Should be an create method", () => {
      expect(orderModel.create).toBeDefined();
    });

    it("Should be an show method .", () => {
      expect(orderModel.show).toBeDefined();
    });

    it("Should be an index method .", () => {
      expect(orderModel.index).toBeDefined();
    });

    it("should be a add product to order Method .", () => {
      expect(orderModel.addProductToOrder).toBeDefined();
    });

    it("should be a get product in order Method .", () => {
      expect(orderModel.getProductsOnOrder).toBeDefined();
    });
  });
});
