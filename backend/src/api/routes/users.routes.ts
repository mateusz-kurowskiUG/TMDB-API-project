import { type Request, type Response, Router } from "express";
import db from "../../db/connect";

const usersRouter = Router();

usersRouter.get("/profile/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ msg: "Please enter all fields" });
  const profileResult = await db.getUserProfile(id);
  if (!profileResult.result) {
    return res.status(400).json(profileResult);
  }
  return res.status(200).json(profileResult);
});
usersRouter.put("/profile", async (req: Request, res: Response) => {
  const { id, name, password, email, role, new_password } = req.body;
  if (!id) return res.status(400).json({ msg: "Please enter userId" });
  if (!name && !password && !email) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  const updateProfileResult = await db.updateUserProfile({
    id,
    password,
    email,
    role,
    new_password,
  });
  if (role)
    return res.status(403).json({ msg: "Updating role is not permitted" });
  if (!updateProfileResult.result) {
    return res.status(400).json(updateProfileResult);
  }
  return res.status(200).json(updateProfileResult);
});
usersRouter.get("/:id/stats", async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ msg: "Please enter all fields" });
  const statsResult = await db.getUserStats(id);
  if (!statsResult.result) {
    return res.status(400).json(statsResult);
  }
  return res.status(200).json(statsResult);
});

export default usersRouter;
