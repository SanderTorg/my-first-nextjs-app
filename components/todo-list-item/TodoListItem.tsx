import { DateTime } from "luxon";
import { Button } from "../ui/button";
import { Todo } from "@/types/todoTypes";
import {
  Card,
  CardAction,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import Link from "next/link";

function TodoListItem({ id, title, dueDate, priority }: Todo) {
  const formattedDateTime = DateTime.fromISO(dueDate);

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
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
}

export default TodoListItem;
