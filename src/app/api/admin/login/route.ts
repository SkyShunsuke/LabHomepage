import { NextResponse } from "next/server";
import { SESSION_COOKIE, createSessionToken } from "@/lib/session";
import { isGitHubPagesBuild } from "@/lib/runtime-mode";

export const dynamic = "force-static";

export async function POST(request: Request) {
  if (isGitHubPagesBuild()) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const formData = await request.formData();
  const username = String(formData.get("username") || "");
  const password = String(formData.get("password") || "");

  const expectedUser = process.env.ADMIN_USERNAME || "admin";
  const expectedPassword = process.env.ADMIN_PASSWORD || "change-me";

  if (username !== expectedUser || password !== expectedPassword) {
    return NextResponse.redirect(new URL("/admin/login?error=1", request.url), 303);
  }

  const response = NextResponse.redirect(new URL("/admin", request.url), 303);
  response.cookies.set({
    name: SESSION_COOKIE,
    value: await createSessionToken(username),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });

  return response;
}
