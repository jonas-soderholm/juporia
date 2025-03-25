import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Cyber2.courseNr,
  lessonsOverviewUrl: CourseInfo.Cyber2.path,
  sections: [
    {
      id: 1,
      sectionTitle: "What is the CIA Triad?",
      content: [
        "The CIA Triad is a basic cybersecurity model that protects business data. It stands for Confidentiality (keeping data private), Integrity (keeping data correct), and Availability (keeping data accessible).",
        "If one part of the CIA Triad fails, businesses can suffer data breaches, financial losses, or operational failures. Hackers could steal customer information, alter financial records, or shut down systems, making it impossible to work.",
        "Example: An online store encrypts payment details (Confidentiality), prevents orders from being changed by hackers (Integrity), and has backup servers to stay online (Availability).",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "Confidentiality: Keeping Data Private",
      content: [
        "Confidentiality ensures that only authorized users can access sensitive data. If a hacker or unauthorized person gains access, businesses risk issues like identity theft, fraud, or the exposure of private information like trade secrets.",
        "To protect confidentiality, businesses use methods like encrypting data, requiring multi-factor authentication (MFA) for logins, and limiting access to information based on job roles. Common threats to confidentiality include weak passwords and phishing attacks.",
        "Examples of confidentiality in action: A bank encrypts customer transactions, so hackers can’t intercept and read them. A payroll system restricts access to HR only, preventing employees from seeing others' salaries. A company trains employees to recognize phishing emails, so they don’t accidentally give away sensitive information.",
      ],
      question: "What is one way to protect data confidentiality?",
      answerKeywords: [
        "encrypt",
        "mfa",
        "multi",
        "access",
        "control",
        "phishing",
        "training",
        "restrict",
        "teach",
        "limit",
        "train",
      ],
    },
    {
      id: 3,
      sectionTitle: "Integrity: Keeping Data Accurate",
      content: [
        "Integrity ensures that data stays correct and unaltered. If data is modified without permission, businesses could suffer from fraud, financial mistakes, or corrupted records.",
        "Businesses protect integrity by using hashing (which verifies data hasn’t changed), keeping backup copies of important files, and restricting editing permissions to authorized users.",
        "Example: An e-commerce site hashes orders so they can’t be changed after checkout. A law firm keeps daily backups of contracts to restore lost files. A financial company tracks all edits to prevent fraud.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "Availability: Keeping Systems Running",
      content: [
        "Availability ensures that employees and customers can access systems when needed. If systems go offline, businesses could lose sales, productivity, and customer trust.",
        "Businesses improve availability by having backups, redundant servers, and DDoS protection to prevent cyberattacks. Hardware failures, cyberattacks, and natural disasters are common threats.",
        "Example: A cloud storage provider uses backup servers so users can always access files. An online store protects itself from cyberattacks that could crash its website. A hospital has generators to keep systems running during power outages.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "Balancing the CIA Triad",
      content: [
        "A business must balance confidentiality, integrity, and availability. Focusing too much on one can create security weaknesses. If security is too strict, employees may struggle to access important data, slowing down work.",
        "Too much focus on availability without security can expose data to cybercriminals. If integrity is prioritized but data isn’t backed up, a cyberattack could cause permanent data loss.",
        "Example: A company that only focuses on availability might leave customer data open to cyberattacks. A balanced approach ensures data is secure, correct, and accessible when needed.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 6,
      sectionTitle: "Testing and Improving Security",
      content: [
        "To keep systems secure, businesses must test and improve their security regularly. Security weaknesses can be exploited if they go unnoticed.",
        "Businesses should conduct security audits to check for vulnerabilities, run penetration tests to simulate cyberattacks, and train employees on security risks like phishing and weak passwords.",
        "Example: A company reviews access logs to find unauthorized login attempts. An ethical hacker tests a business's security to find weak points. A retail store trains employees to secure customer data and avoid phishing scams.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
