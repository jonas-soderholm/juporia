import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Cyber2.courseNr,
  lessonsOverviewUrl: CourseInfo.Cyber2.path,
  sections: [
    {
      id: 1,
      sectionTitle: "Understanding Cyber Hygiene for SMBs",
      content: [
        "Cyberattacks can have devastating consequences for small businesses. Studies show that approximately 60% of SMBs close their doors within six months of a cyberattack due to financial losses and reputational damage.",
        "Despite the rising threat landscape, many SMBs remain unprepared. In 2023, 41% of small businesses reported experiencing a cyberattack, yet many still lack adequate security measures. Over half of small businesses have no cybersecurity protections in place at all, assuming they are not targets.",
        "Small businesses often lack dedicated IT teams, making cybersecurity a challenge. However, implementing basic security measures can significantly reduce risks without requiring deep technical expertise.",
        "Employee cybersecurity awareness training is one of the most effective ways to strengthen an organization's security posture. Studies show that companies engaging in regular security training experience a significant reduction in security incidents. By educating employees on how to identify and respond to threats, businesses can mitigate risks associated with human error, which remains a leading cause of data breaches.",
        "Cybersecurity 1.0 and Privacy Basics Courses at Juporia are designed for everyone on the team, from beginner to professional, to ensure that every team member gains essential knowledge to protect sensitive data and maintain compliance with security regulations.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "Creating Security Policies & Employee Onboarding",
      content: [
        "A clear cybersecurity policy helps set security expectations for employees and prevents security gaps.",
        "SMBs should create written guidelines covering password policies, data access restrictions, and reporting procedures for security incidents.",
        "New employee onboarding should include cybersecurity awareness training to ensure every team member follows best practices from day one.",
        "When employees leave, businesses should have a process to revoke access to systems and data immediately to prevent unauthorized access.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 3,
      sectionTitle: "Practical Security Measures Without an IT Team",
      content: [
        "Identifying and protecting valuable data. Businesses should take inventory of customer data, employee records, and financial information to determine what needs to be secured.",
        "Understanding data protection laws like GDPR is essential. SMBs should ensure they collect only necessary data and implement security practices that comply with regulations.",
        "SMBs can start by enabling automatic updates on all devices to patch vulnerabilities and prevent cyberattacks. Cybercriminals often exploit outdated software, so keeping systems up to date is one of the simplest and most effective security measures.",
        "Using strong passwords and multi-factor authentication (MFA) protects accounts from unauthorized access. Password managers can help generate and store secure passwords, ensuring employees use unique and complex passwords for different services.",
        "Restricting access to sensitive data ensures that only authorized personnel can handle critical business information. Role-based access controls can help achieve this, reducing the risk of accidental data leaks or insider threats.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "Defending Against Phishing & Social Engineering Attacks",
      content: [
        "Phishing is one of the most common cyber threats targeting SMBs. These attacks often trick employees into revealing passwords or financial information, making it critical for all team members to recognize the warning signs.",
        "Businesses should train employees to identify phishing emails by checking sender addresses, avoiding unexpected attachments, and verifying requests for sensitive information before responding.",
        "Beyond phishing, social engineering attacks include vishing (voice phishing), smishing (SMS phishing), and baiting (tricking employees into downloading malware). SMBs should educate employees about all forms of deception.",
        "Setting up email filtering and enabling domain-based authentication protocols like SPF, DKIM, and DMARC can significantly reduce phishing risks.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "Managing Shadow IT & Unauthorized Software",
      content: [
        "Shadow IT—when employees use unapproved software or devices—can introduce serious security risks.",
        "Businesses should create an approved list of applications and discourage employees from using personal devices for work unless secured by company policies.",
        "Providing employees with secure, company-approved tools can prevent them from seeking risky third-party solutions.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 6,
      sectionTitle: "Incident Response Playbook for SMBs",
      content: [
        "Every SMB should have a simple incident response plan to minimize damage from cyber incidents.",
        "A structured playbook should outline how to respond to common threats such as ransomware attacks, phishing attempts, and unauthorized access.",
        "Regular security drills ensure that employees know how to react in real-time to cybersecurity incidents.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 7,
      sectionTitle: "Managing Vendor & Supply Chain Security",
      content: [
        "Many SMBs rely on third-party vendors for services like cloud storage and payment processing, but vendors can introduce security risks.",
        "Before working with a vendor, SMBs should assess their cybersecurity policies and ensure they follow strong security practices.",
        "Businesses should minimize access permissions for vendors to reduce the risk of data leaks or supply chain attacks.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 8,
      sectionTitle: "Building a Security Culture in SMBs",
      content: [
        "Cybersecurity isn’t just a checklist—it’s a culture shift. Encouraging employees to report suspicious activity without fear of punishment helps catch threats early.",
        "SMB leaders should set the example by following security protocols themselves.",
        "Security should be an ongoing conversation. Businesses can implement weekly security tips or monthly awareness sessions to keep security at the forefront.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
