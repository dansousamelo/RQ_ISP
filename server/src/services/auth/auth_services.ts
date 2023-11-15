import jwt from "jsonwebtoken";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const secretKey =
  process.env.TOKEN_SECRET_KEY || crypto.randomBytes(32).toString("hex");

export function generateToken(user_id: string): string {
  const expiresIn = "15m";
  return jwt.sign({ user_id }, secretKey, { expiresIn });
}

export function generateRefreshToken(user_id: string): string {
  const expiresIn = "1w";
  return jwt.sign({ user_id }, secretKey, { expiresIn });
}

export function getSecretKey(): string {
  return secretKey;
}