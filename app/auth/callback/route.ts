import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  const redirectTo =
    requestUrl.searchParams.get("redirect_to")?.toString() || "/";

  const supabase = await createClient();

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  // Fetch the authenticated user after sign-in
  const {
    data: { user: sessionUser },
  } = await supabase.auth.getUser();

  if (sessionUser) {
    // Check if user exists in Prisma DB
    const existingUser = await prisma.user.findUnique({
      where: { email: sessionUser.email },
    });

    // If not, create a new record
    if (!existingUser) {
      await prisma.user.create({
        data: {
          id: sessionUser.id,
          email: sessionUser.email || "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    }
  }

  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")}${redirectTo}`
  );
}
