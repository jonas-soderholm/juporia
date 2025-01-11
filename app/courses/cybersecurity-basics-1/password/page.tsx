import LessonEngine from "@/components/lessons/LessonEngine";
import { passwordData } from "@/app/data/lessons/cyber1/lesson-specific/password";
// import { getUserId } from "@/utils/supabase/get-user";

export default async function Password() {
  // const userId = await getUserId();
  const userId = 123;

  return (
    <LessonEngine
      title={passwordData.title}
      lessonsOverviewUrl={passwordData.lessonsOverviewUrl}
      sections={passwordData.sections}
      userId={userId}
      courseId={passwordData.courseId}
      lessonId={passwordData.lessonId}
    />
  );
}
