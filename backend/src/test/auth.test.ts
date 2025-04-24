import { expect, test } from "bun:test";
import type { JwtTokenPayload } from "../types/jwt";
import { ROLE } from "../types/Role";
import { createToken, decryptTokenStr } from "../utils/auth";

const payload: JwtTokenPayload = {
  id: "bq9od3zupn1ray55a2qgklfr",
  email: "test@test.com",
  role: ROLE.USER,
};

test("jwt", async () => {
  const encryted = await createToken(payload);
  expect(encryted).not.toBe(payload);
  const decrypted = await decryptTokenStr(encryted);
  const decryptedPayload = decrypted.payload as JwtTokenPayload;

  expect(decryptedPayload).toMatchObject(payload);
});
