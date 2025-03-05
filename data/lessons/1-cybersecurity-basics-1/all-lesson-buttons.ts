import { CourseInfo } from "@/constants/course-info";

const cyber1AllLessonButtons = [
  {
    courseNr: CourseInfo.Cyber1.courseNr,
    title: "Level 1",
    lessons: [
      {
        name: "Introduction to Cybersecurity & Why It Matters",
        link: "/introduction-1.0",
        position: "start",
      },
      {
        name: "Types of Cybercriminals & Their Motivations",
        link: "/cybercriminal-types",
        position: "end",
      },
      {
        name: "Social Engineering & Psychological Manipulation",
        link: "/social-engineering",
        position: "end",
      },
      {
        name: "Passwords & Authentication – How Hackers Break In",
        link: "/passwords-1.0",
        position: "end",
      },
    ],
  },
  {
    title: "Level 2",
    lessons: [
      {
        name: "Malware and Viruses: How Computers Get Infected",
        link: "/malware-1.0",
        position: "start",
      },
      {
        name: "Personal Cybersecurity Best Practices & Identity Protection",
        link: "/personal-cybersecurity",
        position: "end",
      },
      {
        name: "The Dark Web, Cryptography & Cybercrime Markets",
        link: "/dark-web-cryptography",
        position: "end",
      },
      {
        name: "The Future of Cybersecurity – Staying Safe in a Changing World",
        link: "/future-of-cybersecurity",
        position: "end",
      },
    ],
  },
];

// Calculate the total number of lessons
export const cyber1TotalLessons = cyber1AllLessonButtons.reduce(
  (total, level) => total + (level.lessons?.length || 0),
  0
);

export default cyber1AllLessonButtons;
