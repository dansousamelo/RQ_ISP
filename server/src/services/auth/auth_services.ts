import jwt from "jsonwebtoken";
import crypto from "crypto";
import dotenv from "dotenv"; 

dotenv.config();

const secretKey =
  process.env.TOKEN_SECRET_KEY || crypto.randomBytes(32).toString("hex");

export function generateToken(user_id: string): string {
  const expirationMinutes = 1060
  const expirationSeconds = expirationMinutes * 60
  return jwt.sign({ user_id }, secretKey, { expiresIn: expirationSeconds });
}

export function generateRefreshToken(user_id: string): string {
  const secondsPerMinute = 60;
  const minutesPerHour = 60;
  const hoursPerDay = 24;
  const daysPerWeek = 7;

  const secondsPerWeek = secondsPerMinute * minutesPerHour * hoursPerDay * daysPerWeek;

  return jwt.sign({ user_id }, secretKey, { expiresIn: secondsPerWeek });
}

export function getSecretKey(): string {
  return secretKey;
}