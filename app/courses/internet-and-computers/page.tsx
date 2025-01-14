import AllLessonsInCourse from "@/components/courses/AllLessonsInCourse";
import { getUserId } from "@/utils/supabase/get-user";
import { CoursePathAndNr } from "@/app/constants/course-names";
import { internetAllLessonButtons } from "@/app/data/lessons/1-internet-computers/all-lesson-buttons";
import { getLessonNr } from "@/utils/course-progression-actions";

export default async function InternetAndComputers() {
  const courseNr = 1;
  const userId = await getUserId();
  const currentLessonNr = await getLessonNr(courseNr, userId);

  return (
    <AllLessonsInCourse
      lessonName="Internet And Computers"
      courseNr={courseNr}
      lessonsData={internetAllLessonButtons}
      lessonNr={currentLessonNr}
      baseUrl={CoursePathAndNr.InternetAndComputers.path}
    />
  );
}
