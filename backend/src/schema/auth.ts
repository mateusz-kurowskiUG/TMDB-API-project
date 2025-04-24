import * as z from "zod";
import { passwordRegex } from "../data/regex";

export const authSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().regex(passwordRegex).trim(),
});
