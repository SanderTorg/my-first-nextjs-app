import { TodoList } from "@/components/todo-list/TodoList";
import { Todo } from "@/types/todoTypes";
import { Suspense } from "react";
import Loading from "./loading";
export const BASE_API_URL =
  process.env.LOCAL_BASE_URL || "http://localhost:3000";

export default async function TodosPage() {
  const response = await fetch(`${BASE_API_URL}/api/v1/todos`);

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  const { data: todos }: { data: Todo[] } = await response.json();
  console.log("Todos:", todos);

  return (
    <>
      <Suspense fallback={<Loading />}>{<TodoList todos={todos} />}</Suspense>
    </>
  );
}
