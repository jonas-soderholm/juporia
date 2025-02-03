"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import prisma from "../prisma";
import { isSubscribedNew } from "./subscription";
import { get } from "cypress/types/jquery";

export async function getUserAuth() {
  const supabase = await createClient();

  // Fetch the authenticated user once
  const {
    data: { user: sessionUser },
  } = await supabase.auth.getUser();

  if (!sessionUser) {
    return { id: "", email: "" }; // Ensures a consistent return type
  }

  // return { id: sessionUser.id, email: sessionUser.email };
  return { id: sessionUser.id, email: sessionUser.email ?? null };
}

export async function getUserEmail() {
  const supabase = await createClient();

  // Fetch the authenticated user
  const {
    data: { user: sessionUser },
  } = await supabase.auth.getUser();

  if (!sessionUser) {
    throw new Error("User not authenticated");
  }

  return sessionUser.email;
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
