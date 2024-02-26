import { randomBytes } from "crypto";

import { findUser } from "../services/userServices";

import { ZERO, FIVE } from "../constants/constants";

function generateAccessCode(length: number): string {
  const bytes = Math.ceil(length * 0.75);
  let accessCode = randomBytes(bytes).toString("base64").slice(ZERO, length);

  accessCode = accessCode.replace(/\//g, "a").replace(/\+/g, "B");
  return accessCode;
}

export async function generateUniqueAccessCode(): Promise<string> {
  let accessCode = generateAccessCode(23);

  for (let i = ZERO; i < FIVE; i++) {
    const user = await findUser(accessCode);
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
