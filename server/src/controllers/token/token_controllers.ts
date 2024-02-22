import { Request, Response } from "express";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { generateToken } from "../../services/auth/auth_services";

const secretKey =
  process.env.TOKEN_SECRET_KEY || crypto.randomBytes(32).toString("hex");


export default {
  async generateRefreshToken(req: Request, res: Response) {
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
        | { user_id: string }
        | undefined;

      if (!decoded || !decoded.user_id) {
        return res.status(401).json({
          error: true,
          status: 201,
          message: "Formato inválido de token de acesso!",
          data: {},
        });
      }

      const newToken = generateToken(decoded.user_id);

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Novo refreshToken gerado!",
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
