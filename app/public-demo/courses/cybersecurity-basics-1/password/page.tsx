"use client";

import Lessons from "@/components/courses/Lessons";

const lessonData = {
  title: "Lesson: Password Security",
  courseId: 101,
  lessonId: 10101,
  sections: [
    {
      id: 1,
      sectionTitle: "Password Basics",
      content: "Passwords should be long and unique for each account.",
      question: "What should passwords be?",
      answer: "long and unique",
    },
    {
      id: 2,
      sectionTitle: "Using Password Managers",
      content:
        "Using a password manager helps you create and store secure passwords.",
      question: "What tool helps create and store passwords?",
      answer: "password manager",
    },
  ],
};

export default function Password() {
  return <Lessons title={lessonData.title} sections={lessonData.sections} />;
}
