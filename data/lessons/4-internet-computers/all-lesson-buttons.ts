import { CourseInfo } from "@/constants/course-info";

const internetAllLessonButtons = [
  {
    courseNr: CourseInfo.InternetAndComputers.courseNr,
    title: "Level 1: Computer Fundamentals",
    lessons: [
      {
        name: "How Computers Work: From 0s and 1s to Functioning Machines",
        link: "/internet-computer-basics/how-computers-work",
        position: "start",
      },
      {
        name: "Hardware Essentials: Key Components & Their Roles",
        link: "/internet-computer-basics/hardware-essentials",
        position: "end",
      },
      {
        name: "Software Basics: Operating Systems & Applications",
        link: "/internet-computer-basics/software-basics",
        position: "start",
      },
      {
        name: "Data in Action: Processing, Storage, and Display",
        link: "/internet-computer-basics/data-processing",
        position: "end",
      },
    ],
  },
  {
    title: "Level 2: Internet Essentials",
    lessons: [
      {
        name: "The Internet Explained: How Data Travels at Light Speed",
        link: "/internet-computer-basics/internet-explained",
        position: "start",
      },
      {
        name: "Understanding IP Addresses, DNS, and Routing",
        link: "/internet-computer-basics/ip-dns-routing",
        position: "end",
      },
      {
        name: "Physical Layer: Light Pulses, Cables, and Wireless Signals",
        link: "/internet-computer-basics/physical-layer",
        position: "start",
      },
      {
        name: "Connecting Devices: How Communication Happens Online",
        link: "/internet-computer-basics/device-communication",
        position: "end",
      },
    ],
  },
];

// Calculate the total number of lessons
export const internetComputerTotalLessons = internetAllLessonButtons.reduce(
  (total, level) => total + (level.lessons?.length || 0),
  0
);

export default internetAllLessonButtons;
