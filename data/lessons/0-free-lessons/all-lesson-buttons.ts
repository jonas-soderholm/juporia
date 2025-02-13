import { CourseInfo } from "@/constants/course-info";

const freeLessonAllLessonButtons = [
  {
    courseNr: CourseInfo.FreeCourse.courseNr,
    title: "Level 1",
    lessons: [
      {
        name: "Passwords: How Long Does It Take to Hack?",
        link: "/free1",
        position: "start",
      },
      {
        name: "Who Can See Your Online Activity?",
        link: "/free2",
        position: "end",
      },
      {
        name: "How Hackers Target You Without You Knowing",
        link: "/free3",
        position: "start",
      },
      {
        name: "2024 Annual Report on the Most Used Hacking Techniques",
        link: "/free4",
        position: "end",
      },
      {
        name: "The 3 Biggest Cybersecurity Mistakes",
        link: "/free5",
        position: "start",
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
