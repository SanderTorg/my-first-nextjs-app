"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

function TodoDetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-2xl text-destructive">
            Something went wrong
          </CardTitle>
          <CardDescription>{error.message}</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col gap-3">
          <Button onClick={reset} className="w-full">
            Try Again
          </Button>
          <Link href="/view/todos" className="w-full">
            <Button variant="outline" className="w-full">
              &larr; Back to Todos
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default TodoDetailError;
