import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  // us.brandshift.online → /funnel2
  if (hostname.startsWith("us.")) {
    url.pathname = "/funnel2";
    return NextResponse.rewrite(url);
  }

  // ai.brandshift.online → /funnel3
  if (hostname.startsWith("ai.")) {
    url.pathname = "/funnel3";
    return NextResponse.rewrite(url);
  }

  // funnel.brandshift.online → /funnel (existing)
  if (hostname.startsWith("funnel.")) {
    url.pathname = "/funnel";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
