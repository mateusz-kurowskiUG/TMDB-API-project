import { db } from "../index";
import { usersTable } from "../db/schema";
import { ROLE } from "../types/Role";
import { eq } from "drizzle-orm";
import { checkPasswordMatch, createToken, hashPassword } from "../utils/auth";
import type { NewUserBody, User } from "../types/users";

const getUserById = async (id: string): Promise<User | undefined> => {
  const found = await db.select().from(usersTable).where(eq(usersTable.id, id));
  return found.length ? found[0] : undefined;
};

const getUserByEmail = async (email: string): Promise<User | undefined> => {
  const found = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));
  return found.length ? found[0] : undefined;
};

const createUser = async ({
  email,
  password,
}: NewUserBody): Promise<User | undefined> => {
  const exists = await getUserByEmail(email);
  if (exists) return;

  const hashedPassword = await hashPassword(password);
  const inserted = await db
    .insert(usersTable)
    .values({
      email,
      password: hashedPassword,
      role: ROLE.USER,
    })
    .returning();
  if (inserted.length) return inserted[0];
};

const authenticateUser = async ({
  email,
  password: passwordCandidate,
}: NewUserBody): Promise<string | undefined> => {
  const foundUser = await getUserByEmail(email);
  if (!foundUser) return;

  const isPasswordMatch = await checkPasswordMatch(
    passwordCandidate,
    foundUser.password
  );

  const { id, role } = foundUser;

  if (!isPasswordMatch) return;
  return await createToken({ email, id, role });
};

const userService = {
  getUserById,
  createUser,
  authenticateUser,
};

export default userService;

// async loginUser(email: string, password: string): Promise<LoginResponse> {
//   const user = await (await this.users.all({ email })).first();
//   if (!user) {
//     return {
//       result: false,
//       msg: DBMessage.USER_NOT_FOUND,
//       data: undefined,
//     };
//   }
//   if (user.get("password") !== bcrypt.hashSync(password, this.salt)) {
//     return {
//       result: false,
//       msg: DBMessage.INVALID_CREDIENTIALS,
//       data: undefined,
//     };
//   }
//   const userJson = await user.properties();
//   delete userJson.password;
//   return { result: true, msg: DBMessage.USER_LOGGED_IN, data: userJson };
// }
