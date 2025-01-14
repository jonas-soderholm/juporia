import { CoursePathAndNr } from "@/app/constants/course-names";

export const allCourses = [
  {
    id: 1,
    title: "Internet and Computer Basics",
    description:
      "Learn how computers and the internet work—no prior knowledge needed! Build a foundation for understanding cybersecurity better.",
    buttonText: "Start Learning for Free",
    image: "/images/courses-backgrounds/basic1.jpg",
    value: 50,
    linkUrl: CoursePathAndNr.InternetAndComputers.path,
  },
  {
    id: 2,
    title: "Cybersecurity Basics 1.0",
    description:
      "Learn the fundamentals of cybersecurity in this beginner-friendly course.",
    buttonText: "5 free lessons",
    image: "/images/courses-backgrounds/basic1.jpg",
    value: 50,
    linkUrl: CoursePathAndNr.Cyber1.path,
  },
  {
    id: 3,
    title: "Cybersecurity Basics 2.0",
    description:
      "Expand on the basics with more advanced topics and interactive exercises.",
    buttonText: "Subscription needed",
    image: "/images/courses-backgrounds/basic1.jpg",
    value: 50,
    linkUrl: CoursePathAndNr.Cyber2.path,
  },
  {
    id: 4,
    title: "Privacy Basics",
    description:
      "Understand privacy principles and how to protect your personal data.",
    buttonText: "Subscription needed",
    image: "/images/courses-backgrounds/basic1.jpg",
    value: 50,
    linkUrl: CoursePathAndNr.Privacy.path,
  },
  {
    id: 5,
    title: "Cybersecurity Frameworks and Third-Party Risk Management",
    description:
      "Explore frameworks and strategies for managing third-party cybersecurity risks.",
    buttonText: "Subscription needed",
    image: "/images/courses-backgrounds/basic1.jpg",
    value: 50,
    linkUrl: CoursePathAndNr.ThirdParty.path,
  },
];
