import { Request, Response, NextFunction } from "express";
import crypto from "crypto";
import jwt, { JwtPayload } from "jsonwebtoken";

import { getErrorMessage } from "../utils/errorMessage";

const secretKey = process.env.TOKEN_SECRET_KEY;

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if(!secretKey){
      throw new Error("Não foi possível verificar a secret key!")
    }
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        error: true,
        status: 400,
        message: "Forneça um token de acesso válido!",
        data: {},
      });
    }

    const decoded = jwt.verify(token, secretKey);
    if (!decoded) {
      return res.status(401).json({
        error: true,
        status: 400,
        message: "Forneça um token de acesso válido!",
        data: {},
      });
    }
    (req as CustomRequest).token = decoded;

    next();
  } catch (error) {
    return res.status(500).json({
      error: true,
      status: 500,
      message: getErrorMessage(error),
      data: {},
    });
  }
};
