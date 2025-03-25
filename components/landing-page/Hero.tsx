"use client";
import Link from "next/link";
import PreloadLogoImage from "../lessons/PreloadLogoSpinner";

export default function Hero() {
  return (
    <>
      {/* Preload the logo image for lessons */}
      <PreloadLogoImage />
      {/* Hero Section */}
      <section
        aria-labelledby="main-heading"
        className="xl:flex p-6 md:p-16 gap-2 text-slate-200 bg-exhaleguard-primary dark:bg-[#293a5e] md:py-16 justify-center items-center"
        // style={{ height: "calc(100vh - 4rem)" }}
      >
        <div>
          <h1
            id="main-heading"
            className="text-[1.6rem] lg:text-[2.5rem] 2xl:text-[3.3rem] font-bold mb-4 max-w-[50rem]"
          >
            Cybersecurity & Privacy Awareness Training.
          </h1>
          <p className="text-[1rem] mb-8 max-w-[35rem]">
            Structured, beginner-friendly courses for teams, business owners,
            and individuals. Learn how to protect data, reduce risks, and
            respond effectively when security is compromised.
          </p>
          <Link href="/courses" aria-label="View free cybersecurity lessons">
            <button
              className="btn-custom-primary"
              aria-label="Try 5 free cybersecurity lessons"
            >
              Try 3 Free Lessons Now
            </button>
          </Link>
          <p className="mt-3 text-slate-400 text-sm">
            No credit card required.
          </p>
        </div>

        {/* <div className="justify-center items-center h-[500px] hidden xl:flex"> */}
        <div className="flex justify-center items-center md:items-start md:mt-12 mt-6">
          <img
            src="./images/hero/device-mockup.png"
            alt="Cybersecurity course background promoting basic cybersecurity training"
            loading="lazy"
            className="w-auto md:h-[18rem] h-[10rem] max-w-full max-h-full object-contain"
          />
        </div>
      </section>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        height="5000px"
        viewBox="0 -960 960 960"
        width="50px"
        fill="#FFFFFF"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <path d="m480.77-344.62 131.54-131.53-27.54-27.54-84 84v-196.46H460v196.46l-84-84-27.54 27.54 132.31 131.53ZM480.13-120q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
      </svg> */}
    </>
  );
}
