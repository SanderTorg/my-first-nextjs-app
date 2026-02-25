import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createTodoAction } from "@/app/view/todos/actions";

function CreateTodoForm() {
  return (
    <Card className="mx-auto w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Create Todo</CardTitle>
        <CardDescription>Add a new task to your list.</CardDescription>
      </CardHeader>

      <form action={createTodoAction}>
        <CardContent>
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label
                htmlFor="title"
                className="text-sm font-medium leading-none"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                placeholder="What needs to be done?"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring"
              />
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="dueDate"
                className="text-sm font-medium leading-none"
              >
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring"
              />
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="priority"
                className="text-sm font-medium leading-none"
              >
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                defaultValue=""
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring"
              >
                <option value="" disabled>
                  Select priority
                </option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit" className="w-full">
            Add Todo
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default CreateTodoForm;
