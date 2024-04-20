// get blog
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const headers = request.headers;
  const userAgent = headers.get("X-FORWARDED-FOR");
  return Response.json({
    message: "Hello from the blog route",
    userInfo: userAgent,
  });
}
