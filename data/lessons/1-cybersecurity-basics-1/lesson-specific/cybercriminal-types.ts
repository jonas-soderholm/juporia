import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Cyber1.courseNr,
  lessonsOverviewUrl: CourseInfo.Cyber1.path,
  sections: [
    {
      id: 1,
      sectionTitle: "Types of Cybercriminals",
      content: [
        "Cybercriminals operate with different motivations and approaches, making it essential to understand their roles.",
        "1. Explorer: Individuals who probe systems out of curiosity or research. Some explore ethically, while others cross legal boundaries.",
        "2. Hacktivist: Cyber actors who use hacking to support political or social causes. They target governments or corporations they see as unethical, using tactics like data leaks and website defacements.",
        "3. Cyberterrorist: Attackers aiming to create fear and disruption by targeting critical infrastructure, financial systems, or government institutions.",
        "4. Cybercriminal: Individuals or groups committing fraud, identity theft, or financial exploitation. They use ransomware, phishing, and stolen data to make money, often as part of organized crime networks.",
        "5. Cyberwarrior: State-sponsored hackers engaging in cyber espionage or digital warfare, disrupting enemy networks or protecting national security interests.",
        "Each of these actors has distinct motivations, ranging from financial gain and ideological beliefs to espionage and disruption.",
      ],
      question:
        "Which cybercriminal type is motivated by political or social causes?",
      answerKeywords: ["hacktivist"],
    },
    {
      id: 2,
      sectionTitle: "Hat Classification in Hacking",
      content: [
        "Hackers are often categorized based on their ethics and intent. White Hat Hackers are ethical hackers who help improve cybersecurity. Black Hat Hackers are malicious hackers who exploit vulnerabilities for personal gain. Grey Hat Hackers operate between ethical and unethical actions, often exposing security flaws without permission. Blue Hat Hackers are hired externally to test security before a system is deployed.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 3,
      sectionTitle: "Motivations Behind Cybercrime",
      content: [
        "1. Financial Gain: The most common motivation, involving theft, fraud, and ransomware attacks.",
        "2. Political or Social Change: Hacktivists attack organizations to expose corruption or protest policies.",
        "3. Espionage: Governments and corporations engage in cybercrime to steal information from competitors or adversaries.",
        "4. Revenge: Disgruntled employees or individuals may target organizations they feel have wronged them.",
        "5. Disruption: Some attacks are carried out simply to cause chaos or destruction.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "How Cybercriminals Operate",
      content: [
        "Cybercriminals use a variety of methods to exploit systems and individuals. Some of the most common attacks include phishing, malware, ransomware, social engineering, zero-day exploits, and denial-of-service (DoS) attacks.",

        "Phishing remains one of the easiest ways for attackers to steal sensitive information by tricking users into revealing passwords or financial details. Malware infections, including trojans and spyware, can give attackers full control over a system. Ransomware has become increasingly dangerous, encrypting files and demanding payments to restore access. Social engineering takes a different approach by manipulating people rather than technology, often through impersonation or deception.",

        "Some attacks target weaknesses in software rather than users. Zero-day exploits take advantage of unknown security flaws before developers can fix them, making them extremely difficult to defend against. Denial-of-Service (DoS) attacks flood a system with traffic, taking down websites and services, often for financial or political reasons.",

        "These are just a few of the techniques cybercriminals use. As we continue in this course, we will go through each one in more detail and learn how to defend against them effectively.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "Who Fights Cybercrime?",
      content: [
        "While cybercriminals operate in the shadows, there are also many working to stop them. Law enforcement agencies, ethical hackers, and cybersecurity experts play a crucial role in the fight against digital threats.",

        "Many police forces and intelligence agencies have dedicated cybercrime divisions. These units investigate hacking incidents, track cybercriminals, and dismantle illegal operations.",

        "White hat hackers use their skills to identify and fix security vulnerabilities before criminals can exploit them. Many work for companies, governments, or as independent researchers.",

        "Nations invest heavily in cybersecurity to protect critical infrastructure, businesses, and citizens from cyber threats. Some agencies even engage in counter-cyber operations.",

        "Many companies specialize in preventing cybercrime, offering solutions such as threat detection, incident response, and forensic investigations.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
