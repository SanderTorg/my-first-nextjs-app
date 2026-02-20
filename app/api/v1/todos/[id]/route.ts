import data from "../../../../../lib/data/todos/todoData.json";

export async function GET(
  _request: Request,
  ctx: RouteContext<`/api/v1/todos/[id]`>,
) {
  const params = await ctx.params;
  const id = (params as { id: string }).id;
  const todo = data.data.find((todo) => todo.id.toString() === id);

  if (!todo) {
    return Response.json({ error: "Todo not found" }, { status: 404 });
  }

  return Response.json(todo);
}
