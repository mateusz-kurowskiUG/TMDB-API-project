import * as z from "zod";
import { passwordRegex } from "../data/regex";

export const registerUserSchema = z.object({
  email: z.string().email(),
  password: z.string().regex(passwordRegex),
});

export const;
