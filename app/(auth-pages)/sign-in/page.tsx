"use client";

import { Suspense } from "react";
import { signInAction } from "@/app/actions";
import { FormMessage } from "@/components/ui/form-message";
import { SubmitButton } from "@/components/header/auth/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { LogoName } from "@/constants/logo-name";
import OAuthButtons from "@/components/auth/OAuthButtons";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Login() {
  return (
    <Suspense fallback={<div></div>}>
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const redirectUrl = searchParams.get("redirect") || "/";

  useEffect(() => {
    const checkUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        router.replace(redirectUrl);
      }
    };
    checkUser();
  }, [router, redirectUrl]);

  const handleLogin = async (formData: FormData) => {
    setLoading(true);
    formData.append("redirect", redirectUrl);

    const result = await signInAction(formData);
    if (!result) {
      setLoading(false);
      return;
    }

    router.push(redirectUrl);
  };

  return (
    <>
      <h1 className="md:text-2xl text-xl mb-4 font-bold">
        Sign in to {LogoName.AppName}
      </h1>
      <div className="flex flex-col gap-2 w-full md:max-w-sm max-w-xs mx-auto">
        <OAuthButtons />
      </div>

      <div className="flex items-center w-[350px] mx-auto my-4 px-2">
        <div className="flex-1 border-t border-gray-600"></div>
        <span className="px-2 text-gray-400 text-sm">or</span>
        <div className="flex-1 border-t border-gray-600"></div>
      </div>

      <div className="flex justify-center items-center bg-base-300 px-4 py-4 rounded-lg border-slate-700 border-2 w-full md:max-w-sm max-w-xs mx-auto">
        <form className="flex-1 flex flex-col" action={handleLogin}>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mb-2 mt-3">
            <Label className="text-slate-200" htmlFor="email">
              Email
            </Label>
            <Input
              className="bg-base-200 border-gray-700 text-slate-200 !placeholder-gray-600"
              name="email"
              placeholder="you@example.com"
              required
            />

            <div className="flex justify-between items-center">
              <Label className="text-slate-200" htmlFor="password">
                Password
              </Label>
              <Link
                className="text-xs underline !text-blue-400"
                href="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>

            <Input
              className="bg-base-200 border-gray-700 text-slate-200 !placeholder-gray-600"
              type="password"
              name="password"
              placeholder="Your password"
              required
            />
            <SubmitButton pendingText="Signing In..." disabled={loading}>
              {loading ? "Signing In..." : "Sign in"}
            </SubmitButton>
            <FormMessage
              message={{
                success: searchParams.get("success") || "",
                error: searchParams.get("error") || "",
                message: searchParams.get("message") || "",
              }}
            />
          </div>
          <p className="text-sm text-slate-200 text-center">
            Don't have an account?{" "}
            <Link
              className="font-medium underline text-blue-400"
              href="/sign-up"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
