import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../../db";
import { generateAccessCode } from "../../utils/access_code";
import {
  generateToken,
  generateRefreshToken,
} from "../../services/auth/auth_services";
import { isString } from "../../interfaces/type_guards";
import { User } from "../../interfaces/types";

export async function verifyUser(accessCode: string | null) {
  if (!accessCode) {
    throw new Error("Não foi fornecido um código de acesso!");
  }

  const users = await prisma.user.findMany();

  const userExists = users.find((user: User) => {
    const isMatch = bcrypt.compareSync(accessCode, user.access_code);
    return isMatch;
  });

  return userExists || null;
}

async function generateUniqueAccessCode(): Promise<string> {
  let accessCode = generateAccessCode(23);
  const maxAttempts = 5;

  for (let i = 0; i < maxAttempts; i++) {
    const user = await verifyUser(accessCode);
    if (user) {
      accessCode = generateAccessCode(23);
    } else {
      return accessCode;
    }
  }

  throw new Error(
    "Não foi possível gerar um código de acesso único após várias tentativas."
  );
}

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
