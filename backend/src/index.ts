import { logger } from "hono/logger";
import TMDBRouter from "./api/routes/TMDB.routes";
import adminRouter from "./api/routes/admin.routes";
import castRouter from "./api/routes/cast.routes";
import moviesRouter from "./api/routes/movies.routes";
import playlistsRouter from "./api/routes/playlists.routes";
import usersRouter from "./api/routes/users.routes";
import watchlistRouter from "./api/routes/watchlist.routes";
import { Hono } from "hono";
import { cors } from "hono/cors";
import KeycloakConnect from "keycloak-connect";

const PORT = process.env.BACKEND_PORT || 3000;
const app = new Hono({ strict: true }).basePath("/api");
const keycloak = new KeycloakConnect({});
app.use(keycloak.middleware());
app.use(logger());
app.use(cors());

app.route("/users", usersRouter);
// app.route("/tmdb/movies", TMDBRouter);
// app.route("/watchlist", watchlistRouter);
app.route("/playlists", playlistsRouter);
app.route("/movies", moviesRouter);
app.route("/admin", adminRouter);
// app.route("/cast", castRouter);

app.get("/api/recommendations", (c) => c.text("Recommendations", 200));

app.notFound((c) => c.text("Not Found", 404));
// app.onError((err, c) => {
// 	console.error(`${err}`);
// 	return c.text("Custom Error Message", 500);
// });
// export default app;
export default {
  port: PORT,
  fetch: app.fetch,
};
