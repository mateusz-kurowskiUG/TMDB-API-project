import { type Request, type Response, Router } from "express";
import db from "../../db/connect";

import type newUserInterface from "../../interfaces/newUser";
import { emailRegex, passwordRegex } from "../../data/regex";

const authRouter = Router();

authRouter.post("/register", async (req: Request, res: Response) => {
	if (!req.body)
		return res.status(400).send({ msg: "Please enter all fields" });
	if (!req.body["email"] || !req.body["password"])
		return res.status(400).send({
			msg: "Please enter all fields",
		});
	const { email, password } = req.body;
	if (!emailRegex.test(email))
		return res.status(400).send({ msg: "Invalid email" });
	if (password.length < 6)
		return res
			.status(400)
			.send({ msg: "Password must be at least 6 characters" });
	if (password.length > 20)
		return res
			.status(400)
			.send({ msg: "Password must be less than 20 characters" });

	if (!passwordRegex.test(password)) {
		return res.status(400).send({
			msg: "Password must contain at least one uppercase letter, one lowercase letter, and one special character",
		});
	}
	const newUser: newUserInterface = {
		email: email.trim(),
		password: password.trim(),
	};
	const registerResult = await db.createUser(newUser);
	if (!registerResult.result || !registerResult.data) {
		return res.status(400).send({ msg: "User already exists" });
	}
	const { id, role } = registerResult.data;

	return res
		.status(200)
		.send({ msg: registerResult.msg, data: { id, email, role } });
});

authRouter.post("/login", async (req: Request, res: Response) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({ msg: "Please enter all fields" });
	}
	const loginResult = await db.loginUser(email.trim(), password.trim());
	if (!loginResult || !loginResult.result) {
		return res.status(400).json({ msg: "User does not exist" });
	}
	return res.status(200).json(loginResult);
});

export default authRouter;
