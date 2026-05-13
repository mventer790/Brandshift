import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  // Route funnel subdomain (e.g. funnel.brandshiftonline.com) to /funnel
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
