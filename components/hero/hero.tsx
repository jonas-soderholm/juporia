import Link from "next/link";
import Subscriptions from "./subscriptions";
import { ValueProposition } from "./valueProposition";

export default function Hero() {
  return (
    <>
      {/* Hero  */}
      <div
        aria-labelledby="main-heading"
        className="flex flex-col items-center justify-center text-center p-6 mt-[3rem]"
      >
        <div className="flex items-center font-semibold">
          <img
            src="./logo.svg"
            alt="XhaleGuard Logo"
            className="w-20 mx-3 mb-4"
          />
        </div>
        <h1
          id="main-heading"
          className="text-[4rem] font-bold mb-4 max-w-[60rem] "
        >
          Basic Essential Cybersecurity for Everyone
        </h1>

        <p className="text-[1rem] mb-8 max-w-[35rem]">
          Simple, essential cybersecurity—from team members and everyday users
          to CEOs and executives.
        </p>

        <Link href="/courses">
          <button
            className="btn btn-accent"
            aria-label="Try 5 free cybersecurity lessons"
          >
            Try 5 Free Lessons Now
          </button>
        </Link>

        <p className="mt-3 text-stone-700 text-sm">
          No login or credit card required.
        </p>
        <p className="text-stone-700 text-sm">Full access - $15/month.</p>
      </div>

      <ValueProposition />
      <Subscriptions />
    </>
  );
}

{
  /* <p className="text-base mb-4 max-w-[35rem] ">
Established frameworks like CIS 18, NIST, and ISO 27000 are trusted
for securing organizations. However, for small and medium businesses,
they can feel overly complex—especially without dedicated
cybersecurity staff. These frameworks often require a security team to
implement and maintain effectively.
</p>
<p className="text-base mb-4 max-w-[35rem] ">
Our course bridges this gap, making essential cybersecurity practices
simple and accessible for everyone—no technical background needed.
Think of it as your first step toward a stronger security foundation.
</p>
<p className="text-base mb-4 max-w-[35rem] ">
After completing our course, your team will not only be more secure
but also better prepared to tackle advanced frameworks like CIS 18 or
NIST with confidence.
</p>
<p className="text-base mb-8 max-w-[35rem]">
Take the first step today. Build your security foundation with us and
grow into the frameworks that will keep you protected for the long
term.
</p> */
}
