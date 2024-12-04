import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { createClient } from "@/utils/supabase/server";
import HamburgerMenu from "../HamburgerMenu";
import { ThemeSwitcher } from "../../theme-switcher";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center ">
      {/* Hey, {user.email}! */}
      <ThemeSwitcher />
      <div className=" hover:underline ml-2">
        <Link href="/public-demo/courses">Courses</Link>
      </div>
      <div>
        <HamburgerMenu />
      </div>
    </div>
  ) : (
    <div className="flex items-center gap-4">
      {/* Buttons aligned to the right */}
      <div className="flex gap-2 mx-3">
        <ThemeSwitcher />
        <Button asChild size="sm" variant="outline">
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button asChild size="sm" variant="default">
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </div>
  );
}
