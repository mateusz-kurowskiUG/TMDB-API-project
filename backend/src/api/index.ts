import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.routes";
import TMDBRouter from "./routes/TMDB.routes";
import watchlistRouter from "./routes/watchlist.routes";
import playlistsRouter from "./routes/playlists.routes";
import moviesRouter from "./routes/movies.routes";
import adminRouter from "./routes/admin.routes";
import bodyParser from "body-parser";
import castRouter from "./routes/cast.routes";
import authRouter from "./routes/auth.routes";
import { drizzle } from "drizzle-orm/node-postgres";
import { Hono } from "hono";

const port = 3000;

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) throw new Error("No database url present in dotenv");
export const db = drizzle(dbUrl);
const app = new Hono();

app.use("/api/auth", authRouter);
// app.use("/api/users", usersRouter);
// app.use("/api/tmdb/movies", TMDBRouter);
// app.use("/api/watchlist", watchlistRouter);
// app.use("/api/playlists", playlistsRouter);
// app.use("/api/movies", moviesRouter);
// app.use("/api/admin", adminRouter);
// app.use("/api/cast", castRouter);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default {
  port,
  fetch: app.fetch,
};
