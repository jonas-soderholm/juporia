import LessonClient from "@/components/lessons/LessonClient";
import { getUserAuth } from "@/utils/user-actions/get-user";
import { isSubscribedNow } from "@/utils/user-actions/subscription";
import { redirect } from "next/navigation";
import { CourseInfo } from "@/constants/course-info";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ course: string; lesson: string }>; // Explicit Promise type
}) {
  // Await params to extract course and lesson
  const { course, lesson } = await params;
  const user = await getUserAuth();
  const subscribed = await isSubscribedNow(user.email || "");

  // Find the course entry to get courseNr
  const courseEntry = Object.values(CourseInfo).find(
    (entry) => entry.path.split("/").pop() === course
  );

  if (!courseEntry) {
    // throw new Error(`No course found for URL: ${course}`);
    redirect("/sign-in");
  }

  // Redirect if not free lesson and not subscribed
  const courseNr = courseEntry.courseNr;
  if (!subscribed.isSubscribed && courseNr !== 0) {
    redirect("/sign-in");
  }

  // Return the client component
  return <LessonClient courseSlug={course} lesson={lesson} />;
}
