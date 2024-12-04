"use client";

import LogoutButton from "./auth/logout-button";
import Link from "next/link";
import type { User } from "@supabase/auth-js";

export default function NavigationDrawer({ user }: { user: User | null }) {
  const closeDrawer = () => {
    const drawerToggle = document.getElementById(
      "my-drawer"
    ) as HTMLInputElement;
    if (drawerToggle) {
      drawerToggle.checked = false; // Close the drawer
    }
  };

  return (
    <div className="flex mx-2 text-slate-200">
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="btn btn-square btn-ghost text-white hover:text-slate-300 hover:bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side mt-[4rem]">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li>
              <Link href="/public-demo/courses" onClick={closeDrawer}>
                Courses
              </Link>
            </li>
            <li>
              <Link href="/faq" onClick={closeDrawer}>
                FAQ
              </Link>
            </li>
            {user ? (
              <li>
                <Link href="/account" onClick={closeDrawer}>
                  My Account
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/sign-in" onClick={closeDrawer}>
                  My Account
                </Link>
              </li>
            )}
            <li>
              <Link href="/faq" onClick={closeDrawer}>
                Pricing
              </Link>
            </li>
            {user ? (
              <>
                <div className="flex w-full flex-col">
                  <div className="divider"></div>
                </div>
                <div>
                  <LogoutButton />
                </div>
              </>
            ) : (
              <>
                <div className="divider"></div>
                <li>
                  <Link href="/sign-up" onClick={closeDrawer}>
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link href="/sign-in" onClick={closeDrawer}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
