const x = async (c, next) => {
  const authHeader = c.req.header("Authorization");
  const cookieSession = c.get("authUser"); // from auth-js

  if (cookieSession) {
    return next();
  }

  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    try {
      const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
      const { payload } = await jwtVerify(token, secret);
      c.set("authUser", payload);
    } catch (err) {
      console.error("Invalid token", err);
      return c.json({ message: "Invalid token" }, 401);
    }
  }

  await next();
};
