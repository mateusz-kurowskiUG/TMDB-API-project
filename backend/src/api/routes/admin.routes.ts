import _ from "lodash";
import { type Request, type Response, Router } from "express";
import type IMovie from "../../interfaces/movie/IMovie";
import { createId, isCuid } from "@paralleldrive/cuid2";
import UsersDB from "../../db/users/users";
import MoviesDB from "../../db/movies/movies";

const adminRouter = Router();
adminRouter.get("/users", async (request: Request, res: Response) => {
	const users = await UsersDB.getUsers();
	if (!users) {
		return res.status(400).json(users);
	}

	return res.status(200).send(users);
});

adminRouter.post("/movies", async (request: Request, res: Response) => {
	const {
		title,
		release_date,
		poster_path,
		backdrop_path,
		popularity,
		adult,
		budget,
		status,
		TMDBId,
		genres,
		overview,
	} = request.body;
	if (!adult || !title)
		return res
			.status(400)
			.json({ result: false, msg: "Please enter all fields" });

	// undefined is fine for me, but not for neo4j driver, so null instead of it.
	const newMovie: IMovie = {
		id: createId(),
		title,
		release_date: release_date || null,
		poster_path: poster_path || null,
		backdrop_path: backdrop_path || null,
		popularity: popularity || null,
		adult,
		budget: budget || null,
		status: status || null,
		TMDBId: TMDBId || null,
		genres,
		overview: overview || null,
	};
	const movie = await MoviesDB.createMovie(newMovie);
	if (!movie.result) return res.status(400).json(movie);

	return res.status(200).send(movie);
});
adminRouter.patch("/movies/:id", async (request: Request, res: Response) => {
	const { id } = request.params;
	if (!id || isCuid(id))
		return res.status(400).json({ msg: "Invalid movie ID" });
	const {
		title,
		release_date,
		poster_path,
		backdrop_path,
		popularity,
		adult,
		budget,
		status,
		TMDBId,
		overview,
	} = request.body;
	const updatedMovie: IMovie = {
		id,
		title: title || null,
		release_date: release_date || null,
		poster_path: poster_path || null,
		backdrop_path: backdrop_path || null,
		popularity: popularity || null,
		adult: adult || null,
		budget: budget || null,
		status: status || null,
		TMDBId: TMDBId || null,
		overview: overview || null,
	};
	const movieValues = _.values(updatedMovie).slice(1);
	if (movieValues.every((value) => !value))
		return res
			.status(400)
			.json({ result: false, msg: "Please add some fields to replace" });

	const updated = await MoviesDB.updateMovie(updatedMovie);
	if (!updated.result) return res.status(400).json(updated);

	return res.status(200).send(updated);
});
adminRouter.delete(
	"/movies/:movieId",
	async (request: Request, res: Response) => {
		const { movieId } = request.params;
		if (!movieId) {
			return res
				.status(400)
				.json({ result: false, msg: "Please enter all fields" });
		}

		const movie = await MoviesDB.deleteMovie(movieId);
		if (!movie?.result) {
			return res.status(400).json(movie);
		}

		return res.status(200).send(movie);
	},
);
export default adminRouter;
