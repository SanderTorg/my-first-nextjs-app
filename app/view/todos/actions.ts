"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import { Todo } from "@/types/todoTypes";

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
  const dueDate = formData.get("dueDate") as string;
  const priority = formData.get("priority") as "Low" | "Medium" | "High";

  if (!title || !title.trim()) {
    throw new Error("Title is required");
  }

  const todos = await readTodos();

  const newId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

  const newTodo: Todo = {
    id: newId,
    title: title.trim(),
    dueDate: dueDate || new Date().toISOString().split("T")[0],
    priority: priority || undefined,
    completed: false,
  };

  todos.push(newTodo);
  await writeTodos(todos);

  revalidatePath("/view/todos");
}
