import jwt from "jsonwebtoken";
import crypto from "crypto";
import dotenv from "dotenv";

import { TEN_MINUTES, ONE_HOUR } from "../constants/constants";

dotenv.config();

const secretKey = process.env.TOKEN_SECRET_KEY;

export function generateToken(user_id: string): string {
  try{
    if(!secretKey){
      throw new Error("Não foi possível verificar a secret key!")
    }

    const expirationMinutes = 1060
    const expirationSeconds = expirationMinutes * 60
    return jwt.sign({ user_id }, secretKey, { expiresIn: expirationSeconds });
  } catch(error){
    throw error
  }
}

export function generateRefreshToken(user_id: string): string {
  if(!secretKey){
    throw new Error("Não foi possível verificar a secret key!")
  }
  const secondsPerMinute = 60;
  const minutesPerHour = 60;
  const hoursPerDay = 24;
  const daysPerWeek = 7;

  const secondsPerWeek = secondsPerMinute * minutesPerHour * hoursPerDay * daysPerWeek;

  return jwt.sign({ user_id }, secretKey, { expiresIn: secondsPerWeek });
}

export function getSecretKey(): string {
  try{
    if(!secretKey){
      throw new Error("Não foi possível verificar a secret key!")
    }
    return secretKey;
  } catch(error) {
    throw error;
  }
}