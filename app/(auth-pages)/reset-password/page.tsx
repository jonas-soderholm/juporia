import { resetPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/ui/form-message";
import { SubmitButton } from "@/components/header/auth/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return (
    <>
      {/* Header */}
      <h1 className="md:text-2xl text-xl mb-4 font-bold">
        Reset Your Password
      </h1>
      {/* Form */}
      <div className="flex justify-center items-center bg-base-300 p-4 rounded-lg border-slate-700 border-2  w-full md:max-w-sm max-w-xs mx-auto">
        <form className="flex flex-col w-full" action={resetPasswordAction}>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mb-2 mt-3">
            <Label className="text-slate-200" htmlFor="password">
              New Password
            </Label>
            <Input
              className="bg-base-200 text-gray-200 border-gray-700 !placeholder-gray-600"
              type="password"
              name="password"
              placeholder="New password"
              required
            />
            <Label className="text-slate-200" htmlFor="confirmPassword">
              Confirm Password
            </Label>
            <Input
              className="bg-base-200 text-gray-200 border-gray-700 !placeholder-gray-600"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              required
            />
            <SubmitButton
              formAction={resetPasswordAction}
              pendingText="Resetting..."
            >
              Reset Password
            </SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>
      </div>
      {/* Back to Sign In */}
      <div className="flex justify-center items-center mt-4 bg-base-300 px-6 py-6 rounded-lg border-slate-700 border-2 w-full md:max-w-sm max-w-xs mx-auto">
        <p className="text-sm text-foreground text-slate-200 text-center">
          Back to{" "}
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
