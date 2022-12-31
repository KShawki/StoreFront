import { Request, Response } from "express";
import Order from "../types/order.type";
import OrderModel from "../models/order.model";

const orderModel = new OrderModel();

export const create = async (req: Request, res: Response) => {
  try {
    const order = {
      user_id: req.body.user_id,
      product_id: req.body.product_id,
      status: req.body.status,
    };

    // execute the product;
    const orderr = await orderModel.create(order);
    res.json({
      status: "200 OK ✅",
      data: orderr,
    });
  } catch (error) {
    throw error;
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    const Orders = await orderModel.index();
    res.json({
      status: "200 OK ✅",
      data: Orders,
    });
  } catch (error) {
    throw error;
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const order = await orderModel.show(id);
    res.json({
      status: "200 OK ✅",
      data: order,
    });
  } catch (error) {
    throw error;
  }
};

export const completed = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const order = await orderModel.completed(id);
    res.json({
      status: "200 OK ✅",
      data: order,
    });
  } catch (error) {
    throw error;
  }
};

export const active = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const order = await orderModel.active(id);
    res.json({
      status: "200 OK ✅",
      data: order,
    });
  } catch (error) {
    throw error;
  }
};
