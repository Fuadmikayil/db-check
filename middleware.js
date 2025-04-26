import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname === "/userPanel") {
    const token = request.cookies.get("token")?.value;
    console.log(token);
    
    if (!token) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }

  return NextResponse.next();
}
