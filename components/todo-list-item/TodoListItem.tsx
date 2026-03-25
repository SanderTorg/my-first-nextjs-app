import { DateTime } from "luxon";
import { Button } from "../ui/button";

import {
  Card,
  CardAction,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import Link from "next/link";
import { Todo } from "@/lib/db/schema";

function TodoListItem({ id, title, dueDate, priority }: Todo) {
  const formattedDateTime = DateTime.fromJSDate(dueDate);

  return (
    <Card className="w-full">
      <CardHeader>
        <Link href={`/view/todos/${id}`}>
          <CardTitle>{title}</CardTitle>
        </Link>
        <CardDescription>
          <p>Due Date: {formattedDateTime.toISODate()}</p>
          <p>Priority: {priority}</p>
        </CardDescription>
        <CardAction>
          <Link href={`/view/todos/${id}`}>
            <Button variant="outline" className="cursor-pointer">
              View Details
            </Button>
          </Link>
        </CardAction>
      </CardHeader>
    </Card>
  );
}

export default TodoListItem;
