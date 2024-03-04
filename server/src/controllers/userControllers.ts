import { Request, Response } from "express";

import { findUser, createUser } from "../services/userServices";
import { generateUniqueAccessCode } from "../utils/generateAcessCode";
import { generateToken, generateRefreshToken } from "../services/authServices";

import { isString } from "../interfaces/typeGuards";

export default {
  async createUser(req: Request, res: Response) {
    try {
      const { accessCode } = req.body;

      const userExists = await findUser(accessCode);

      if (userExists) {
        return res.status(400).json({
          error: true,
          status: 400,
          message: "Já existe um usuário com este código de acesso!",
          data: {},
        });
      }

      const user = await createUser(accessCode)

      const token = await generateToken(user.id);
      const refreshToken = await generateRefreshToken(user.id);

      return res.status(201).json({
        error: false,
        status: 201,
        message: "Usuário criado com sucesso!",
        data: {
          user: user.id,
          token,
          refreshToken,
        },
      });
    } catch (error: any) {
      return res.status(500).json({
        error: true,
        status: 500,
        message: error.message,
        data: {},
      });
    }
  },

  async createAccessCode(req: Request, res: Response) {
    try {
      const accessCode = await generateUniqueAccessCode();

      return res.status(200).json({
        error: false,
        status: 201,
        message: "Código de acesso criado com sucesso!",
        data: {
          accessCode,
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

  async findUser(req: Request, res: Response) {
    try {
      const  { accessCode } = req.query;

      if(!isString(accessCode)){
        return res.status(400).json({
          error: true,
          status: 400,
          message: "O código de acesso fornecido é inválido!",
          data: {},
        });
      }

      const user = await findUser(accessCode);

      if (!user) {
        return res.status(404).json({
          error: true,
          status: 404,
          message: "Não foi encontrado um usuário com esse código de acesso!",
          data: {},
        });
      }

      const token = await generateToken(user.id);
      const refreshToken = await generateRefreshToken(user.id);

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Usuário encontrado!",
        data: {
          user: user.id,
          token,
          refreshToken,
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
