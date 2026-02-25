import { TodoList } from "@/components/todo-list/TodoList";
import { Todo } from "@/types/todoTypes";
import { Suspense } from "react";
import TodoListSkeleton from "@/components/todo-list/TodoListSkeleton";
import CreateTodoForm from "@/components/todo-create-form/CreateTodoForm";
import fs from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

async function getTodos(): Promise<Todo[]> {
  const raw = await fs.readFile(
    path.join(process.cwd(), "lib", "data", "todos", "todoData.json"),
    "utf-8",
  );
  return JSON.parse(raw).data as Todo[];
}

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div className="grid gap-8">
      <Suspense fallback={<TodoListSkeleton />}>
        <TodoList todos={todos} />
      </Suspense>
    </div>
  );
}
