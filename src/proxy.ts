import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  const isFunnelSubdomain =
    hostname.startsWith("funnel.") ||
    hostname === "funnel.brandshiftonline.com" ||
    hostname === "funnel.brandshift.online";

  if (isFunnelSubdomain && pathname === "/") {
    return NextResponse.rewrite(new URL("/funnel", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
