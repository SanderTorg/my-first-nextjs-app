import { TodoList } from "@/components/todo-list/TodoList";
import { Todo } from "@/types/todoTypes";
import { Suspense } from "react";
import Loading from "./loading";
import data from "@/lib/data/todos/todoData.json";

export default async function TodosPage() {
  const todos: Todo[] = data.data as Todo[];

  return (
    <>
      <Suspense fallback={<Loading />}>{<TodoList todos={todos} />}</Suspense>
    </>
  );
}
