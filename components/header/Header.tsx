import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import { ThemeSwitcher } from "../theme-switcher";
import { createClient } from "@/utils/supabase/server";

export default async function Header() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <nav className="w-full flex justify-between border-b border-b-foreground/10 h-16 bg-blue-600">
        <div className="w-full flex justify-between items-center text-sm">
          <Link href="/">
            <div className="flex items-center font-semibold">
              <img src="/logo.svg" alt="" className="w-4 md:w-6 mx-4" />
              <span className="text-[20px] md:text-2xl font-bold text-slate-200 ml-[-8px]">
                ExhaleGuard
              </span>
            </div>
          </Link>
          <div className="flex items-center justify-center">
            <ThemeSwitcher />
            <div className="hover:underline ml-2 text-slate-200">
              <Link href="/public-demo/courses">Courses</Link>
            </div>
            {/* Pass user data to HamburgerMenu */}
            <HamburgerMenu user={user} />
          </div>
        </div>
      </nav>
    </>
  );
}
