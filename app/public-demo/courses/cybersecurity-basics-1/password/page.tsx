"use client";

import Lessons from "@/components/courses/Lessons";

const lessonData = {
  title: "Password Security",
  courseId: 101,
  lessonId: 10101,
  sections: [
    {
      id: 1,
      sectionTitle: "How Long?",
      content:
        "password manager should be asswords should be long and uasswords should be long and uasswords should be long and ulong and unique for each account!!!.",
      question: "What should passwords be?",
      answer: "password manager",
    },
    {
      id: 2,
      sectionTitle: "Using Password Managers",
      content:
        "password manager a password manager helps you create and store secure passwords.",
      question: "What tool helps create and store passwords?",
      answer: "password manager",
    },
    {
      id: 1,
      sectionTitle: "How Long?",
      content:
        "password manager should be long and unique for each account!!!.",
      question: "What should passwords be?",
      answer: "password manager",
    },
    {
      id: 2,
      sectionTitle: "Using Password Managers",
      content:
        "password manager Using a password manager helps you create and store secure passwords.",
      question: "What tool helps create and store passwords?",
      answer: "password manager",
    },
  ],
};

export default function Password() {
  return <Lessons title={lessonData.title} sections={lessonData.sections} />;
}
