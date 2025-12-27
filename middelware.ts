import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const token =
    req.headers.get("authorization")?.split(" ")[1] ||
    req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json(
      { error: "Authentication required" },
      { status: 401 }
    );
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.next();
  } catch {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    );
  }
}

/* -------------------------------------------------------------------------- */
/*                              PROTECTED PATHS                               */
/* -------------------------------------------------------------------------- */

export const config = {
  matcher: [
    "/api/expenses/:path*",
    "/api/users/:path*",
    "/dashboard/:path*",
    "/expenses/:path*",
  ],
};
