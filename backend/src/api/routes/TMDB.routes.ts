import { type Request, type Response, Router } from "express";
import db from "../../db/connect";
const TMDBRouter = Router();

TMDBRouter.get("/", async (req: Request, res: Response) => {
  res.send("Hello World!");
});
TMDBRouter.get("/popular", async (req: Request, res: Response) => {
  const popular = await db.getTmdbMPopular();
  if (!popular.result) return res.status(400).json(popular);
  return res.status(200).send(popular);
});
TMDBRouter.get("/search", async (req: Request, res: Response) => {
  const query = req.query;
  if (!query) return res.status(400).json({ result: false, msg: "No query" });
  const search = await db.searchTmdb(query.query as string);
  if (!search.result) return res.status(404).json(search);
  return res.status(200).send(search);
});

TMDBRouter.get("/genres", async (req: Request, res: Response) => {
  const genres = await db.getGenres();
  if (!genres.result) return res.status(400).json(genres);
  return res.status(200).send(genres);
});

TMDBRouter.get("/:id(\\d+)", async (req: Request, res: Response) => {
  const id = +req.params.id;
  if (!id)
    return res.status(400).json({ result: false, msg: "No id provided" });
  const movie = await db.getTmdbMById(id);
  if (!movie.result) return res.status(404).json(movie);
  return res.status(200).send(movie);
});
TMDBRouter.get("*", async (req: Request, res: Response) => {
  res.status(404).send({ result: false, msg: "Not found" });
  return;
});
export default TMDBRouter;
