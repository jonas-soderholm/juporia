export default function Hero() {
  return (
    <section
      aria-labelledby="main-heading"
      className="flex flex-col items-center justify-center text-center p-6"
    >
      <div className="flex items-center font-semibold">
        <img
          src="./logo.png"
          alt="XhaleGuard Logo"
          className="w-20 mx-3 mb-4"
        />
      </div>
      <h1 id="main-heading" className="text-[4rem] font-bold mb-4">
        Cybersecurity Basics for Everyone
      </h1>

      <p className="text-[1rem] mb-8 max-w-[35rem]">
        Simple, essential cybersecurity—from team members and everyday users to
        CEOs and executives.
      </p>

      <button
        className="btn btn-accent"
        aria-label="Try 5 free cybersecurity lessons"
      >
        Try 5 Free Lessons Now
      </button>

      <p className="mt-3 text-stone-700 text-sm">
        No login or credit card required.
      </p>
      <p className="text-stone-700 text-sm">Or all courses for $15/month.</p>
    </section>
  );
}
