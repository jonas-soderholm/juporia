import CourseCard from "@/components/courses/CourseCard";
import { allCourses } from "@/data/courses/all-courses";
import { getCourseWithProgress } from "@/utils/course-progression/course-progression-actions";
import { getUserAuth } from "@/utils/user-actions/get-user";
import { isSubscribedNow } from "@/utils/user-actions/subscription";

export default async function AllCourses() {
  const user = await getUserAuth();
  const subscribed = await isSubscribedNow(user.email || "");

  // Filter courses: Hide course 0 if user is subscribed
  const visibleCourses = allCourses.filter(
    (course) => course.courseNr !== 0 || !subscribed.isSubscribed
  );

  // Fetch progress for visible courses
  const courseProgressPromises = visibleCourses.map(async (course) => {
    const { progress } =
      user.email && (subscribed.isSubscribed || course.courseNr === 0) // Fetch if free user also
        ? await getCourseWithProgress(course.courseNr, user.email)
        : { progress: { lessonNr: 0, sectionNr: 0, completed: false } };

    const courseProgress = Math.min(
      (progress.lessonNr / course.lessonAmount) * 100,
      100
    );

    return { courseNr: course.courseNr, progress: courseProgress };
  });

  const courseProgress = await Promise.all(courseProgressPromises);

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">Courses</h1>
      <div className="flex flex-col items-center px-4">
        {visibleCourses.map((course) => {
          const progress =
            courseProgress.find((p) => p.courseNr === course.courseNr)
              ?.progress || 0;

          // Determine button text based on user state
          const buttonText =
            course.courseNr === 0
              ? !user.id
                ? "Sign In"
                : "Start"
              : !user.id
                ? "Sign In"
                : !subscribed.isSubscribed
                  ? "Get Access"
                  : progress === 0
                    ? "Start"
                    : progress === 100
                      ? "Revisit Course"
                      : "Continue";

          // Determine link URL based on user state
          const linkUrl =
            course.courseNr === 0
              ? !user.id
                ? "/sign-in"
                : course.linkUrl
              : !user.id
                ? "/sign-in"
                : !subscribed.isSubscribed
                  ? "/account?tab=1"
                  : course.linkUrl;

          return (
            <CourseCard
              key={course.courseNr}
              title={course.title}
              courseNr={course.courseNr}
              lessonAmount={course.lessonAmount}
              description={course.description}
              buttonText={buttonText}
              image={course.image}
              linkUrl={linkUrl}
              progress={progress}
            />
          );
        })}
      </div>
    </>
  );
}
