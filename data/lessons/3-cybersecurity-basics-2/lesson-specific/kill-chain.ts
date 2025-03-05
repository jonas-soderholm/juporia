import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Cyber2.courseNr,
  lessonsOverviewUrl: CourseInfo.Cyber2.path,
  sections: [
    {
      id: 1,
      sectionTitle: "What is the Cyber Kill Chain?",
      content: [
        "The Cyber Kill Chain is a step-by-step model used to describe how cyberattacks happen. It helps businesses understand how attackers break in and what security measures can stop them.",
        "The Kill Chain includes multiple stages, from attackers researching a target to stealing data or disrupting systems. By identifying each step, businesses can stop attacks earlier and reduce damage.",
        "Example: A hacker trying to steal customer data follows the Kill Chain by first researching the company, sending a phishing email, installing malware, and finally extracting data from company servers.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "Step 1: Reconnaissance (Attackers Gather Information)",
      content: [
        "Before launching an attack, hackers collect information about a company, employees, and systems. They look for weaknesses such as outdated software, weak passwords, or exposed company emails.",
        "This step often involves scanning websites, gathering data from social media, and using leaked passwords from past breaches to find easy entry points.",
        "Example: A hacker checks LinkedIn for employee email addresses, then searches the dark web for leaked passwords to see if any employees use them at work.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 3,
      sectionTitle: "Step 2: Weaponization (Preparing the Attack)",
      content: [
        "After collecting information, hackers create tools to exploit weaknesses. This can include malware, fake login pages, or phishing emails designed to trick employees into revealing passwords.",
        "They may also craft convincing emails pretending to be from a trusted source, such as a manager or IT support, to make employees click malicious links or download infected files.",
        "Example: An attacker creates a fake email pretending to be from the CEO, asking employees to download an 'urgent document' that actually contains malware.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "Step 3: Delivery (Sending the Attack to the Target)",
      content: [
        "At this stage, hackers send their attack to the company, often through phishing emails, malicious attachments, or fake websites designed to steal credentials.",
        "The goal is to trick employees into clicking a bad link, opening an infected file, or entering login details on a fake page.",
        "Example: A phishing email claims to be from Microsoft, asking employees to reset their password. The fake link leads to a website that steals login credentials.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "Step 4: Exploitation (Breaking In)",
      content: [
        "Once the target interacts with the attack (clicking a link, opening a file, or using a weak password), the hacker gains access to company systems.",
        "Hackers may install malware, take control of a computer, or use stolen credentials to move deeper into company networks.",
        "Example: An employee downloads a fake invoice from an attacker, which installs spyware on their device, allowing hackers to steal company passwords.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 6,
      sectionTitle: "Step 5: Installation (Establishing Control)",
      content: [
        "Once inside, attackers install malware or create secret access points so they can return later. Some hackers stay undetected for months before launching the final attack.",
        "Businesses that don’t monitor their systems may not realize that a hacker has already gained access and is slowly collecting sensitive data.",
        "Example: A hacker installs a backdoor that lets them secretly control a company’s network and steal files over time without being noticed.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 7,
      sectionTitle: "Step 6: Command & Control (Hackers Take Full Access)",
      content: [
        "At this stage, the hacker has full control over the system. They can move through networks, steal data, or prepare to shut down business operations.",
        "Many attackers use remote access tools to stay hidden while controlling company computers from anywhere in the world.",
        "Example: A hacker uses a remote access tool to take over employee computers, send fake emails, and steal sensitive business data.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 8,
      sectionTitle:
        "Step 7: Exfiltration & Impact (Stealing Data or Causing Damage)",
      content: [
        "The final step is where attackers steal data, encrypt files for ransom, or cause system failures. This is where businesses suffer financial losses, data breaches, or major downtime.",
        "If businesses don’t have strong backups or detection tools, recovering from an attack can take weeks and cost thousands in damages.",
        "Example: A hacker encrypts a company’s entire database and demands ransom in Bitcoin to unlock the files. Without backups, the business must pay or lose all its data.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 9,
      sectionTitle: "How Businesses Can Stop Attacks at Each Stage",
      content: [
        "By understanding the Kill Chain, businesses can block attacks before they cause damage. The earlier an attack is stopped, the less harm it can do.",
        "1. Stop Reconnaissance – Hackers gather information before attacking. Businesses can reduce exposure by using strong passwords, keeping software updated, and removing employee data from public websites. Example: A company hides employee emails on its website to prevent phishing attacks.",
        "2. Stop Weaponization – Hackers prepare attacks by designing malware and fake login pages. Businesses can use email filtering and security tools to block harmful files before employees open them. Example: A retail business uses an advanced spam filter to block fake invoices that contain malware.",
        "3. Stop Delivery – Most attacks are delivered through phishing emails or infected websites. Train employees to spot phishing scams, avoid clicking unknown links, and verify unexpected requests before taking action. Example: An employee receives an email saying their password expired but checks with IT first, avoiding a phishing trap.",
        "4. Stop Exploitation – Even if an attack reaches a business, it can be stopped before hackers gain access. Use multi-factor authentication (MFA) to require extra identity verification and keep all software updated to patch vulnerabilities. Example: A hacker steals an employee’s password, but they can’t log in without the MFA code sent to the employee’s phone.",
        "5. Stop Installation – If malware does get in, businesses can still prevent damage. Use endpoint security software and restrict employee permissions so malware can’t spread across the network. Example: A company limits admin access, so even if malware infects one computer, it can’t spread to others.",
        "6. Stop Command & Control – Hackers use remote tools to control infected systems. Businesses should block unknown connections with firewalls and monitor network traffic for unusual activity. Example: A firewall detects a suspicious connection from a foreign country and automatically blocks it.",
        "7. Stop Data Theft & Damage – The final goal of an attack is stealing or destroying data. Businesses should encrypt sensitive data, back up important files regularly, and set up alerts for large data transfers. Example: A law firm has automatic backups, so when ransomware encrypts files, they restore everything without paying hackers.",
        "A strong security strategy stops hackers at multiple points, reducing the chance of a full-scale attack. Even small changes like employee training, MFA, and system updates can make a big difference in blocking threats.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
