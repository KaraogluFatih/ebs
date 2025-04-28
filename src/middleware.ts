// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("payload-token");
  const isProtectedRoute = request.nextUrl.pathname.startsWith("/interal");

  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname); // optional: redirect after login
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
