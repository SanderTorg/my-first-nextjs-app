import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";

interface IProps {
  title: string;
}

function TodoListItem({ title }: IProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
}

export default TodoListItem;
