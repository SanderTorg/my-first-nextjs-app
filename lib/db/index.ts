import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { Todo, todosTable } from "./schema";

const db = drizzle(process.env.DATABASE_URL!);
async function main() {
  const todo: Todo = {
    id: crypto.randomUUID(),
    title: "Sample Todo",
    description: "This is a sample todo item",
    dueDate: new Date(),
    priority: "low",
    isCompleted: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await db.insert(todosTable).values(todo);
  console.log("New todo created!");
  const todos = await db.select().from(todosTable);
  console.log("Getting all todos from the database: ", todos);
  /*
  const todos: {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    priority: "low" | "medium" | "high";
    isCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
  }[]
  */
  await db
    .update(todosTable)
    .set({
      isCompleted: true,
    })
    .where(eq(todosTable.id, todo.id));
  console.log("Todo info updated!");
  await db.delete(todosTable).where(eq(todosTable.id, todo.id));
  console.log("Todo deleted!");
}
main();
