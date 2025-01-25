// utils/getUser.ts
import { createClient } from "@/utils/supabase/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { redirect } from "next/navigation";

export async function getUserId() {
  const supabase = await createClient();

  // Fetch the authenticated user
  const {
    data: { user: sessionUser },
  } = await supabase.auth.getUser();

  if (!sessionUser) {
    throw new Error("User not authenticated");
  }

  return sessionUser.id;
}

export async function redirectIfNotLoggedIn() {
  try {
    // Create a Supabase client instance
    const supabase = await createClient();

    // Get the authenticated user
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // If no user is logged in, redirect to the sign-in page
    if (!user) {
      redirect("/sign-in");
    }

    return user; // Return the user object if authenticated
  } catch (error) {
    console.error("Error checking user authentication:", error);
    redirect("/sign-in"); // Redirect on error
  }
}
