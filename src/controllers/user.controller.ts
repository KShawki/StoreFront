import { Request, Response, NextFunction } from "express";
import UserModel from "../models/user.model";
import User from "../types/user.type";

const userModel = new UserModel();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userInfo = req.body;
    const user = await userModel.create(userInfo);
    res.json({
      status: "200 OK ✅",
      data: userInfo,
    });
  } catch (error) {
    next();
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    const Users = await userModel.index();
    res.json(Users);
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = req.body.id;

    const user = await userModel.show(id);
    res.json({ message: id});
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};
