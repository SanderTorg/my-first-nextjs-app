import { TodoList } from "@/components/todo-list/TodoList";
import { Todo } from "@/types/todoTypes";
import { Suspense } from "react";
import data from "@/lib/data/todos/todoData.json";
import Loading from "./loading";

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default async function TodosPage() {
  const todos: Todo[] = data.data as Todo[];

  return (
    <>
      <Suspense fallback={<Loading />}>{<TodoList todos={todos} />}</Suspense>
    </>
  );
}
