import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.FreeCourse.courseNr,
  lessonsOverviewUrl: CourseInfo.FreeCourse.path,
  sections: [
    {
      id: 1,
      sectionTitle: "Free1",
      content: ["free1", "free1"],
      question: "Why are strong passwords important?",
      answerKeywords: [
        "asd",
        "12 characters",
        "uppercase",
        "lowercase",
        "numbers",
        "special characters",
      ],
      images: ["", "/images/hero/device-mockup.png"],
    },
    {
      id: 2,
      sectionTitle: "Free1",
      content: ["free2", "free2"],
      question: "Name two characteristics of a strong password.",
      answerKeywords: [
        "asd",
        "12 characters",
        "uppercase",
        "lowercase",
        "numbers",
        "special characters",
      ],
      images: [""],
    },
  ],
};

export default LessonData;
