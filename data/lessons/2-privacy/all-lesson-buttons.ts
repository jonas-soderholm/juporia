import { CourseInfo } from "@/constants/course-info";

const privacyAllLessonButtons = [
  {
    courseNr: CourseInfo.Privacy.courseNr,
    title: "Level 1",
    lessons: [
      {
        name: "Introduction to Privacy & Why It’s Important",
        link: "/privacy-introduction",
        position: "start",
      },
      {
        name: "Who Can See Your Private Messages & How to Stop It",
        link: "/who-can-see-your-data",
        position: "end",
      },
      {
        name: "VPNs – What They Do & When to Use One",
        link: "/vpns-basics",
        position: "start",
      },
      {
        name: "Device & App Privacy – Mobile, IoT & OS Security",
        link: "/device-security",
        position: "end",
      },
    ],
  },
  {
    title: "Level 2",
    lessons: [
      {
        name: "Safe Browsing – Avoiding Trackers & Threats",
        link: "/safe-browsing",
        position: "start",
      },
      {
        name: "What Is a Data Breach & How to Protect Yourself",
        link: "/data-breaches",
        position: "end",
      },
      {
        name: "Advanced Tracking Protection: Cross-Device Tracking & Fingerprinting",
        link: "/advanced-tracking",
        position: "start",
      },
      {
        name: "Privacy Laws, Surveillancem, GDPR & The Future",
        link: "/future",
        position: "end",
      },
    ],
  },
];

// Calculate the total number of lessons
export const privacyTotalLessons = privacyAllLessonButtons.reduce(
  (total, level) => total + (level.lessons?.length || 0),
  0
);

export default privacyAllLessonButtons;
