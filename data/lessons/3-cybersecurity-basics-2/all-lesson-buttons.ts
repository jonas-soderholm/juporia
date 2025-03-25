import { CourseInfo } from "@/constants/course-info";

const cyber2AllLessonButtons = [
  {
    courseNr: CourseInfo.Cyber2.courseNr,
    title: "Level 1",
    lessons: [
      {
        name: "Cyber Hygiene for SMBs – Security Without an IT Team",
        link: "/basic-cyber-hygiene",
        position: "start",
      },
      {
        name: "Business Continuity, Disaster Recovery (BC/DR) & GDPR Compliance",
        link: "/bcdr",
        position: "start",
      },
      {
        name: "Incident Response & Risk Management",
        link: "/incident-response",
        position: "end",
      },
      {
        name: "CIA Triad: Confidentiality, Integrity & Availability",
        link: "/cia-triad",
        position: "start",
      },
      {
        name: "The Zero Trust Security Model & Why It’s Critical",
        link: "/zero-trust",
        position: "start",
      },
    ],
  },
  {
    title: "Level 2",
    lessons: [
      {
        name: "Zero Day Exploits: Understanding the Threat",
        link: "/zero-day-exploits",
        position: "start",
      },
      {
        name: "The Kill Chain: How Attacks Unfold",
        link: "/kill-chain",
        position: "end",
      },
      {
        name: "Network Attacks: MITM, Wi-Fi Hacking & Traffic Manipulation",
        link: "/network-attacks",
        position: "start",
      },
      {
        name: "Introduction to Penetration Testing & Ethical Hacking",
        link: "/pentesting",
        position: "end",
      },
    ],
  },
];

// Calculate the total number of lessons
export const cyber2TotalLessons = cyber2AllLessonButtons.reduce(
  (total, level) => total + (level.lessons?.length || 0),
  0
);

export default cyber2AllLessonButtons;
