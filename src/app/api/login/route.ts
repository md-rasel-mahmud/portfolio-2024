// create a login route using next.js

import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // const res = await request.json();
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get("query");
  const res = await request.json();

  console.log({ res });
  return Response.json({ res, query });
}
