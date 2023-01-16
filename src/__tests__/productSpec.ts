import db from "../database";
import config from "../config";
import User from "../types/user.type";
import ProductModel from "../models/product.model";
import Product from "../types/product.type";

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

describe("Create Product Test Suite ", () => {
  const product = {
    name: "test Product",
    price: 404040,
    category: "Laptop",
  } as unknown as Product;

  beforeAll(async () => {
    const createdOrder = await productModel.create(product);
  });

  afterAll(async () => {
    const connection = await db.connect();
    const sql = `DELETE FROM products where name = '${product.name}';`;
    await connection.query(sql);
    connection.release();
  });

  it("==> must return an product", async () => {
    const result = await productModel.index();
    expect(result.length).toBeGreaterThan(0);
  });

});
