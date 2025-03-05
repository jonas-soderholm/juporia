// "use server";

// import { encodedRedirect } from "@/utils/utils";
// import { createClient } from "@/utils/supabase/server";
// import { headers } from "next/headers";
// import { redirect } from "next/navigation";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export const signUpAction = async (formData: FormData) => {
//   const email = formData.get("email")?.toString();
//   const password = formData.get("password")?.toString();
//   const supabase = await createClient();
//   const origin = (await headers()).get("origin");

//   if (!email || !password) {
//     return { error: "Email and password are required" };
//   }

//   // 🔥 Attempt sign-up
//   const { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       emailRedirectTo: `${origin}/auth/callback`,
//     },
//   });

//   // Check if the email already exists
//   if (
//     data.user &&
//     (!data.user.identities || data.user.identities.length === 0)
//   ) {
//     return encodedRedirect(
//       "error",
//       "/sign-up",
//       "Email address is already taken."
//     );
//   }

//   if (error) {
//     console.error(error.code + " " + error.message);
//     return encodedRedirect("error", "/sign-up", error.message);
//   } else {
//     return encodedRedirect(
//       "success",
//       "/sign-up",
//       "Thanks for signing up! Please check your email for a verification link."
//     );
//   }
// };

// export const signInAction = async (formData: FormData) => {
//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;
//   const supabase = await createClient();

//   const { error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) {
//     return encodedRedirect("error", "/sign-in", error.message);
//   }

//   // Fetch the authenticated user after sign-in
//   const {
//     data: { user: sessionUser },
//   } = await supabase.auth.getUser();

//   if (sessionUser?.email) {
//     try {
//       // Check if user exists in Prisma DB using email instead of id
//       const existingUser = await prisma.user.findUnique({
//         where: { email: sessionUser.email },
//       });

//       if (!existingUser) {
//         await prisma.user.create({
//           data: {
//             id: sessionUser.id,
//             email: sessionUser.email,
//             createdAt: new Date(),
//             updatedAt: new Date(),
//           },
//         });
//       }
//     } catch (dbError) {
//       console.error("Database error while creating user:", dbError);
//       return encodedRedirect("error", "/sign-in", "Failed to create user.");
//     }
//   }

//   return redirect("/");
// };

// export const forgotPasswordAction = async (formData: FormData) => {
//   const email = formData.get("email")?.toString();
//   const supabase = await createClient();
//   const origin = (await headers()).get("origin");
//   const callbackUrl = formData.get("callbackUrl")?.toString();

//   if (!email) {
//     return encodedRedirect("error", "/forgot-password", "Email is required");
//   }

//   const { error } = await supabase.auth.resetPasswordForEmail(email, {
//     redirectTo: `${origin}/auth/callback?redirect_to=/reset-password`,
//   });

//   if (error) {
//     console.error(error.message);
//     return encodedRedirect(
//       "error",
//       "/forgot-password",
//       "Could not reset password"
//     );
//   }

//   if (callbackUrl) {
//     return redirect(callbackUrl);
//   }

//   return encodedRedirect(
//     "success",
//     "/forgot-password",
//     "Check your email for a link to reset your password."
//   );
// };

// export const resetPasswordAction = async (formData: FormData) => {
//   const supabase = await createClient();

//   const password = formData.get("password") as string;
//   const confirmPassword = formData.get("confirmPassword") as string;

//   if (!password || !confirmPassword) {
//     return encodedRedirect(
//       "error",
//       "/reset-password",
//       "Password and confirm password are required"
//     );
//   }

//   if (password !== confirmPassword) {
//     return encodedRedirect(
//       "error",
//       "/reset-password",
//       "Passwords do not match"
//     );
//   }

//   const { error } = await supabase.auth.updateUser({
//     password: password,
//   });

//   if (error) {
//     return encodedRedirect(
//       "error",
//       "/reset-password",
//       "Password update failed"
//     );
//   }

//   return encodedRedirect("success", "/", "Password updated");
// };

// export const signOutAction = async () => {
//   const supabase = await createClient();
//   await supabase.auth.signOut();
//   return redirect("/sign-in");
// };

"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/** ✅ Handle User Sign-Up */
export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  // 🔥 Attempt sign-up
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  // Check if the email already exists
  if (
    data.user &&
    (!data.user.identities || data.user.identities.length === 0)
  ) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email address is already taken."
    );
  }

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  } else {
    return encodedRedirect(
      "success",
      "/sign-up",
      "Thanks for signing up! Please check your email for a verification link."
    );
  }
};

// Handle User Sign-In with Redirect Support
export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  // Read the redirect param (fallback to "/")
  const redirectTo = formData.get("redirect")?.toString() || "/";

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect(
      "error",
      `/sign-in?redirect=${redirectTo}`,
      error.message
    );
  }

  // Fetch the authenticated user after sign-in
  const {
    data: { user: sessionUser },
  } = await supabase.auth.getUser();

  if (sessionUser?.email) {
    try {
      // Check if user exists in Prisma DB using email instead of id
      const existingUser = await prisma.user.findUnique({
        where: { email: sessionUser.email },
      });

      if (!existingUser) {
        await prisma.user.create({
          data: {
            id: sessionUser.id,
            email: sessionUser.email,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });
      }
    } catch (dbError) {
      console.error("Database error while creating user:", dbError);
      return encodedRedirect("error", "/sign-in", "Failed to create user.");
    }
  }

  // Redirect to the intended page after login
  return redirect(redirectTo);
};

// Handle Forgot Password
export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password"
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password."
  );
};

// Handle Reset Password
export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    return encodedRedirect(
      "error",
      "/reset-password",
      "Password and confirm password are required"
    );
  }

  if (password !== confirmPassword) {
    return encodedRedirect(
      "error",
      "/reset-password",
      "Passwords do not match"
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    return encodedRedirect(
      "error",
      "/reset-password",
      "Password update failed"
    );
  }

  return encodedRedirect("success", "/", "Password updated");
};

/** ✅ Handle Sign-Out */
export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};
