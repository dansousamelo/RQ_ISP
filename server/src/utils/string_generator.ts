import { randomBytes } from "crypto";

export function generateAccessCode(length: number): string {
    const bytes = Math.ceil(length * 0.75);
    return randomBytes(bytes).toString('base64').slice(0, length);
}