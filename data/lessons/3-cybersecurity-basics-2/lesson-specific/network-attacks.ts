import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Cyber2.courseNr,
  lessonsOverviewUrl: CourseInfo.Cyber2.path,
  sections: [
    {
      id: 1,
      sectionTitle: "Understanding Network Attacks",
      content: [
        "Network attacks target the way data is transmitted between computers, websites, and online services. Hackers use these attacks to steal sensitive information, spy on users, or manipulate online activities without the victim knowing. Unlike hacking that breaks into systems, network attacks happen while data is moving, making them harder to detect and prevent.",
        "Small and medium-sized businesses (SMBs) are vulnerable because they often use weak Wi-Fi security, outdated routers, and unencrypted communication methods. This makes it easy for attackers to intercept and manipulate their traffic. An example of a network attack is when a hacker sets up a fake public Wi-Fi hotspot named 'Free_Coffee_WiFi' in a café, tricking customers into connecting. Once connected, all their emails, passwords, and browsing activity pass through the hacker’s system, giving them full visibility into private data.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "Man-in-the-Middle (MITM) Attacks",
      content: [
        "A Man-in-the-Middle attack happens when a hacker secretly intercepts and alters communication between two parties without their knowledge. This allows the attacker to eavesdrop on sensitive data, steal login credentials, or even modify transactions in real time. MITM attacks often happen through compromised Wi-Fi networks, unsecured websites, or by injecting malicious software into a router.",
        "For example, a hacker sitting in a hotel lobby can intercept logins and emails sent by guests using the hotel’s free Wi-Fi. Guests believe they are securely connected, but in reality, all their private data is being captured before it reaches its destination. Attackers may also redirect users to fake versions of websites where they unknowingly enter their real passwords.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 3,
      sectionTitle: "Wi-Fi Hacking and Rogue Hotspots",
      content: [
        "Public and poorly secured Wi-Fi networks are easy targets for hackers looking to intercept data or inject malware. Attackers often create fake Wi-Fi networks that appear to be legitimate, tricking users into connecting and unknowingly exposing their sensitive information. This is known as an Evil Twin attack, where a hacker sets up a Wi-Fi network with the same name as a trusted one, such as 'Airport_Free_WiFi'. Unsuspecting users connect, assuming it is safe, but all their traffic is routed through the attacker’s system.",
        "Another method is Wi-Fi cracking, where hackers exploit weak encryption settings or use brute-force tools to break into networks with weak passwords. Once inside, they can monitor all traffic, steal data, or even install malware on devices. Businesses using default or simple passwords for their Wi-Fi networks risk having their entire office traffic monitored without realizing it.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "Traffic Manipulation and Data Interception",
      content: [
        "Hackers can manipulate internet traffic to redirect users to fake websites, modify data in transit, or inject malicious scripts into websites that people visit. This is especially dangerous if businesses rely on unencrypted communication or do not verify the authenticity of the sites they connect to.",
        "For example, an attacker on an unsecured Wi-Fi network can intercept a login request to an online banking service, modify it in real time, and redirect the user to a fake banking site that looks identical to the real one. The user enters their credentials, not realizing that they are handing them directly to the attacker.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "How Businesses Can Protect Themselves",
      content: [
        "Businesses can reduce the risk of network attacks by using strong encryption, secure Wi-Fi configurations, and network monitoring tools. Encrypting sensitive data ensures that even if a hacker intercepts it, they cannot read it. Using virtual private networks (VPNs) helps protect data sent over public Wi-Fi by creating a secure tunnel that prevents attackers from spying on traffic.",
        "Avoid using default router settings, change Wi-Fi passwords regularly, and ensure that all employees are aware of the risks of connecting to unknown networks. A simple step like using a separate guest Wi-Fi network for customers instead of the main office network can prevent outsiders from gaining access to company systems. SMBs should also enable multi-factor authentication (MFA) on all critical accounts, ensuring that stolen passwords alone are not enough for hackers to break in.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
