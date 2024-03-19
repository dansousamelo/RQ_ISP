import { Request, Response } from "express";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { generateToken } from "../services/authServices";

const secretKey =
  process.env.TOKEN_SECRET_KEY || crypto.randomBytes(32).toString("hex");

export default {
  async generateToken(req: Request, res: Response) {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({
        error: false,
        status: 401,
        message: "refreshToken não informado!",
        data: {},
      });
    }

    try {
      const decoded = jwt.verify(refreshToken, secretKey) as
        | { userId: string }
        | undefined;

      if (!decoded || !decoded.userId) {
        return res.status(401).json({
          error: true,
          status: 201,
          message: "Formato inválido de token de acesso!",
          data: {},
        });
      }

      const newToken = generateToken(decoded.userId);

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Novo token gerado!",
        data: {
          token: newToken,
        },
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        error: true,
        status: 500,
        message: error.message,
        data: {},
      });
    }
  },
};
