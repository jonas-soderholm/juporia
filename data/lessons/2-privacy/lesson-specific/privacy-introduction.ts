import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Privacy.courseNr,
  lessonsOverviewUrl: CourseInfo.Privacy.path,
  sections: [
    {
      id: 1,
      sectionTitle: "Why Privacy Matters",
      content: [
        "Privacy is a fundamental human right that allows individuals to control their personal information and protect themselves from unwanted surveillance. Without privacy, your personal data can be used against you by hackers, corporations, or even governments.",
        "In today’s digital world, maintaining privacy is increasingly difficult as more of our personal information is shared and stored online. Understanding the importance of privacy is the first step in protecting yourself.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "Who Can Access Your Data?",
      content: [
        "Do you know who can read the messages you send? Many messaging services store and scan messages, while some even share data with third parties.",
        "Beyond messages, websites, apps, and online services collect vast amounts of personal data. Companies track your behavior to target you with ads, while some platforms sell your data to third parties. Governments may also request access to this data under certain laws.",
        "Understanding who can access your data and why it’s being collected is crucial to making informed decisions about what you share online.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 3,
      sectionTitle: "Privacy in the Digital Age",
      content: [
        "In the digital age, most of us leave digital footprints everywhere—on social media, through emails, and by using online services. These digital traces reveal a lot about who we are, our habits, and even our relationships.",
        "It's important to know how your data is collected, stored, and shared to avoid unnecessary exposure. Learning how to protect your privacy starts with understanding how your data moves across the web and taking steps to protect it from both companies and hackers.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "Privacy Laws and Your Rights",
      content: [
        "Privacy laws like the GDPR (General Data Protection Regulation) in Europe and CCPA (California Consumer Privacy Act) in the U.S. protect individuals' personal data and give them more control over how their information is used.",
        "Knowing these laws can help you understand your rights and how to enforce them when your privacy is at risk. We will go more in depth later in this course on how these laws apply and what steps you can take to protect your data.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "The Future of Privacy",
      content: [
        "As technology advances, new challenges to privacy are emerging, including the rise of AI, facial recognition, and more sophisticated tracking methods.",
        "The future of privacy will depend on individuals' awareness, government regulation, and the development of technologies that prioritize data protection and user control.",
        "",
      ],
      question: "What technology is a growing challenge to privacy?",
      answerKeywords: [
        "ai",
        "artificial intelligence",
        "facial recognition",
        "tracking",
      ],
    },
  ],
};

export default LessonData;
