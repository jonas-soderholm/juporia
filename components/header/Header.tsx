import Link from "next/link";
import NavigationDrawer from "./NavigationDrawer";
import { ThemeSwitcher } from "../ui/theme-switcher";
import { createClient } from "@/utils/supabase/server";
import { LogoName } from "@/constants/logo-name";

export default async function Header() {
  const supabase = await createClient();

  // Force Supabase to fetch the latest user metadata (fixes delay issue)
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Ensure avatar always shows
  const email = user?.email;

  const fullName =
    user?.user_metadata?.full_name ||
    user?.email ||
    email?.split("@")[0] ||
    "User";

  const avatarUrl =
    user?.user_metadata?.avatar_url ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=1e3a8a&color=ffffff`;

  return (
    <>
      <header className="w-full flex justify-between shadow-md h-[4rem] bg-exhaleguard-primary sticky top-0 z-50 overflow-hidden">
        <div className="w-full flex justify-between items-center text-sm">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center font-semibold">
              <img
                src={LogoName.Logo}
                alt="Logo"
                className="w-6 md:w-10 mx-3"
              />
              <span className="text-[20px] md:text-2xl font-bold text-slate-200 ml-[-5px]">
                {LogoName.AppName}
              </span>
            </div>
          </Link>

          {/* Right-side links */}
          <div className="flex items-center justify-center">
            {/* Theme Switcher */}
            <ThemeSwitcher />

            {/* Courses Link */}
            <div className="hover:underline ml-2 text-slate-200">
              <Link href="/courses">Courses</Link>
            </div>

            {/* Auth Links */}
            <div className={`flex items-center ${!user ? "ml-2" : ""}`}>
              {user ? (
                <div className="ml-4">
                  <Link href="/account?tab=1">
                    <img
                      src={avatarUrl}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full hover:outline hover:outline-4 hover:outline-blue-500"
                    />
                  </Link>
                </div>
              ) : (
                <div className="hidden sm:flex items-center">
                  <div className="text-slate-200 pointer-events-none">|</div>
                  <div className="hover:underline text-slate-200 ml-2">
                    <Link href="/sign-in">Sign in</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Drawer */}
            <NavigationDrawer user={user} />
          </div>
        </div>
      </header>
    </>
  );
}
