import { randomBytes } from "crypto";

import { verifyUser } from "../services/userServices";

function generateAccessCode(length: number): string {
  const bytes = Math.ceil(length * 0.75);
  let accessCode = randomBytes(bytes).toString("base64").slice(0, length);

  accessCode = accessCode.replace(/\//g, "a").replace(/\+/g, "B");
  return accessCode;
}

export async function generateUniqueAccessCode(): Promise<string> {
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
