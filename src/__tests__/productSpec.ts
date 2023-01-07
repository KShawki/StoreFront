import db from "../database";
import config from "../config";
import User from "../types/user.type";
import ProductModel from "../models/product.model";

const productModel = new ProductModel();

describe("productModel TestSuite .", () => {
  describe("Test Methods Exsist", () => {
    it("Should be an create method", () => {
      expect(productModel.create).toBeDefined();
    });

    it("Should be an show method .", () => {
      expect(productModel.show).toBeDefined();
    });

    it("Should be an index method .", () => {
      expect(productModel.index).toBeDefined();
    });
  });
});
