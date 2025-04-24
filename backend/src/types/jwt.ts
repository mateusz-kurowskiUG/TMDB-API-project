import type { ROLE } from "./Role";
import type { User } from "./users";

export interface JwtToken {
  payload: JwtTokenPayload;
  exp: number;
  sub: string;
  role: ROLE;
  nbf: number;
  iat: number;
}

export type JwtTokenPayload = Omit<User, "password">;
