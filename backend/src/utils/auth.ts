import crypto from "node:crypto";
import type { JwtTokenPayload } from "../types/jwt";
import * as jose from "jose";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_ISSUER = process.env.JWT_ISSUER;
const JWT_AUDIENCE = process.env.JWT_AUDIENCE;

const encryptionAlgorithm = process.env.CRYPTO_METHOD;
const secretKey = process.env.CRYPTO_KEY;
const secretIv = process.env.CRYPTO_IV;
if (!secretKey || !secretIv || !encryptionAlgorithm || !JWT_SECRET)
  throw new Error("Secret key, IV, crypto algorithm . Check your config.");

if (!JWT_SECRET || !JWT_ISSUER || !JWT_AUDIENCE)
  throw new Error("JWT secret, audience or issuer missing");

const decodedJwtSecret = Buffer.from(JWT_SECRET, "base64");
const key = crypto
  .createHash("sha512")
  .update(secretKey)
  .digest("hex")
  .substring(0, 32);

const iv = crypto
  .createHash("sha512")
  .update(secretIv)
  .digest("hex")
  .substring(0, 16);

if (!JWT_SECRET)
  throw new Error("JWT secret cannot be null. Check secret config");

export const hashPassword = async (password: string) =>
  await Bun.password.hash(password);

export const checkPasswordMatch = async (
  candidate: string,
  real: string
): Promise<boolean> => await Bun.password.verify(candidate, real);

export const encryptText = (text: string) => {
  const cipher = crypto.createCipheriv(encryptionAlgorithm, key, iv);

  return Buffer.from(
    cipher.update(text, "utf-8", "hex") + cipher.final("hex")
  ).toString("base64");
};

export const decryptText = (text: string) => {
  const buffer = Buffer.from(text, "base64");
  const decipher = crypto.createDecipheriv(encryptionAlgorithm, key, iv);
  return (
    decipher.update(buffer.toString("utf-8"), "hex", "utf-8") +
    decipher.final("utf-8")
  );
};

export const createToken = async (payload: JwtTokenPayload) =>
  await new jose.EncryptJWT({ payload })
    .setProtectedHeader({
      alg: "dir",
      enc: "A128CBC-HS256",
    })
    .setIssuedAt()
    .setIssuer(JWT_ISSUER)
    .setAudience(JWT_AUDIENCE)
    .setExpirationTime("7d")
    .encrypt(decodedJwtSecret);

export const decryptTokenStr = async (jwt: string) =>
  (
    await jose.jwtDecrypt(jwt, decodedJwtSecret, {
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE,
    })
  ).payload;
