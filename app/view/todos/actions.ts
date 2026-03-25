"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import { Todo } from "@/types/todoTypes";
import { todosTable } from "@/lib/db/schema";
import { db } from "@/lib/db/db";

const DATA_FILE_PATH = path.join(
  process.cwd(),
  "lib",
  "data",
  "todos",
  "todoData.json",
);

async function readTodos(): Promise<Todo[]> {
  const raw = await fs.readFile(DATA_FILE_PATH, "utf-8");
  const json = JSON.parse(raw);
  return json.data as Todo[];
}

async function writeTodos(todos: Todo[]): Promise<void> {
  await fs.writeFile(DATA_FILE_PATH, JSON.stringify({ data: todos }, null, 2));
}

export async function createTodoAction(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string | null;
  const dueDate = formData.get("dueDate") as string;
  const priority = formData.get("priority") as "Low" | "Medium" | "High";

  if (!title || !title.trim()) {
    throw new Error("Title is required");
  }

  // Map priority to lowercase for DB
  const dbPriority = priority ? priority.toLowerCase() : "low";

  // Use current date for createdAt/updatedAt
  const now = new Date();

  const newTodo = {
    id: crypto.randomUUID(),
    title: title.trim(),
    description: description || "",
    dueDate: dueDate ? new Date(dueDate) : now,
    priority: dbPriority,
    isCompleted: false,
    createdAt: now,
    updatedAt: now,
  };

  await db.insert(todosTable).values(newTodo).returning();

  revalidatePath("/view/todos");
}
