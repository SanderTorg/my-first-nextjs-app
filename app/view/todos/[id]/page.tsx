import { Todo } from "@/types/todoTypes";
import { DateTime } from "luxon";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Suspense } from "react";
import TodoDetailLoading from "./loading";

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

async function TodoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`${BASE_URL}/api/v1/todos/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch todo details");
  }

  const todo: Todo = await response.json();

  const formattedDate = DateTime.fromISO(todo.dueDate).toLocaleString(
    DateTime.DATE_MED,
  );

  const priorityColor: Record<string, string> = {
    High: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    Medium:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    Low: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  };

  return (
    <Suspense fallback={<TodoDetailLoading />}>
      <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle className="text-2xl">{todo.title}</CardTitle>
            <CardDescription>Todo #{todo.id}</CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <span className="text-sm font-medium text-muted-foreground">
                Status
              </span>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                  todo.completed
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
                }`}
              >
                <span
                  className={`size-1.5 rounded-full ${
                    todo.completed ? "bg-green-500" : "bg-orange-500"
                  }`}
                />
                {todo.completed ? "Completed" : "In Progress"}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <span className="text-sm font-medium text-muted-foreground">
                Due Date
              </span>
              <span className="text-sm font-semibold">{formattedDate}</span>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <span className="text-sm font-medium text-muted-foreground">
                Priority
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  priorityColor[todo.priority ?? "Low"]
                }`}
              >
                {todo.priority ?? "Low"}
              </span>
            </div>
          </CardContent>

          <CardFooter>
            <Link href="/view/todos" className="w-full">
              <Button variant="outline" className="w-full">
                &larr; Back to Todos
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </Suspense>
  );
}

export default TodoDetailPage;
