import { redirect } from "next/navigation";
import AllLessonsInCourse from "@/components/courses/AllLessonsInCourse";
import { CourseInfo } from "@/constants/course-info";
import { ensureAndGetAllProgress } from "@/utils/course-progression/course-progression-actions";
import { getUserAuth } from "@/utils/user-actions/get-user";
import { isSubscribedNow } from "@/utils/user-actions/subscription";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;

  const courseEntry = Object.values(CourseInfo).find(
    (entry) => entry.path.split("/").pop() === course
  );

  if (!courseEntry) {
    // throw new Error(`No course found for URL: ${course}`);
    redirect("/sign-in");
  }

  // Fetch user ID once
  const user = await getUserAuth();
  if (!user) redirect("/sign-in");

  // Fetch subscription & progress in one **optimized** query
  const [isSubscribed, progress] = await Promise.all([
    isSubscribedNow(user.email || ""),
    ensureAndGetAllProgress(courseEntry.courseNr), // This should now run only **once**
  ]);

  // Redirect if not free lesson and not subscribed
  if (!isSubscribed.isSubscribed && courseEntry.courseNr !== 0)
    redirect("/sign-in");

  // Import lesson data once
  const lessonsData = (
    await import(`@/data/lessons/${courseEntry.folderName}/all-lesson-buttons`)
  ).default;

  return (
    <>
      <AllLessonsInCourse
        lessonName={courseEntry.courseName}
        courseNr={courseEntry.courseNr}
        lessonsData={lessonsData}
        lessonNr={progress?.lessonNr ?? 0} // Avoids unnecessary re-fetching
        baseUrl={courseEntry.path}
      />
    </>
  );
}
