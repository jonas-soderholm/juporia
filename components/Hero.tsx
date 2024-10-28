export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center p-6 mt-20">
      <h1 className="text-[5rem] font-bold mb-4 ">Basic cybersecurity</h1>

      <p className="text-[1.5rem] mb-8">for employees and everyday users</p>

      <button className="btn btn-accent">Try 5 free lessons</button>

      <p className="mt-3 text-stone-700 text-sm">
        No login or credit card required.
      </p>
      <p className=" text-stone-700 text-sm">Get all courses for $15/month</p>
    </section>
  );
}
