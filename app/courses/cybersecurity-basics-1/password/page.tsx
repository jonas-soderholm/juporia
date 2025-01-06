"use client";

import LessonEngine from "@/components/lessons/LessonEngine";
import { passwordData } from "@/app/data/lessons/cyber1/password";

export default function Password() {
  return (
    <LessonEngine
      title={passwordData.title}
      lessonsOverviewUrl={passwordData.lessonsOverviewUrl}
      sections={passwordData.sections}
    />
  );
}
