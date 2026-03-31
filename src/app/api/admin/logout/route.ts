import { NextResponse } from "next/server";
import { SESSION_COOKIE } from "@/lib/session";
import { isGitHubPagesBuild } from "@/lib/runtime-mode";

export const dynamic = "force-static";

export async function POST(request: Request) {
  if (isGitHubPagesBuild()) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const response = NextResponse.redirect(new URL("/admin/login", request.url), 303);

  response.cookies.set({
    name: SESSION_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(0)
  });

  return response;
}
