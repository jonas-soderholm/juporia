import Link from "next/link";
import NavigationDrawer from "./NavigationDrawer";
import { ThemeSwitcher } from "../theme-switcher";
import { createClient } from "@/utils/supabase/server";

export default async function Header() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <nav className="w-full flex justify-between shadow-md h-[4rem] bg-exhaleguard-primary sticky top-0 z-50">
        <div className="w-full flex justify-between items-center text-sm">
          <Link href="/">
            <div className="flex items-center font-semibold">
              <img src="/tower.png" alt="" className="w-6 md:w-8 mx-4" />
              <span className="text-[20px] md:text-2xl font-bold text-slate-200 ml-[-18px]">
                TowerDock
              </span>
            </div>
          </Link>
          <div className="flex items-center justify-center">
            <ThemeSwitcher />
            <div className="hover:underline ml-2 text-slate-200">
              <Link href="/public-demo/courses">Courses</Link>
            </div>
            {/* Pass user data to NavigationDrawer */}
            <NavigationDrawer user={user} />
          </div>
        </div>
      </nav>
    </>
  );
}
