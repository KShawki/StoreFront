import ProductModel from "../models/product.model";
import Product from "../types/product.type";
import { Request, Response } from "express";

const productModel = new ProductModel();

export const create = async (req: Request, res: Response) => {
  try {
    const productInfo = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    };

    // execute the product;
    const product = await productModel.create(productInfo);
    res.json({
      status: "200 OK ✅",
      data: product,
    });
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    const Products = await productModel.index();
    res.json({
      status: "200 OK ✅",
      data: Products,
    });
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const product = await productModel.show(id);
    res.json({
      status: "200 OK ✅",
      data: product,
    });
  } catch (error) {
    throw error;
  }
};
