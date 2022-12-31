import jwt from "jsonwebtoken";
import config from "../config";
import { NextFunction, Request, Response } from "express";

const validate = (req: Request, _res: Response, next: NextFunction) => {
  try {
    // get AuthHeader:
    const authHeader = req.get("auth");
    if (authHeader) {
      const bearer = authHeader.split(" ")[0].toLowerCase();
      const token = authHeader.split(" ")[1];

      if (token && bearer === "bearer") {
        const decode = jwt.verify(token, config.tokenSecret as string);
        if (decode) {
          next();
        } else {
          console.log(`Error! .. `);
          next();
        }
      }
    } else {
      next();
    }
  } catch (error) {
    throw error;
  }
};

export default validate;
