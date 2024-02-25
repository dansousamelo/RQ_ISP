import bcrypt from "bcrypt";
import { prisma } from "../db/prismaClient";

import { User } from "../interfaces/types";

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
