"use client";

import Lessons from "@/components/courses/Lessons";

const lessonData = {
  title: "Lesson: Password Security",
  sections: [
    {
      text: "Passwords should be long and unique for each account.",
      question: "What should passwords be?",
      answer: "long and unique",
    },
    {
      text: "Using a password manager helps you create and store secure passwords.",
      question: "What tool helps create and store passwords?",
      answer: "password manager",
    },
  ],
};

export default function Password() {
  return <Lessons title={lessonData.title} sections={lessonData.sections} />;
}
