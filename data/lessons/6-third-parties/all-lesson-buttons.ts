import { CourseInfo } from "@/constants/course-info";

const frameworkServicesAllLessonButtons = [
  {
    courseNr: CourseInfo.ThirdParty.courseNr,
    title: "Level 1",
    lessons: [
      {
        name: "When to Transition: Recognizing the Need for Formal Frameworks",
        link: "/framework/transition",
        position: "start",
      },
      {
        name: "Introduction to Third Party Risk Management",
        link: "/framework/intro-third-party",
        position: "end",
      },
      {
        name: "Overview of Key Security Frameworks",
        link: "/framework/overview",
        position: "start",
      },
      {
        name: "Understanding ISO 27001 for SMBs",
        link: "/framework/iso-27001",
        position: "end",
      },
    ],
  },
  {
    title: "Level 2",
    lessons: [
      {
        name: "Getting Started with the NIST Cybersecurity Framework",
        link: "/framework/nist-intro",
        position: "start",
      },
      {
        name: "Implementing Frameworks in Your Business",
        link: "/framework/implementation",
        position: "end",
      },
      {
        name: "Managing Third Party Vendors Effectively",
        link: "/framework/vendor-management",
        position: "start",
      },
      {
        name: "Ensuring Compliance and Audit Readiness",
        link: "/framework/compliance",
        position: "end",
      },
      {
        name: "Scaling Up: Transitioning to Enterprise-Level Security",
        link: "/framework/scaling-up",
        position: "start",
      },
    ],
  },
];

// Calculate the total number of lessons
export const frameworkServicesTotalLessons =
  frameworkServicesAllLessonButtons.reduce(
    (total, level) => total + (level.lessons?.length || 0),
    0
  );

export default frameworkServicesAllLessonButtons;
