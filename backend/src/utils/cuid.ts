import { init } from "@paralleldrive/cuid2";
const fingerprint = process.env.CUID_FINGERPRINT;
export const cuidLength = 16;
export const createCuid2 = init({
  random: Math.random,
  length: cuidLength,
  fingerprint,
});
