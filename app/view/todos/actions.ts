export async function createTodoAction(formData: FormData) {
  "use server";
  try {
    const title = formData.get("title") as string;
    const dueDate = formData.get("dueDate") as string;
    const priority = formData.get("priority") as "Low" | "Medium" | "High";

    const newTodo = {
      title,
      dueDate,
      priority,
    };

    const resp = await fetch("/api/v1/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    if (!resp.ok) {
      throw new Error("Failed to create todo");
    }

    const data = await resp.json();
    console.log("Todo created:", data);
  } catch (error) {
    console.error("Error creating todo:", error);
    throw new Error("Failed to create todo");
  }
}
