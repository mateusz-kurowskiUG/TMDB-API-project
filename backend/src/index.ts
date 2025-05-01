// import usersRouter from "./api/routes/users.routes";
// import TMDBRouter from "./api/routes/TMDB.routes";
// import watchlistRouter from "./api/routes/watchlist.routes";
// import playlistsRouter from "./api/routes/playlists.routes";
// import moviesRouter from "./api/routes/movies.routes";
// import adminRouter from "./api/routes/admin.routes";
// import bodyParser from "body-parser";
// import castRouter from "./api/routes/cast.routes";
import { drizzle } from "drizzle-orm/node-postgres";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { validateEnvs } from "./config/env";

validateEnvs();

const port = 3000;

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) throw new Error("No database url present in dotenv");

export const db = drizzle(dbUrl);

const app = new Hono();

app.use(logger());
cors({ origin: "http://localhost:3000", credentials: true });

// app.use(
//   "*",
//   initAuthConfig(() => ({
//     debug: true,
//     secret: process.env.AUTH_SECRET,
//     providers: [
//       Authentik({
//         clientSecret: process.env.AUTH_AUTHENTIK_SECRET,
//         clientId: process.env.AUTH_AUTHENTIK_ID,
//         issuer: process.env.AUTH_AUTHENTIK_ISSUER,
//       }),
//     ],
//   }))
// );

const api = new Hono().basePath("/api");

app.get("/api/protected", (c) => {
  if (!auth) return c.json({ message: "Unauthorized" }, { status: 401 });

  return c.json({ a: 1 }, { status: 200 });
});

// app.route("/", api);

// api.route("/auth", authRouter);

// app.use("/api/users", usersRouter);
// app.use("/api/tmdb/movies", TMDBRouter);
// app.use("/api/watchlist", watchlistRouter);
// app.use("/api/playlists", playlistsRouter);
// app.use("/api/movies", moviesRouter);
// app.use("/api/admin", adminRouter);
// app.use("/api/cast", castRouter);

app.notFound((c) => c.json({ message: "Route not found" }));
// app.onError((err, c) => {
//   console.error(err);
//   console.log(c.header(""));
//   if (err instanceof HTTPException) {
//     return err.getResponse();
//   }

//   return c.json({ error: err.message }, 500);
// });

export default {
  port,
  fetch: app.fetch,
};
