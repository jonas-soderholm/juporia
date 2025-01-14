import { CourseInfo } from "@/app/constants/course-info";

export const allCourses = [
  {
    id: 1,
    title: "Internet and Computer Basics",
    description:
      "Learn how computers and the internet work—no prior knowledge needed! Build a foundation for understanding cybersecurity better.",
    buttonText: "Start",
    image: "/images/courses-backgrounds/basic1.jpg",
    value: 50,
    linkUrl: CourseInfo.InternetAndComputers.path,
  },
  {
    id: 2,
    title: "Cybersecurity Basics 1.0",
    description:
      "Learn the fundamentals of cybersecurity in this beginner-friendly course.",
    buttonText: "Start",
    image: "/images/courses-backgrounds/basic1.jpg",
    value: 50,
    linkUrl: CourseInfo.Cyber1.path,
  },
  {
    id: 3,
    title: "Cybersecurity Basics 2.0",
    description:
      "Expand on the basics with more advanced topics and interactive exercises.",
    buttonText: "Start",
    image: "/images/courses-backgrounds/basic1.jpg",
    value: 50,
    linkUrl: CourseInfo.Cyber2.path,
  },
  {
    id: 4,
    title: "Privacy Basics",
    description:
      "Understand privacy principles and how to protect your personal data.",
    buttonText: "Start",
    image: "/images/courses-backgrounds/basic1.jpg",
    value: 50,
    linkUrl: CourseInfo.Privacy.path,
  },
  {
    id: 5,
    title: "Cybersecurity Frameworks and Third-Party Risk Management",
    description:
      "Explore frameworks and strategies for managing third-party cybersecurity risks.",
    buttonText: "Start",
    image: "/images/courses-backgrounds/basic1.jpg",
    value: 50,
    linkUrl: CourseInfo.ThirdParty.path,
  },
];
