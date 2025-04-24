import { zValidator } from "@hono/zod-validator";

import { authSchema } from "../../schema/auth";
import userService from "../../services/userService";
import { DBMessage } from "../../types/DBResponse";
import { Hono } from "hono";

const authRouter = new Hono()
  .post(
    "/register",
    zValidator("json", authSchema),
    async (c): Promise<void> => {
      const { email, password } = c.req.valid("json");
      try {
        const registerResult = await userService.createUser({
          email,
          password,
        });

        if (!registerResult) {
          c.json({ message: "Could not create a user" }, 400);
          return;
        }
        const { id, email: registeredEmail, role } = registerResult;
        c.json(
          {
            message: DBMessage.USER_CREATED,
            user: { id, email: registeredEmail, role },
          },
          200
        );
      } catch {
        c.json({ message: "Could not create a user" }, 500);
      }
    }
  )
  .post("/login", zValidator("json", authSchema), async (c): Promise<void> => {
    const { email, password } = c.req.valid("json");
    try {
      const registerResult = await userService.authenticateUser({
        email,
        password,
      });

      if (!registerResult) {
        c.json({ message: "Could not create a user" }, 400);
        return;
      }
      const { id, email: registeredEmail, role } = registerResult;
      c.json(
        {
          message: DBMessage.USER_CREATED,
          user: { id, email: registeredEmail, role },
        },
        200
      );
    } catch {
      c.json({ message: "Could not create a user" }, 500);
    }
  });

export default authRouter;
