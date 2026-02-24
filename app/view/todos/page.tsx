import { TodoList } from "@/components/todo-list/TodoList";
import { Todo } from "@/types/todoTypes";
import { Suspense } from "react";
import data from "@/lib/data/todos/todoData.json";

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default async function TodosPage() {
  const todos: Todo[] = data.data as Todo[];

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {<TodoList todos={todos} />}
      </Suspense>
    </>
  );
}

//
// ("use client");

// function error() {
//   return (
//     <div className="flex h-screen items-center justify-center">
//       <h1 className="text-2xl font-bold">
//         An error occurred while fetching the todos.
//       </h1>
//     </div>
//   );
// }

// export default error;
//

// ("use client");

// function Loading() {
//   return (
//     <div className="flex h-screen items-center justify-center">
//       <p className="text-2xl font-semibold">Loading...</p>
//     </div>
//   );
// }
// export default Loading;
