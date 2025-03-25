import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Cyber2.courseNr,
  lessonsOverviewUrl: CourseInfo.Cyber2.path,
  sections: [
    {
      id: 1,
      sectionTitle:
        "Business Continuity, Disaster Recovery (BC/DR) & GDPR Compliance",
      content: [
        "Business continuity and disaster recovery (BC/DR) ensure that organizations can maintain operations and recover quickly after cyber incidents, natural disasters, or system failures.",
        "Small and medium-sized businesses (SMBs) often underestimate the impact of downtime. Studies show that 40% of small businesses never reopen after a major data loss or disaster.",
        "GDPR compliance is a legal requirement for businesses handling EU citizen data, ensuring privacy and data protection by design.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "Creating a Business Continuity Plan (BCP)",
      content: [
        "A Business Continuity Plan (BCP) outlines how an organization will continue operations during and after a disaster.",
        "Key steps in creating a BCP:",
        "1. Identify critical business functions and prioritize them.",
        "2. Assess risks and vulnerabilities that could impact operations.",
        "3. Develop response strategies, including alternate work locations and cloud-based services.",
        "4. Establish clear communication plans for employees and stakeholders.",
        "5. Regularly test and update the plan to ensure effectiveness.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 3,
      sectionTitle: "Disaster Recovery: Ensuring Data Resilience",
      content: [
        "Disaster recovery focuses on restoring IT systems and data after an incident, minimizing downtime and data loss.",
        "Important disaster recovery measures for SMBs:",
        "1. Implementing a robust data backup strategy, including offsite and cloud backups, to ensure critical data is always recoverable even if local systems fail.",
        "2. Testing recovery procedures regularly to ensure quick restoration, preventing surprises during an actual incident.",
        "3. Using failover systems, such as backup internet connections or secondary servers, to maintain uptime during system failures.",
        "4. Ensuring redundancy in IT infrastructure by having duplicate systems, such as mirrored databases, backup servers, and multiple internet providers, to prevent a single failure from disrupting operations.",
      ],

      question: "Name one key disaster recovery measure SMBs should implement?",
      answerKeywords: [
        "recovery",
        "backup",
        "failover",
        "redundancy",
        "duplicate",
      ],
    },
    {
      id: 4,
      sectionTitle: "Global Data Protection & GDPR Compliance",
      content: [
        "Data protection laws worldwide require businesses to safeguard personal information and ensure transparency. The General Data Protection Regulation (GDPR) applies to any company handling EU citizen data, even if based outside the EU. Similar laws exist globally, like the California Consumer Privacy Act (CCPA) in the U.S.",
        "Key data protection requirements:",
        "1. Use encryption and access controls to protect data from unauthorized access. Multi-factor authentication (MFA) and role-based access help minimize risks.",
        "2. Obtain clear user consent before collecting personal data. Users must know how their data is used and have the option to withdraw consent easily.",
        "3. Give users control over their data, allowing them to access, modify, or delete it. Businesses must respond to these requests within one month.",
        "4. Report data breaches within 72 hours to regulators and notify affected users if the breach poses a high risk. This includes email alerts, in-app notifications, SMS, or postal letters with clear instructions on protective actions.",
        "5. Regularly assess security practices and ensure third-party vendors follow data protection laws. Routine penetration testing and audits help reduce risks.",
        "6. Failing to report a breach or mishandling user data can lead to significant fines. Under GDPR, businesses can be fined up to 4% of global revenue. Meta (Facebook) was fined €1.2 billion in 2023 for improper data transfers, and Amazon received a €746 million fine for privacy violations. Even small businesses have been fined thousands for non-compliance, including failing to notify users of breaches.",
        "7. Compliance helps businesses avoid fines, maintain customer trust, and protect against data breaches. Even small businesses must follow these laws to stay legally compliant and secure.",
      ],

      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "Testing and Improving BC/DR & Compliance Plans",
      content: [
        "Regular testing and updates are crucial for ensuring business continuity, disaster recovery, and GDPR compliance remain effective. Without ongoing improvements, businesses risk being unprepared for cyberattacks, system failures, or regulatory audits.",
        "Best practices include:",
        "1. Conducting tabletop exercises to simulate disaster scenarios. Businesses should run 'what-if' exercises where key personnel discuss how they would respond to incidents such as ransomware attacks, power outages, or server crashes. Example: A retail company tests its response to a cyberattack that locks its payment systems, ensuring employees know how to restore operations quickly.",
        "2. Performing penetration testing to identify security gaps. Ethical hackers simulate attacks to find weaknesses in IT systems before real hackers do. Example: A healthcare clinic hires a security expert to test its patient record system for vulnerabilities, helping them patch flaws before cybercriminals exploit them.",
        "3. Training employees on emergency procedures and compliance requirements.",
        "4. Reviewing and updating plans annually based on evolving threats and regulatory changes. Cyber threats and compliance laws change constantly, so businesses must adjust their security strategies and response plans. Example: A financial services firm updates its data protection policies every year to align with GDPR changes and new cybersecurity threats.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
