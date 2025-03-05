import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Cyber2.courseNr,
  lessonsOverviewUrl: CourseInfo.Cyber2.path,
  sections: [
    {
      id: 1,
      sectionTitle: "Understanding Incident Response & Risk Management",
      content: [
        "Incident response and risk management are two essential components of cybersecurity. Incident response focuses on detecting, containing, and mitigating security incidents in real-time, while risk management identifies and reduces threats before they cause harm.",
        "Large enterprises often have dedicated security teams and follow structured frameworks such as NIST 800-61 and ISO 27001. However, for SMBs, reaching this level of security can be difficult due to limited resources and expertise, which can make cybersecurity feel out of reach and lead to having no security measures in place at all. In these courses, we try to bridge that gap by focusing on essential security measures from these frameworks, ensuring SMBs can build a strong foundation and take meaningful steps toward real protection, even with limited resources.",
      ],

      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "Incident Response: Handling Active Threats",
      content: [
        "Incident response is the structured process organizations follow to detect and respond to cyberattacks, minimizing damage and ensuring system recovery.",
        "Enterprises typically have security operation centers (SOCs) with automated tools to detect and contain threats. SMBs, on the other hand, may lack such resources, making a simple, clear response plan crucial.",
        "What SMBs can do: Designate an employee as the security lead, create a simple incident response checklist, and set up automatic alerts for suspicious activity using built-in security tools like Google Workspace security alerts.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 3,
      sectionTitle: "5-Step Incident Response Plan for SMBs",
      content: [
        "A structured, repeatable approach ensures SMBs can handle security incidents effectively. Without a clear plan, businesses may respond too slowly, leading to more damage and data loss.",
        "1. Identify & Detect – Recognize the incident through alerts, user reports, or unusual activity. Signs of an attack include slow system performance, unauthorized logins, or missing files. Example: An employee reports that their email was accessed from another country overnight. This is a sign of a compromised account.",
        "2. Contain – Isolate affected systems to prevent the attack from spreading further. If malware is detected, disconnect the infected device from the internet and internal networks immediately. Example: A retail store’s computer is hit with ransomware. Disconnecting it from Wi-Fi prevents the malware from encrypting files on other devices.",
        "3. Eradicate – Remove the threat by cleaning up malware, resetting credentials, and closing vulnerabilities. Businesses should scan all systems for hidden malware, force logout all active sessions, and ensure attackers don’t have access. Example: A law firm finds spyware on a computer. They reset all passwords, run a full security scan, and remove any suspicious accounts the hacker created. SMBs can use tools like Malwarebytes (for scanning malware) and Have I Been Pwned (to check if emails have been compromised).",
        "4. Recover – Restore systems from backups and verify they are fully functional. If backups exist, use them to restore affected data. Avoid reusing infected backups. Example: A financial services company restores its customer database from an offline backup after an attack corrupts the original files. SMBs should store backups using Google Drive, OneDrive, or an external hard drive to avoid data loss.",
        "5. Learn & Improve – Conduct a post-incident review and update security policies to prevent recurrence. Businesses should analyze what went wrong, improve employee training, and strengthen security settings. Example: After falling victim to a phishing scam, a company implements mandatory two-step verification to prevent future account takeovers. SMBs can use Google Workspace alerts to monitor login attempts and set up training for employees using platforms like KnowBe4.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "Risk Management: Preventing Cybersecurity Incidents",
      content: [
        "Risk management identifies, assesses, and mitigates threats before they escalate into security incidents. Without risk management, a single phishing email or weak password could lead to a major data breach.",
        "Enterprises often rely on in-depth risk assessments and external audits. SMBs may not have the capacity for this level of analysis but can still take essential steps to manage risks effectively.",
        "Example: A small business didn’t remove an ex-employee’s access to cloud storage. Months later, the former employee downloaded confidential client files and leaked them to a competitor. Revoking access immediately after termination could have prevented this.",
        "What SMBs can do: Regularly update software, enforce two-factor authentication (2FA), conduct simple risk assessments by listing potential threats, and revoke access for former employees.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "Real-World Example: The NotPetya Attack",
      content: [
        "The NotPetya ransomware attack in 2017 caused billions in damages. Companies like Maersk experienced massive disruptions when the malware spread through a compromised software update, leading to global outages.",
        "Large organizations like Maersk had to rebuild thousands of servers and devices from scratch. SMBs, with fewer resources, could be completely shut down by such an attack.",
        "What SMBs can do: Ensure regular backups are stored separately from the main network and test recovery procedures to minimize downtime in case of an attack. Even using cloud storage solutions with versioning can help restore lost data quickly.",
      ],
      question: "What can SMBs do to recover quickly from ransomware attacks?",
      answerKeywords: ["backups", "recovery", "cloud"],
    },
    {
      id: 6,
      sectionTitle: "Implementing Risk-Based Security Frameworks",
      content: [
        "ISO 27001 is a globally recognized standard for information security management, helping organizations establish structured risk management policies and security controls.",
        "Enterprises often have dedicated compliance teams ensuring adherence to frameworks like NIST RMF and PCI-DSS. SMBs may not have the resources for full compliance but can still follow essential best practices.",
        "What SMBs can do: Start small by implementing essential security policies, such as employee cybersecurity training, restricting access to sensitive data, and using compliance checklists.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 7,
      sectionTitle: "Building Cyber Resilience: Lessons Learned",
      content: [
        "A strong cybersecurity strategy goes beyond responding to individual incidents. Learning from past breaches and continuously improving security policies ensures long-term protection.",
        "Enterprises conduct frequent post-incident reviews and simulations. SMBs can implement a scaled-down approach to improve resilience over time.",
        "What SMBs can do: Conduct regular training simulations, document lessons learned after security incidents, and continuously improve security measures to adapt to emerging threats.",
        "",
      ],
      question: "What practice can help SMBs improve their security over time?",
      answerKeywords: [
        "training",
        "document",
        "simulations",
        "lesson",
        "security",
        "improving",
        "improve",
        "adapt",
        "learn",
      ],
    },
  ],
};

export default LessonData;
