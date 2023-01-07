import db from "../database";
import config from "../config";
import User from "../types/user.type";
import OrderModel from "../models/order.model";

const orderModel = new OrderModel();

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

    // it("Should be an completed method .", () => {
    //   expect(orderModel.completed).toBeDefined();
    // });

    // it("Should be an completed method .", () => {
    //   expect(orderModel.active).toBeDefined();
    // });
  });
});
