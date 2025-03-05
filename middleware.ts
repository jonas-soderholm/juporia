import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  const allowedHosts = new Set(["localhost", "juporia.com"]); // Your actual domain

  // Get the real host from request headers (ensures Heroku doesn’t bypass the check)
  const requestHost = request.headers.get("host")?.split(":")[0]; // Strips port if present

  if (!requestHost || !allowedHosts.has(requestHost)) {
    return new NextResponse("Access Forbidden", { status: 403 });
  }

  return updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
