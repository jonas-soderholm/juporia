import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Cyber1.courseNr,
  lessonsOverviewUrl: CourseInfo.Cyber1.path,
  sections: [
    {
      id: 1,
      sectionTitle: "What is Social Engineering?",
      content: [
        "Social engineering is a form of psychological manipulation that tricks individuals into revealing sensitive information or taking certain actions that benefit an attacker.",
        "Unlike traditional hacking, social engineering exploits human psychology rather than technical vulnerabilities, making it one of the most effective forms of cyber attacks.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "Common Social Engineering Tactics",
      content: [
        "Social engineers use various techniques to manipulate victims. Some of the most common methods include phishing, pretexting, baiting, quid pro quo, and tailgating.",
        "Phishing: Deceptive emails or messages that impersonate trusted sources to steal login credentials or financial information. For example, an attacker might send an email pretending to be from a bank, asking the recipient to click a link and verify their account details.",
        "Pretexting: Attackers create a fabricated scenario to trick victims into providing personal or confidential data. A common example is a scammer posing as IT support, asking employees for their passwords to fix a non-existent problem.",
        "Baiting: Cybercriminals leave malware-infected devices, such as USB sticks, in public places, hoping that victims will plug them in out of curiosity. For instance, a USB labeled 'Company Salaries 2024' might tempt an employee to open it, unknowingly installing malware.",
        "Quid Pro Quo: Attackers offer something of value, such as free software or assistance, in exchange for sensitive information. A hacker might pose as a customer service agent offering a free software upgrade, but actually stealing login credentials.",
        "Tailgating: A physical security breach where an attacker follows an authorized person into a restricted area without proper credentials. For example, an attacker carrying coffee might ask an employee to hold the door open for them, bypassing security checks.",
      ],
      question:
        "Which social engineering attack involves sending deceptive emails or messages that impersonate trusted sources to steal login credentials or financial information?",
      answerKeywords: ["phishing"],
    },
    {
      id: 3,
      sectionTitle: "Psychological Triggers Used in Social Engineering",
      content: [
        "Social engineering attacks rely on exploiting common human behaviors and emotions. These psychological triggers include urgency, fear, trust, curiosity, and authority.",
        "Urgency: Attackers create a sense of time pressure to make victims act without thinking. For example, an email might claim that an account will be deactivated unless action is taken within an hour.",
        "Fear: Scaring victims into complying, such as warning them that their account will be locked if they don’t act immediately. A common tactic is fake IRS or police warnings demanding immediate payment to avoid legal consequences.",
        "Trust: Impersonating someone the victim knows, like a boss or IT support, to gain credibility. Attackers may send a message pretending to be the CEO requesting urgent financial transactions.",
        "Curiosity: Encouraging victims to click on suspicious links, open attachments, or connect to malicious devices. For instance, an email might contain a fake lottery winning notice, prompting the victim to open an infected attachment.",
        "Authority: Exploiting respect for authority figures, such as impersonating law enforcement or executives, to pressure victims into compliance. Attackers may pose as high-level managers demanding confidential information from employees.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "Real-World Social Engineering Attacks",
      content: [
        "Many high-profile cyber attacks have involved social engineering. Attackers use these methods to infiltrate organizations and gain access to sensitive data.",
        "One notable example is the 2016 Google and Facebook scam, where attackers used fake invoices to steal over $100 million by impersonating a legitimate vendor. Another case is the 2020 Twitter breach, where attackers manipulated employees into providing account access, leading to the hijacking of several high-profile Twitter accounts. These cases highlight how even major corporations can fall victim to social engineering tactics, reinforcing the need for awareness and strong security protocols.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "How to Protect Against Social Engineering",
      content: [
        "Preventing social engineering attacks requires a combination of awareness, security practices, and verification techniques. Being skeptical of unsolicited messages, verifying identities before providing sensitive information, and using multi-factor authentication (MFA) are crucial steps.",
        "Organizations should educate employees about common social engineering tactics and conduct security training to ensure that they recognize and respond effectively to potential threats. Later in this course, we will explore in-depth techniques to detect and respond to social engineering attacks effectively.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 6,
      sectionTitle: "Social Engineering in the Workplace",
      content: [
        "Many social engineering attacks are aimed at businesses and employees, as organizations store valuable data and assets. Attackers may pose as coworkers, vendors, or IT personnel to gain unauthorized access to secure systems.",
        "They may also exploit workplace culture, such as an employee’s willingness to be helpful, to bypass security measures. Workplace training and strict security policies can help employees identify and prevent such attacks, ensuring that businesses remain protected.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 7,
      sectionTitle: "Advanced Social Engineering Techniques",
      content: [
        "Modern attackers use AI-powered chatbots, deepfake technology, and voice impersonation to make their attacks more convincing. Spear-phishing and whaling attacks specifically target high-profile individuals such as executives and government officials, making them harder to detect.",
        "These advanced tactics require increased vigilance and improved cybersecurity measures to prevent successful breaches. Organizations must stay ahead by continuously updating their security protocols and educating personnel about emerging threats.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 8,
      sectionTitle: "Social Engineering in Physical Security",
      content: [
        "Social engineers often attempt to gain physical access to secure locations by pretending to be maintenance workers, delivery personnel, or even employees. Badge cloning and tailgating are common tactics used to bypass security checkpoints.",
        "Strong physical security measures, such as biometric authentication and security awareness programs, are crucial in preventing these attacks. Security teams should remain vigilant and regularly update their access control protocols to minimize risks.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
