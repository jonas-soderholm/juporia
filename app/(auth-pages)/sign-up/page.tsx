import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/ui/form-message";
import { SubmitButton } from "@/components/header/auth/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Logo } from "@/constants/logo";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return (
    <>
      {/* Logo */}
      <div className="flex items-center font-semibold mt-[2rem] mb-2">
        <img src={Logo.Tower} alt="Xhale Logo" className="w-6 md:w-14 mx-4" />
      </div>
      {/* Header */}
      <h1 className="text-lg mb-4">Sign up to ExhaleGuard</h1>
      {/* Form */}
      <div className="flex justify-center items-center bg-base-300 px-6 py-6 rounded-lg border-slate-700 border-2 w-[350px] mx-auto">
        <form className="flex-1 flex flex-col" action={signUpAction}>
          <div className="flex flex-col gap-2 [&>input]:mb-3  mb-2 mt-3">
            <Label className="text-slate-200" htmlFor="email">
              Email
            </Label>
            <Input
              className="bg-base-200 text-gray-200 border-gray-700 !placeholder-gray-600"
              name="email"
              placeholder="you@example.com"
              required
            />
            <Label className="text-slate-200" htmlFor="password">
              Password
            </Label>
            <Input
              className="bg-base-200 border-gray-700 text-slate-200 !placeholder-gray-600"
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
      {/* Already Have an Account */}
      <div className="flex justify-center items-center mt-4 bg-base-300 px-6 py-6 rounded-lg border-slate-700 border-2 w-[350px] mx-auto">
        <p className="text-sm text-foreground text-slate-200 text-center">
          Already have an account?{" "}
          <Link
            className="text-foreground font-medium underline text-slate-200"
            href="/sign-in"
          >
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}
