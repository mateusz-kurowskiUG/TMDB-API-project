import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createCuid2, cuidLength } from "../utils/cuid";

export const usersTable = pgTable("users", {
  id: varchar("id", { length: cuidLength })
    .$defaultFn(() => createCuid2())
    .primaryKey(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar().notNull(),
  role: varchar().default("user").notNull(),
});
