import { CourseInfo } from "@/constants/course-info";

const networkAllLessonButtons = [
  {
    courseNr: CourseInfo.Network.courseNr,
    title: "Level 1",
    lessons: [
      {
        name: "Introduction to SMB Network Basics",
        link: "/network/introduction",
        position: "start",
      },
      {
        name: "Understanding Network Components",
        link: "/network/components",
        position: "end",
      },
      {
        name: "Identifying Common Network Threats",
        link: "/network/threats",
        position: "start",
      },
      {
        name: "Fundamentals of Firewalls & Routers",
        link: "/network/firewalls-routers",
        position: "end",
      },
    ],
  },
  {
    title: "Level 2",
    lessons: [
      {
        name: "Securing Your Wireless Network",
        link: "/network/wireless-security",
        position: "start",
      },
      {
        name: "VPNs & Remote Access Security",
        link: "/network/vpn-remote",
        position: "end",
      },
      {
        name: "Implementing Network Security Best Practices",
        link: "/network/best-practices",
        position: "start",
      },
      {
        name: "Monitoring, Incident Response & Maintenance",
        link: "/network/monitoring-incident",
        position: "end",
      },
    ],
  },
];

// Calculate the total number of lessons
export const networkTotalLessons = networkAllLessonButtons.reduce(
  (total, level) => total + (level.lessons?.length || 0),
  0
);

export default networkAllLessonButtons;
