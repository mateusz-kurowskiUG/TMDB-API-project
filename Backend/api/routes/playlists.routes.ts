import { Request, Response, Router } from "express";
import db from "../../db/connect";
import newUserInterface from "../../interfaces/newUser";
const playlistsRouter = Router();
playlistsRouter.post("/", async (req: Request, res: Response) => {});
playlistsRouter.get("/", async (req: Request, res: Response) => {});
playlistsRouter.put("/:id", async (req: Request, res: Response) => {});
playlistsRouter.delete("/:id", async (req: Request, res: Response) => {});
export default playlistsRouter;