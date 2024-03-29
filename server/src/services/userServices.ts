import bcrypt from "bcrypt";
import { prisma } from "../db/prismaClient";

import { User } from "../interfaces/types";
import { isString } from "../interfaces/typeGuards";

export async function findUser(accessCode: string | null) {
  if (!accessCode) {
    throw new Error("Não foi fornecido um código de acesso!");
  }

  const users = await prisma.user.findMany();

  const userExists = users.find((user: User) => {
    const isMatch = bcrypt.compareSync(accessCode, user.accessCode);
    return isMatch;
  });

  return userExists || null;
}

export async function findUserById(userId: string) {
  try {
    const userExists = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      return null;
    }

    return userExists;
  } catch (error) {
    throw error;
  }
}

export async function createUser(accessCode: string): Promise<User> {
  try {
    if (!isString(accessCode)) {
      throw new Error("Fornaça um código de acesso válido!");
    }

    const hashedAccessCode = await bcrypt.hash(accessCode, 10);

    const user = await prisma.user.create({
      data: {
        accessCode: hashedAccessCode,
      },
    });

    return user;
  } catch (error) {
    throw new Error("Não foi possível criar um usuário!");
  }
}
