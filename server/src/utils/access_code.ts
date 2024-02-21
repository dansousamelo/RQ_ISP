import { randomBytes } from "crypto";

export function generateAccessCode(length: number): string {
    const bytes = Math.ceil(length * 0.75);
    let accessCode = randomBytes(bytes).toString('base64').slice(0, length);

    accessCode = accessCode.replace(/\//g, '-').replace(/\+/g, '-');
    return accessCode;
}