import { CourseInfo } from "@/constants/course-info";

const freeLessonAllLessonButtons = [
  {
    courseNr: CourseInfo.FreeCourse.courseNr,
    title: "Level 1",
    lessons: [
      {
        name: "Passwords: How Long Does It Take to Hack?",
        link: "/free-password",
        position: "start",
      },
      {
        name: "Who Can See Your Private Messages Online?",
        link: "/free-who-can-see",
        position: "end",
      },
      {
        name: "Malware and Viruses: How Computers Get Infected",
        link: "/free-what-is-malware",
        position: "end",
      },
    ],
  },
];

// Calculate the total number of lessons
export const freeLessonsTotalLessons = freeLessonAllLessonButtons.reduce(
  (total, level) => total + (level.lessons?.length || 0),
  0
);

export default freeLessonAllLessonButtons;
