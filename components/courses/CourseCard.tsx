"use client";

import { isSubscribedNow } from "@/utils/user-actions/subscription";
import { getUserAuth } from "@/utils/user-actions/get-user";
import ProgressBar from "./ProgressBar";
import { allCourses } from "@/data/courses/all-courses";

type CourseCardProps = {
  title: string;
  courseNr: number;
  lessonAmount: number;
  description: string;
  buttonText: string;
  linkUrl: string;
  progress: number;
  available: boolean;
  svg: JSX.Element;
};

export default function CourseCard({
  title,
  description,
  buttonText,
  courseNr,
  linkUrl,
  progress,
  lessonAmount,
  available,
  svg,
}: CourseCardProps) {
  const firstUpcomingCourse = allCourses.find(
    (course) => course.courseNr === 4 && !course.available
  );

  // Check if this specific course is the first one
  const isFirstUpcomingCourse = firstUpcomingCourse?.courseNr === courseNr;

  const handleCourseClick = async () => {
    try {
      // Check if user is logged in first
      const user = await getUserAuth(); // If not authenticated, this will throw

      // If getUserId() fails, catch the error and redirect
      // if (!user) {
      //   window.location.href = "/sign-in";
      //   return;
      // }

      // // Now check subscription status
      // if (!user.email) {
      //   window.location.href = "/sign-in";
      //   return;
      // }

      if (!user) {
        window.location.href = `/sign-in?redirect=${encodeURIComponent("/courses")}`;
        return;
      }

      // Now check subscription status
      if (!user.email) {
        window.location.href = `/sign-in?redirect=${encodeURIComponent("/courses")}`;
        return;
      }

      // Free course (courseNr 0) should be accessible without a subscription
      if (courseNr === 0) {
        window.location.href = linkUrl;
        return;
      }

      const subscribed = await isSubscribedNow(user.email);

      if (!subscribed.isSubscribed) {
        window.location.href = "/account?tab=1"; // Redirect to subscription page
        return;
      }

      // Navigate to the course page (let it handle progress)
      window.location.href = linkUrl;
    } catch (error) {
      console.error("Error handling course click:", error);
    }
  };

  return (
    <>
      {isFirstUpcomingCourse && (
        <>
          <p className="md:text-xl text-xl font-bold mt-4 max-w-lg px-4 text-center">
            Upcoming Courses (Not released yet)
          </p>
          <p className="md:text-xs text-sm max-w-xl px-4 mb-10 text-center">
            Upcoming courses are more technical, aimed at users handling
            advanced security measures.
          </p>
        </>
      )}

      <div className="relative w-full sm:w-[30rem] h-[12.5rem] md:w-[35rem] lg:w-[35rem] overflow-hidden rounded-lg mb-6 border-2 dark:border-gray-400 border-gray-500">
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-3">
          <div
            className={`${available ? "" : "dark:text-slate-600 text-slate-400"}`}
          >
            <div className="flex items-center gap-2">
              {svg}
              <h1 className="text-lg md:text-[1.3rem] font-bold max-w-[16rem] md:max-w-[30rem] ">
                {title}
              </h1>
            </div>
            <p className=" md:text-[14.5px] text-xs md:mt-2 mt-3 max-w-[19.5rem] sm:max-w-[25rem] md:max-w-[27rem]">
              {description}
            </p>
          </div>
          <div className=" flex justify-between items-center">
            <button
              disabled={!available}
              onClick={handleCourseClick}
              className={`${available ? "" : "dark:!text-slate-600 !text-slate-200"} btn-custom-primary-course w-[10rem] hover:bg-blue-500`}
            >
              {available ? buttonText : "Coming Soon"}
            </button>
            <p className="text-xs sm:text-sm mt-2 max-w-[18.5rem] sm:max-w-[25rem] md:max-w-[27rem]">
              {available ? "Lessons: " + lessonAmount : ""}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="absolute top-2 right-2">
          {available ? <ProgressBar progressValue={progress} /> : ""}
        </div>
      </div>
    </>
  );
}
