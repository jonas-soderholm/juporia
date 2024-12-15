"use client";

import LessonEngine from "@/components/courses/lessons/LessonEngine";
import { passwordData } from "@/app/data/lessons/cyber1/password";

export default function Password() {
  return (
    <LessonEngine title={passwordData.title} sections={passwordData.sections} />
  );
}
