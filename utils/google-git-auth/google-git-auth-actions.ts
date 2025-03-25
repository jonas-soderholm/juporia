"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const signInWithOAuth = async (
  provider: "google" | "github",
  redirectTo?: string
) => {
  const supabase = await createClient();

  // Default redirect destination if not provided
  const returnUrl = redirectTo || "/";

  const options: any = {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback?redirect_to=${encodeURIComponent(returnUrl)}`,
  };

  // Only add `prompt: "select_account"` for Google
  if (provider === "google") {
    options.queryParams = { prompt: "select_account" };
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options,
  });

  if (error) {
    console.error("OAuth login error:", error.message);
    return redirect(`/sign-in?error=${encodeURIComponent(error.message)}`);
  }

  return redirect(data.url);
};
