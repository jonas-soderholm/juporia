import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.FreeCourse.courseNr,
  lessonsOverviewUrl: CourseInfo.FreeCourse.path,
  sections: [
    {
      id: 1,
      sectionTitle: "Your Messages Are Stored on Company Servers",
      content: [
        "When you send messages on platforms like Facebook Messenger, Instagram, or Telegram (without secret chats), your messages are stored on the company’s servers. This means the company has access to them and can retrieve them later if needed, whether for advertising, AI analysis, or legal requests.",
        "Even if you delete a message, the company may still keep backups for an extended period. Some platforms also log metadata—information about who you messaged, when, and for how long—even if they don't store the actual message itself.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "Facebook and Other Platforms Scan Messages",
      content: [
        "Facebook automatically scans messages sent through Messenger using AI-powered systems. These scans look for potential security threats, illegal activity, and violations of platform policies, such as malware, scams, and suspicious links. While this helps enforce safety rules, it also means that your messages are actively analyzed by the platform.",
        "If Facebook’s system flags a message, human moderators may review it. In some cases, flagged messages have been reported to law enforcement, leading to investigations or arrests.",
        "Since Messenger and Instagram direct messages do not use end-to-end encryption by default, Facebook has full access to message contents. If privacy is a concern, enabling encrypted chats or switching to a different app is recommended.",
        "",
      ],
      question: "Why do companies like Facebook scan messages?",
      answerKeywords: [
        "threat",
        "illegal",
        "violation",
        "security",
        "malware",
        "scam",
        "suspicious",
        "safe",
      ],
    },
    {
      id: 3,
      sectionTitle: "Law Enforcement Can Access Stored Messages",
      content: [
        "Authorities can request stored message data from companies like Facebook, Google, and Apple. These companies comply with legal requests if the message data is available, often providing law enforcement with chat history, metadata, and even associated IP addresses.",
        "Even if a platform claims to respect user privacy, it may still be required by law to provide data when requested by authorities. In some cases, entire chat logs have been handed over during investigations.",
        "If law enforcement needs to identify a person, they can use their ISP (Internet Service Provider) to track IP addresses, leading to a real-world location.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "End-to-End Encryption Blocks Message Scanning",
      content: [
        "End-to-end encryption (E2EE) ensures that only the sender and receiver can read the messages—nobody else, not even the company providing the service. Apps like Wickr and Signal rely on this encryption to keep conversations private.",
        "The key reason encrypted messaging is safer is that messages are stored only on your device, not on a company's cloud servers. This means even if a company is hacked or forced to hand over data, there is nothing useful to access.",
        "Unlike Messenger and Instagram, which store chat logs on company databases, encrypted apps do not retain copies of your messages, reducing the risk of leaks or unauthorized access.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "Metadata Still Reveals Information",
      content: [
        "Even if messages are encrypted, most platforms still collect metadata—data about who you talk to, when, and how often. This metadata helps governments, advertisers, and AI systems analyze user behavior without directly reading messages.",
        "For example, if someone frequently chats with a journalist or lawyer, even without knowing the content of the messages, authorities or advertisers can infer valuable patterns. In some cases, metadata alone is enough to track and profile users.",
        "Signal and other privacy-focused apps attempt to minimize metadata collection. However, mainstream services like Telegram and iMessage still log this data, making it less private overall.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 6,
      sectionTitle: "Unencrypted Messages Can Be Intercepted",
      content: [
        "Standard SMS and unencrypted messages sent through email or some messaging apps can be intercepted by attackers, ISPs, or governments. This means that anyone with the right tools can read messages as they travel across networks.",
        "Without encryption, messages sent over the internet or mobile networks are vulnerable to surveillance and data collection. Many intelligence agencies and even hackers exploit these weaknesses to monitor or steal personal information.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 7,
      sectionTitle: "Businesses and Professionals Use Secure Messaging",
      content: [
        "Companies handling sensitive data—such as journalists, lawyers, healthcare providers, and financial institutions—use secure communication methods to protect their information from leaks and cyber threats.",
        "Many rely on end-to-end encrypted messaging apps like Signal or ProtonMail, ensuring that only the sender and recipient can read the messages. Some businesses also use encrypted email services or private communication platforms designed for secure collaboration.",
        "Larger organizations and government agencies often use enterprise-level security solutions, such as dedicated VPNs, encrypted corporate messaging apps like Microsoft Teams or Wickr, and self-hosted email servers. These tools help prevent unauthorized access, data breaches, and surveillance.",
      ],
      question: "",
      answerKeywords: [""],
    },

    {
      id: 8,
      sectionTitle: "How to Keep Your Messages Truly Private",
      content: [
        "Use end-to-end encrypted apps like Signal or Telegram secret chats for personal and business communication. These apps store data locally rather than in company databases, reducing the risk of leaks.",
        "Avoid sending sensitive information through unencrypted channels like SMS, email, or Facebook Messenger (unless secret conversations are enabled). Always assume that unencrypted messages could be intercepted or stored permanently.",
        "Never send passwords in a message. Instead, use a password manager like Bitwarden or 1Password to share them securely via an encrypted link. If that’s not an option, split the password and send half through one secure method (like Signal) and the other half through another (like an encrypted email).",
        "Be aware that even encrypted services collect metadata, so if full anonymity is required, consider using privacy-focused solutions combined with tools like VPNs to mask your IP address. We will go through this and other privacy practices in more detail in future lessons.",
        "",
      ],
      question:
        "Which communication channels should you avoid for sending sensitive information like passwords?",
      answerKeywords: ["facebook", "messenger", "sms", "email"],
    },
  ],
};

export default LessonData;
