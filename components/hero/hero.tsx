"use client";

import Link from "next/link";
import Subscriptions from "./Subscriptions";
import { ValueProposition } from "./ValueProposition";
import PieCharts from "./Piecharts";

export default function Hero() {
  return (
    <>
      {/* Hero  */}
      <div
        aria-labelledby="main-heading"
        className="flex flex-col items-center justify-center text-center p-6 mt-[5rem]"
      >
        <div className="flex items-center font-semibold">
          <img
            src="/logo.svg"
            alt="XhaleGuard Logo"
            className="w-20 mx-3 mb-4"
          />
        </div>
        <h1
          id="main-heading"
          className="text-[2rem] sm:text-[4rem] font-bold mb-4 max-w-[60rem]"
        >
          Learn Essential Cybersecurity Skills—Easily
        </h1>

        <p className="text-[1rem] mb-8 max-w-[35rem]">
          Accessible, beginner-friendly courses designed to empower
          everyone—from team members to executives—with core cybersecurity
          knowledge.
        </p>

        <Link href="/public-demo/courses">
          <button
            className="btn-custom-primary"
            aria-label="Try 5 free cybersecurity lessons"
          >
            Try 5 Free Lessons Now
          </button>
        </Link>

        <p className="mt-3 text-stone-700 text-sm">
          No login or credit card required.
        </p>
        <p className="text-stone-700 text-sm">Full access - $19/mo.</p>
      </div>

      <ValueProposition />
      <PieCharts />
      <Subscriptions />
    </>
  );
}
