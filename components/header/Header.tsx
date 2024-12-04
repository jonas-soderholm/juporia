import Head from "next/head";
import Link from "next/link";
import HeaderAuth from "@/components/header/auth/header-auth";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <>
      <nav className="w-full flex justify-between border-b border-b-foreground/10 h-16 bg-blue-600">
        <div className="w-full flex justify-between items-center text-sm">
          <Link href="/">
            <div className="flex items-center font-semibold">
              <img src="/logo.svg" alt="" className="w-4 md:w-6 mx-3" />
              <span className="text-[20px] md:text-2xl font-bold text-slate-200 ml-[-8px]">
                ExhaleGuard
              </span>
            </div>
          </Link>
          <div className="flex">
            <HeaderAuth />
            <HamburgerMenu />
          </div>
        </div>
      </nav>
    </>
  );
}
