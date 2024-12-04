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
        className="flex flex-col items-center justify-center text-center text-slate-200 bg-exhaleguard-primary py-12"
      >
        <h1
          id="main-heading"
          className="text-[2rem] sm:text-[4rem] font-bold mb-4 max-w-[60rem]"
        >
          Cybersecurity Awareness Training.
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

        <p className="mt-3 text-slate-400 text-sm">
          No login or credit card required.
        </p>
        <p className="text-slate-400 text-sm">Full access - $15/mo.</p>
      </div>

      <ValueProposition />
      <PieCharts />
      <Subscriptions />
      <div></div>
    </>
  );
}
