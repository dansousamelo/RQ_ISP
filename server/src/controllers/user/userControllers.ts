import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../../db/prismaClient";

import { isString } from "../../interfaces/typeGuards";

import { verifyUser } from "../../services/userServices";
import { generateUniqueAccessCode } from "../../utils/generateAcessCode";

import {
  generateToken,
  generateRefreshToken,
} from "../../services/authServices";

export default {
  async createUser(req: Request, res: Response) {
    try {
      const { accessCode } = req.body;

      const users = await prisma.user.findMany();

      if (
        users.some((user) => bcrypt.compareSync(accessCode, user.access_code))
      ) {
        return res.status(409).json({
          error: true,
          status: 409,
          message: "Já existe um usuário com este código de acesso!",
          data: {},
        });
      }

      const hashedAccessCode = await bcrypt.hash(accessCode, 10);

      const user = await prisma.user.create({
        data: {
          access_code: hashedAccessCode,
        },
      });

      const token = await generateToken(user.id);
      const refreshToken = await generateRefreshToken(user.id);

      return res.status(201).json({
        error: false,
        status: 201,
        message: "Usuário criado com sucesso!",
        data: {
          accessCode,
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
      const accessCode = isString(req.query.accessCode)
        ? req.query.accessCode
        : null;

      const userExists = await verifyUser(accessCode);

      if (!userExists) {
        return res.status(500).json({
          error: true,
          status: 500,
          message: "O código de acesso fornecido é inválido!",
          data: {},
        });
      }

      const token = await generateToken(userExists.id);
      const refreshToken = await generateRefreshToken(userExists.id);

      return res.status(200).json({
        error: false,
        status: 200,
        message: "Usuário encontrado!",
        data: {
          user: {
            id: userExists.id,
            access_code: userExists.access_code,
          },
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
