export const dynamic = "force-static";

import { NextResponse } from "next/server";
import todos from "../../../../lib/data/todos/todoData.json";

export async function GET() {
  //   const res = await fetch('https://data.mongodb-api.com/...', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'API-Key': process.env.DATA_API_KEY,
  //     },
  //   })
  //   const data = await res.json()
  const data = todos.data;

  return Response.json({ data });
}

export async function POST(request: Request) {
  const body = await request.formData();
  console.log("Received new todo:", body);

  return NextResponse.json(
    {
      message: "Todo created successfully",
      data: body,
    },
    { status: 201 },
  );
}
