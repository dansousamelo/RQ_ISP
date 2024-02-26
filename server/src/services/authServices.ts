import jwt from "jsonwebtoken";
import crypto from "crypto";
import dotenv from "dotenv";

import { TEN_MINUTES, ONE_HOUR } from "../constants/constants";

dotenv.config();

const secretKey =
  process.env.TOKEN_SECRET_KEY || crypto.randomBytes(32).toString("hex");

export function generateToken(user_id: string): string {
  const expiresIn = TEN_MINUTES;
  return jwt.sign({ user_id }, secretKey, { expiresIn });
}

export function generateRefreshToken(user_id: string): string {
  const expiresIn = ONE_HOUR;
  return jwt.sign({ user_id }, secretKey, { expiresIn });
}

export function getSecretKey(): string {
  return secretKey;
}