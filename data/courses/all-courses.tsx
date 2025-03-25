import { CourseInfo } from "@/constants/course-info";
import { cyber1TotalLessons } from "../lessons/1-cybersecurity-basics-1/all-lesson-buttons";
import { cyber2TotalLessons } from "../lessons/3-cybersecurity-basics-2/all-lesson-buttons";
import { internetComputerTotalLessons } from "../lessons/4-internet-computers/all-lesson-buttons";
import { freeLessonsTotalLessons } from "../lessons/0-free-lessons/all-lesson-buttons";
import { privacyTotalLessons } from "../lessons/2-privacy/all-lesson-buttons";
import { frameworkServicesTotalLessons } from "../lessons/6-third-parties/all-lesson-buttons";
import { networkTotalLessons } from "../lessons/5-network/all-lesson-buttons";

export const allCourses = [
  {
    courseNr: CourseInfo.FreeCourse.courseNr,
    lessonAmount: freeLessonsTotalLessons,
    title: "Free Lessons",
    description:
      "Explore our free lessons to see if full access is right for you!",
    buttonText: "Start",
    linkUrl: CourseInfo.FreeCourse.path,
    available: true,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32px"
        viewBox="0 -960 960 960"
        width="32px"
        fill="#2563eb"
      >
        <path d="M660-160H146.67q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160h-58.9L556.67-360.67q-21 16.67-45.17 24.34-24.17 7.66-50.83 7.66-71.67 0-122.84-50.16-51.16-50.17-51.16-122.84 0-72.66 51.16-122.5Q389-674 460.67-674q71.66 0 121.5 49.83Q632-574.33 632-501.33q0 25.8-7.33 48.73-7.34 22.93-21.34 44.6L782-226.67h31.33v-506.66H146.67v506.66h446.66L660-160ZM460.67-395.33q44.66 0 74.66-30.34 30-30.33 30-76 0-45.66-30-75.66t-74.66-30q-44.67 0-76 30-31.34 30-31.34 75.66 0 45.67 31.34 76 31.33 30.34 76 30.34Zm-314 168.66v-506.66 506.66Z" />
      </svg>
    ),
  },
  {
    courseNr: CourseInfo.Cyber1.courseNr,
    lessonAmount: cyber1TotalLessons,
    title: "Cybersecurity 1.0",
    description:
      "A foundational course designed for the entire organization. Ideal for beginners, with no prior knowledge required, to strengthen cybersecurity awareness and practices across all teams.",
    buttonText: "Start",
    linkUrl: CourseInfo.Cyber1.path,
    available: true,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32px"
        viewBox="0 -960 960 960"
        width="32px"
        fill="#2563eb"
      >
        <path d="M742-246q26.95 0 45.81-18.87 18.86-18.88 18.86-45.84 0-26.96-18.86-45.46T742-374.67q-26.67 0-45.33 18.74Q678-337.2 678-310.43q0 26.76 18.67 45.6Q715.33-246 742-246Zm-.14 128.67q32.14 0 60.14-15t45.67-41.34q-25-14-51.34-21.83-26.33-7.83-54.33-7.83t-54.33 7.83q-26.34 7.83-51.34 21.83 17.67 26.34 45.53 41.34 27.85 15 60 15ZM353.33-636h253.34v-88.67q0-54.66-36.67-91.66t-90-37q-53.33 0-90 37t-36.67 91.66V-636ZM534.67-80h-308q-26.34 0-46.5-20.17Q160-120.33 160-146.67v-422.66q0-26.34 20.17-46.5Q200.33-636 226.67-636h60v-88.67q0-81.66 56.16-138.5Q399-920 480-920q81 0 137.17 56.83 56.16 56.84 56.16 138.5V-636h60q26.34 0 46.5 20.17Q800-595.67 800-569.33V-494q-14.67-4-30.5-5.67-15.83-1.66-36.17-1.66v-68H226.67v422.66H498q7.33 19.34 15.33 34.17 8 14.83 21.34 32.5ZM742-44q-80.33 0-137.83-57.5-57.5-57.5-57.5-137.83 0-80.34 57.5-137.84T742-434.67q80.33 0 137.83 57.5 57.5 57.5 57.5 137.84 0 80.33-57.5 137.83Q822.33-44 742-44ZM226.67-569.33V-146.67v-422.66Z" />
      </svg>
    ),
  },
  {
    courseNr: CourseInfo.Privacy.courseNr,
    lessonAmount: privacyTotalLessons,
    title: "Privacy Basics",
    description:
      "In this beginner-friendly course, you'll learn who can access your data, messages, and emails. Understanding how to protect your activity from unwanted eyes is crucial knowledge that most people overlook today.",
    buttonText: "Start",
    linkUrl: CourseInfo.Privacy.path,
    available: true,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32px"
        viewBox="0 -960 960 960"
        width="32px"
        fill="#2563eb"
      >
        <path d="M480-392q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q141 0 257.5 76T912-520h-91q-52-93-143-146.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q20 0 40-2t40-6v81q-20 3-40 5t-40 2Zm0-120q22 0 42.5-5t38.5-14q5-50 31.5-90t67.5-64v-7q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm-5-180Zm205 380q-17 0-28.5-11.5T640-160v-120q0-17 11.5-28.5T680-320v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40q17 0 28.5 11.5T880-280v120q0 17-11.5 28.5T840-120H680Zm40-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40Z" />
      </svg>
    ),
  },
  {
    courseNr: CourseInfo.Cyber2.courseNr,
    lessonAmount: cyber2TotalLessons,
    title: "Cybersecurity 2.0",
    description:
      "Learn how to protect your business with practical cybersecurity strategies, risk management, disaster recovery, and Zero Trust security. Gain hands-on skills to prevent, detect, and respond to threats effectively.",
    buttonText: "Start",
    linkUrl: CourseInfo.Cyber2.path,
    available: true,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32px"
        viewBox="0 -960 960 960"
        width="32px"
        fill="#2563eb"
      >
        <path d="M208-254v-319.33h66.67V-254H208Zm241.33 0v-319.33H516V-254h-66.67ZM80-640v-62l400-218.67L880-702v62H80Zm149-66.67h502l-251-138-251 138Zm-149 586v-66.66h494q2 16.33 4 32.5 2 16.16 8 34.16H80ZM685.33-418v-155.33H752v122L685.33-418ZM800 0q-69-17-114.5-79.5T640-218v-102l160-80 160 80v102q0 76-45.5 138.5T800 0Zm-23.67-120 141-140.67-32.66-32.66-108.34 107.66L724-238l-32.67 33 85 85ZM229-706.67h502-502Z" />
      </svg>
    ),
  },
  {
    courseNr: CourseInfo.InternetAndComputers.courseNr,
    lessonAmount: internetComputerTotalLessons,
    title: "Internet and Computer Basics",
    description:
      "Learn how computers and the internet work—no prior knowledge needed! Build a foundation for understanding cybersecurity better.",
    buttonText: "Start",
    linkUrl: CourseInfo.InternetAndComputers.path,
    available: false,
  },
  {
    courseNr: CourseInfo.Network.courseNr,
    lessonAmount: networkTotalLessons,
    title: "Network Basics",
    description:
      "Learn key network concepts, including components, threats, firewalls, routers, wireless security, and VPNs. Strengthen your network security skills.",
    buttonText: "Start",
    linkUrl: CourseInfo.Network.path,
    available: false,
  },
  {
    courseNr: CourseInfo.ThirdParty.courseNr,
    lessonAmount: frameworkServicesTotalLessons,
    title: "Security Frameworks & Third-Party Management",

    description:
      "Key security standards for enterprises. They require resources, but learning about them is a great first step.",
    buttonText: "Start",
    linkUrl: CourseInfo.ThirdParty.path,
    available: false,
  },
];
