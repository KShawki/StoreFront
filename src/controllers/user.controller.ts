import { Request, Response, NextFunction } from "express";
import UserModel from "../models/user.model";
import User from "../types/user.type";
import jwt from "jsonwebtoken";
import config from "../config";

const userModel = new UserModel();

export const create = async (req: Request, res: Response) => {
  try {
    const userInfo = req.body;
    const user = await userModel.create(userInfo);
    res.json({
      status: "200 OK ✅",
      data: userInfo,
    });
  } catch (error) {
    throw new Error(`Error: ${error}`);
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
    const id = req.params.id as string;
    const user = await userModel.show(id);
    res.json({ message: "success ✅", data: user });
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

export const auth = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.auth(email, password);
    const token = jwt.sign({ user }, config.tokenSecret as string);

    if (!user) {
      return res.status(401).json({
        status: "401 ❌",
        message: "username or password don't match",
      });
    }

    return res.json({
      status: "success 😘",
      data: { ...user, token },
      message: `User auth successfully`,
    });
  } catch (error) {
    throw error;
  }
};
