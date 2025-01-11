import AllLessonsInCourse from "@/components/courses/AllLessonsInCourse";
import { cyber1AllLessonButtons } from "@/app/data/lessons/cyber1/all-lesson-buttons";

export default function CybersecurityBasics() {
  return (
    <AllLessonsInCourse
      lessonName="Cybersecurity Basics 1.0"
      lessonsData={cyber1AllLessonButtons}
      lessonNr={0}
    />
  );
}
