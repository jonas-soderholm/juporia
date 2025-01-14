import AllLessonsInCourse from "@/components/courses/AllLessonsInCourse";
import { cyber1AllLessonButtons } from "@/app/data/lessons/2-cyber1/all-lesson-buttons";
import { getLessonNr } from "@/utils/course-progression-actions";
import { getUserId } from "@/utils/supabase/get-user";
import { CoursePathAndNr } from "@/app/constants/course-names";

export default async function CybersecurityBasics() {
  const courseNr = 2;
  const userId = await getUserId();
  const currentLessonNr = await getLessonNr(courseNr, userId);

  return (
    <AllLessonsInCourse
      lessonName="Cybersecurity Basics 1.0"
      courseNr={courseNr}
      lessonsData={cyber1AllLessonButtons}
      lessonNr={currentLessonNr}
      baseUrl={CoursePathAndNr.Cyber1.path}
    />
  );
}
