import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Cyber1.courseNr,
  lessonsOverviewUrl: CourseInfo.Cyber1.path,
  sections: [
    {
      id: 1,
      sectionTitle: "What Is Cybersecurity?",
      content: [
        "Cybersecurity is the practice of protecting systems, networks, and data from unauthorized access, theft, or damage. It covers everything from securing personal devices to defending entire organizations against cyber threats.",
        "As we rely more on digital systems, cybersecurity ensures that data stays private, transactions are secure, and systems function without disruption.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "Why Cybersecurity Is Important",
      content: [
        "Without cybersecurity, personal data can be stolen, private messages exposed, and financial accounts drained.",
        "Businesses and governments rely on cybersecurity to protect critical infrastructure like hospitals, banks, and power grids. A single vulnerability can cause widespread disruptions, massive financial losses, and even force companies out of business. Many businesses never recover after a major cyber attack due to lawsuits, fines, and loss of customer trust. Strong security measures help prevent these risks and keep systems running safely.",
        "",
      ],
      question: "What can be stolen if cybersecurity fails?",
      answerKeywords: [
        "data",
        "personal data",
        "password",
        "messages",
        "financial",
        "accounts",
        "money",
      ],
    },
    {
      id: 3,
      sectionTitle: "Big Cyber Attacks: Real-World Examples",
      content: [
        "Cyber attacks don’t just happen to large organizations; even individuals and small businesses are at risk. Here are some notable cyber attacks:",
        "1. Colonial Pipeline Hack (2021): A ransomware attack that shut down the largest fuel pipeline in the U.S., leading to fuel shortages and $4.4 million in ransom paid to hackers.",
        "2. Düsseldorf Hospital Ransomware Attack (2020): A ransomware attack on a German hospital led to the death of a patient who was diverted to another facility due to system outages, marking the first known death linked to a cyberattack.",
        "3. Gmail and Outlook Phishing Attack (2024): Cybercriminals stole login details from unsuspecting users, giving them access to personal accounts and potentially leading to financial loss.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "The Consequences of Cyber Attacks",
      content: [
        "Cyber attacks can cause financial loss, data theft, reputational damage, and even death, as seen in the Düsseldorf Hospital incident. For individuals, identity theft can ruin credit scores or expose private information. For businesses, data breaches lead to lawsuits, loss of customer trust, and high recovery costs.",
        "What are the consequences for a hacker? Hacking without permission can lead to criminal charges, fines, and imprisonment. The severity often depends on the scale—larger attacks, especially on governments or big corporations, lead to harsher penalties.",
        "But how do organizations protect themselves if they can't hack to find vulnerabilities? This is where ethical hacking comes in. Ethical hackers test systems with permission to find weaknesses. In future lessons, we'll explore ethical hacking in safe environments, looking into platforms and resources that allow you to use the same techniques real hackers use to understand how attacks happen and how organizations defend against them.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "The Future of Cybersecurity",
      content: [
        "As technology evolves, so do the threats to our digital lives. Artificial intelligence and machine learning are increasingly used in cybersecurity to detect and respond to threats in real-time, and also in some hacking methods.",
        "In future lessons, we’ll explore how you can protect yourself from these threats and stay safe online by using best practices for both personal and business security. Ethical hacking, when done with permission, will be one of the key areas we discuss to understand how real-world attacks happen and how defenses evolve.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
