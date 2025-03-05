import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Cyber2.courseNr,
  lessonsOverviewUrl: CourseInfo.Cyber2.path,
  sections: [
    {
      id: 1,
      sectionTitle: "What is the Zero Trust Security Model?",
      content: [
        "Zero Trust is a cybersecurity model that assumes no one should be trusted automatically, even inside a company’s network. Every user and device must verify their identity before accessing data or systems.",
        "Unlike traditional security models that assume employees inside the company network are safe, Zero Trust requires continuous verification to prevent unauthorized access and limit potential damage if an attacker gets in.",
        "Example: A company with Zero Trust does not allow employees to access all files just because they work there. Instead, they must verify their identity and only get access to what they need for their job.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "Why Small Businesses Need Zero Trust",
      content: [
        "Small businesses are common targets for cyberattacks because they often have weak security. A single stolen password or hacked device can give attackers full access to company data.",
        "Zero Trust reduces this risk by requiring strict verification for every login and system request. Even if a hacker steals an employee’s password, they cannot access everything without additional security checks.",
        "Example: A small accounting firm uses Zero Trust by requiring employees to verify logins with a phone app. If a hacker tries to log in, they are blocked because they don’t have the verification code.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 3,
      sectionTitle: "How Zero Trust Works",
      content: [
        "Zero Trust follows the principle of 'never trust, always verify.' Every access request must be verified based on multiple factors like identity, device security, and location.",
        "Businesses use Zero Trust by requiring multi-factor authentication (MFA), monitoring user activity, and limiting access to only necessary data. This makes it harder for hackers to move freely inside a network if they break in.",
        "Example: A retail business using Zero Trust only allows employees to access sales data if they are logging in from a company device, using a secure network, and verifying their identity with MFA.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "Key Features of Zero Trust Security",
      content: [
        "Zero Trust does not rely on firewalls or perimeter security alone. Instead, it focuses on strong identity verification, strict access controls, and continuous monitoring.",
        "1. Identity Verification – Every login requires proof that the user is who they claim to be, such as passwords, MFA, or biometric scans.",
        "2. Least Privilege Access – Employees only get access to the files and systems they need, reducing the impact of insider threats or stolen credentials.",
        "3. Device Security – Only secure, company-approved devices can access sensitive data to prevent unauthorized access from personal or compromised devices.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "Offboarding Employees: Why Removing Access is Critical",
      content: [
        "When an employee leaves or is fired, they should no longer have access to company systems. Failing to remove access can lead to data theft, sabotage, or unauthorized logins.",
        "Zero Trust requires immediate removal of user accounts, deactivating company devices, and blocking access to emails, cloud storage, and internal tools.",
        "Example: A business removes an ex-employee’s accounts as soon as they leave. If they try logging in later, they are blocked, preventing potential security threats.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 6,
      sectionTitle: "Benefits of Zero Trust for SMBs",
      content: [
        "Zero Trust helps small businesses protect sensitive information, prevent data breaches, and secure remote work environments.",
        "By limiting access to only what is needed and requiring continuous verification, Zero Trust reduces the chances of hackers stealing business data or using compromised accounts to move freely through systems.",
        "Example: A marketing agency uses Zero Trust by allowing employees to work remotely but restricting access to customer data unless they log in from a secure device and verify their identity.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 7,
      sectionTitle: "How to Implement Zero Trust",
      content: [
        "Small businesses can start with Zero Trust by setting up multi-factor authentication, restricting access based on user roles, and monitoring system activity for unusual behavior.",
        "Businesses should also review which employees and devices have access to sensitive data, ensuring that only authorized users with a legitimate need can access critical systems.",
        "Example: A law firm implementing Zero Trust removes default admin privileges for employees, sets up alerts for suspicious logins, and requires MFA for remote access.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
