import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { Todo, todosTable } from "./schema";
import { create } from "domain";

const sql = neon(process.env.NEON_DB_URL!);
export const db = drizzle(sql);

export async function getTodos() {
  "use server";

  const todos = await db.select().from(todosTable);

  return todos;
}

async function createTodo(todo: Todo) {
  "use server";

  const newTodo = await db.insert(todosTable).values(todo).returning();

  console.log("New todo created!", newTodo);
  return newTodo;
}
