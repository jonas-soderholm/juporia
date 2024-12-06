import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/header/auth/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="flex justify-center items-center bg-base-100 p-6 rounded-lg border-slate-600 border-2 max-w-[25rem] mt-[8rem]">
      <form className="flex-1 flex flex-col min-w-64">
        <h1 className="text-2xl text-slate-200 mb-3 font-bold">Login</h1>
        <p className="text-sm text-foreground text-slate-200">
          Don't have an account?{" "}
          <Link
            className="text-foreground font-medium underline text-slate-200"
            href="/sign-up"
          >
            Sign up
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label className="text-slate-200" htmlFor="email">
            Email
          </Label>
          <Input name="email" placeholder="you@example.com" required />
          <div className="flex justify-between items-center">
            <Label className="text-slate-200" htmlFor="password">
              Password
            </Label>
            <Link
              className="text-xs text-foreground underline text-slate-200"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            required
          />
          <SubmitButton pendingText="Signing In..." formAction={signInAction}>
            Sign in
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}
