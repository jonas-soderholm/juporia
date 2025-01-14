import AllLessonsInCourse from "@/components/courses/AllLessonsInCourse";
import { cyber1AllLessonButtons } from "@/app/data/lessons/2-cyber1/all-lesson-buttons";
import { getLessonNr } from "@/utils/course-progression-actions";
import { getUserId } from "@/utils/supabase/get-user";
import { CourseInfo } from "@/app/constants/course-info";

export default async function CybersecurityBasics() {
  const courseNr = CourseInfo.Cyber1.courseNr;
  const userId = await getUserId();
  const currentLessonNr = await getLessonNr(courseNr, userId);

  return (
    <AllLessonsInCourse
      lessonName={CourseInfo.Cyber1.courseName}
      courseNr={courseNr}
      lessonsData={cyber1AllLessonButtons}
      lessonNr={currentLessonNr}
      baseUrl={CourseInfo.Cyber1.path}
    />
  );
}
