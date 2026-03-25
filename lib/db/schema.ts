import {
  text,
  pgTable,
  uuid,
  varchar,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

export const todosTable = pgTable("todos", {
  id: uuid().primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  description: text("description").notNull(),
  dueDate: timestamp("due_date").notNull(),
  priority: text("priority").notNull().default("low"),
  isCompleted: boolean("is_completed").notNull().default(false),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "date",
  }).defaultNow(),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
    mode: "date",
  }).defaultNow(),
});

export type Todo = typeof todosTable.$inferSelect;
