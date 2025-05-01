import { zValidator } from "@hono/zod-validator";

import { authSchema } from "../../schema/auth";
import userService from "../../services/userService";
import { DBMessage } from "../../types/DBResponse";
import { Hono } from "hono";

const authRouter = new Hono()
  .post("/register", zValidator("json", authSchema), async (c) => {
    const { email, password } = c.req.valid("json");
    try {
      const registerResult = await userService.createUser({
        email,
        password,
      });

      if (!registerResult)
        return c.json({ message: "User already exists" }, 400);

      const { id, email: registeredEmail, role } = registerResult;
      return c.json(
        {
          message: DBMessage.USER_CREATED,
          user: { id, email: registeredEmail, role },
        },
        200
      );
    } catch {
      return c.json({ message: "Could not create a user" }, 500);
    }
  })
  .post("/login", zValidator("json", authSchema), async (c) => {
    const { email, password } = c.req.valid("json");
    try {
      const registerResult = await userService.authenticateUser({
        email,
        password,
      });

      if (!registerResult)
        return c.json({ message: "Could not create a user" }, 400);

      const token = registerResult;
      return c.json(
        {
          message: DBMessage.USER_CREATED,
          token,
        },
        200
      );
    } catch {
      return c.json({ message: "Could not sign in" }, 500);
    }
  });

export default authRouter;
