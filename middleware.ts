import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";


export async function middleware(request: NextRequest) {
  const requestHost = request.headers.get("host")?.split(":")[0];

  const isAllowed =
    requestHost === "localhost" ||
    requestHost === "juporia.com" ||
    requestHost === "www.juporia.com" ||
    requestHost?.endsWith(".vercel.app");

  if (!isAllowed) {
    return new NextResponse("Access Forbidden", { status: 403 });
  }

  return updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
