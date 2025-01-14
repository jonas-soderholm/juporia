import AllLessonsInCourse from "@/components/courses/AllLessonsInCourse";
import { getUserId } from "@/utils/supabase/get-user";
import { CourseInfo } from "@/app/constants/course-info";
import { internetAllLessonButtons } from "@/app/data/lessons/1-internet-computers/all-lesson-buttons";
import { getLessonNr } from "@/utils/course-progression-actions";

export default async function InternetAndComputers() {
  const courseNr = CourseInfo.InternetAndComputers.courseNr;
  const userId = await getUserId();
  const currentLessonNr = await getLessonNr(courseNr, userId);

  return (
    <AllLessonsInCourse
      lessonName={CourseInfo.InternetAndComputers.courseName}
      courseNr={courseNr}
      lessonsData={internetAllLessonButtons}
      lessonNr={currentLessonNr}
      baseUrl={CourseInfo.InternetAndComputers.path}
    />
  );
}
