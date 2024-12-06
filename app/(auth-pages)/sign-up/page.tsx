import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/header/auth/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center bg-base-100 p-6 rounded-lg border-slate-600 border-2 max-w-[25rem] mt-[8rem]">
      <form className="flex-1 flex flex-col min-w-64">
        <h1 className="text-2xl text-slate-200 mb-3 font-bold">
          Create account
        </h1>
        <p className="text-sm text-foreground text-slate-200">
          Already have an account?{" "}
          <Link
            className="text-foreground font-medium underline text-slate-200"
            href="/sign-in"
          >
            Sign in
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label className="text-slate-200" htmlFor="email">
            Email
          </Label>
          <Input name="email" placeholder="you@example.com" required />
          <Label className="text-slate-200" htmlFor="password">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
          />
          <SubmitButton formAction={signUpAction} pendingText="Signing up...">
            Sign up
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}
