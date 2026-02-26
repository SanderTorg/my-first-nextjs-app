import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
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

export async function GET() {
  const data = await readTodos();
  return Response.json({ data });
}

export async function POST(request: Request) {
  const body = await request.json();

  const todos = await readTodos();
  const newId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

  const newTodo: Todo = {
    id: newId,
    title: body.title,
    dueDate: body.dueDate || new Date().toISOString().split("T")[0],
    priority: body.priority || undefined,
    completed: false,
  };

  todos.push(newTodo);
  await fs.writeFile(DATA_FILE_PATH, JSON.stringify({ data: todos }, null, 2));

  return NextResponse.json(
    {
      message: "Todo created successfully",
      data: newTodo,
    },
    { status: 201 },
  );
}
