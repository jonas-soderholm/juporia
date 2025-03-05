import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Privacy.courseNr,
  lessonsOverviewUrl: CourseInfo.Privacy.path,
  sections: [
    {
      id: 1,
      sectionTitle: "What Is a Data Breach?",
      content: [
        "A data breach happens when hackers or unauthorized individuals gain access to private information stored by companies, websites, or services.",
        "This leaked data can include usernames, passwords, email addresses, credit card details, and even personal identity information like Social Security numbers or passports.",
        "Many companies store more data than they need, and if their systems get hacked, user data can end up on the dark web or sold to criminals.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "Checking If Your Data Has Been Leaked",
      content: [
        "If a website you use has been hacked, your personal information may have been leaked without you even knowing.",
        "You can check for leaks by using tools like 'Have I Been Pwned' (haveibeenpwned.com), which scans for your email in known data breaches.",
        "If your email appears in a data breach, you should immediately change your password for that service and any other account using the same password.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 3,
      sectionTitle: "The Dangers of Reusing Passwords",
      content: [
        "If you use the same password on multiple websites and one of them gets hacked, attackers can try that password on other accounts.",
        "This is called credential stuffing, where hackers test leaked usernames and passwords on other services to break into accounts.",
        "Using a unique password for every account stops this type of attack from working.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "Identity Theft & How to Avoid It",
      content: [
        "Identity theft happens when criminals use stolen personal information to open bank accounts, take loans, or commit fraud in your name.",
        "To reduce risk, avoid giving away sensitive information like your full name, address, or phone number on public websites.",
        "Be cautious of emails or phone calls requesting personal details, even if they seem legitimate. Always verify before sharing any information.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "What to Do If Your Data Is Leaked",
      content: [
        "If your personal information has been leaked in a data breach, take immediate action by changing passwords and enabling two-factor authentication.",
        "If financial details were leaked, contact your bank to monitor for fraud, request a new card, or place a credit freeze to prevent criminals from using your credit card.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
