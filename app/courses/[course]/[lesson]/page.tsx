"use client";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LessonEngine from "@/components/lessons/LessonEngine";
import { CourseInfo } from "@/constants/course-info";

export default function LessonPage() {
  const { lesson } = useParams() as { lesson: string };
  const pathname = usePathname();

  const courseSlug = pathname.split("/")[2];

  // Find the course in CourseInfo
  const courseEntry = Object.values(CourseInfo).find(
    (course) => course.path.split("/")[2] === courseSlug
  );

  if (!courseEntry) {
    throw new Error(`No course found for slug: ${courseSlug}`);
  }

  const course = courseEntry.folderName; // Get the folder name dynamically
  console.log("[DEBUG] Resolved Course Folder:", course);

  const [lessonData, setLessonData] = useState<any>(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLessonData() {
      console.log("[DEBUG] Fetching lesson data for:", course, lesson);

      if (!lesson) {
        setError("Missing `lesson` parameter in the URL.");
        return;
      }

      try {
        // Dynamically import all lesson buttons for the course
        const lessonButtons = await import(
          `@/data/lessons/${course}/all-lesson-buttons`
        );

        console.log("[DEBUG] Imported Lesson Buttons:", lessonButtons);

        const allLessons = lessonButtons.default.flatMap(
          (level: any) => level.lessons
        );

        console.log("[DEBUG] Flattened Lessons:", allLessons);

        // Find the index of the current lesson
        const index = allLessons.findIndex((l: any) => {
          const relativePath = pathname.replace(`/courses/${courseSlug}`, "");
          console.log(
            `[DEBUG] Comparing lesson link: ${l.link} with relativePath: ${relativePath}`
          );
          return l.link === relativePath;
        });

        if (index === -1) {
          console.error("[DEBUG] Current lesson not found in lessons array.");
        } else {
          console.log("[DEBUG] Current Lesson Index:", index);
          console.log("[DEBUG] Current Lesson:", allLessons[index]);
          setCurrentLessonIndex(index);
        }

        // Dynamically import the specific lesson data
        const data = await import(
          `@/data/lessons/${course}/lesson-specific/${lesson}`
        );
        console.log("[DEBUG] Lesson data loaded:", data);

        setLessonData(data.default || data.internetAndComputersData);
      } catch (err: any) {
        console.error("[DEBUG] Error loading lesson data:", err.message);
        setError("Failed to load lesson data.");
      }
    }

    fetchLessonData();
  }, [lesson, course, pathname]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!lessonData) {
    return <p>Loading...</p>;
  }

  return (
    <LessonEngine
      lessonsOverviewUrl={lessonData.lessonsOverviewUrl}
      sections={lessonData.sections}
      courseNr={lessonData.courseNr}
      currentLessonIndex={currentLessonIndex ?? 0}
    />
  );
}
