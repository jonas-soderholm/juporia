import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Privacy.courseNr,
  lessonsOverviewUrl: CourseInfo.Privacy.path,
  sections: [
    {
      id: 1,
      sectionTitle: "What is Safe Browsing?",
      content: [
        "Safe browsing means protecting your online activity from trackers, hackers, and malicious websites. Many websites collect data about you, and cybercriminals use fake sites to steal passwords or install malware.",
        "Without proper protection, browsing the internet can expose your personal data, browsing habits, and even financial information to advertisers, companies, or attackers.",
        "Example: If you visit an unsecured website and enter your credit card details, hackers can steal them. Using secure connections and security tools can help prevent this.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "How Websites Track You & How to Stop It",
      content: [
        "Most websites track users to collect data for advertising, analytics, or personalization. They do this using cookies, browser fingerprinting, and third-party trackers.",
        "To stop tracking, use privacy-focused browsers like Brave or Firefox, install tracker-blocking extensions like uBlock Origin, and regularly clear cookies and site data.",
        "Example: If you search for a product and see ads for it everywhere, it’s because advertisers track your activity. Blocking trackers prevents this type of monitoring.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 3,
      sectionTitle: "Avoiding Malicious Websites & Phishing Attacks",
      content: [
        "Hackers create fake websites to steal login details, install malware, or trick users into sending money. These attacks are known as phishing, and they often look like real login pages or emails from trusted companies.",
        "To stay safe, always check the website address before entering sensitive information, avoid clicking suspicious links, and use password managers to detect fake login pages.",
        "Example: A phishing email claims to be from PayPal, telling you to 'confirm your account.' The link leads to a fake site that steals your password. Checking the real website address would reveal the scam.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "Using a VPN for Extra Protection",
      content: [
        "A Virtual Private Network (VPN) encrypts your internet traffic and hides your real IP address, making it harder for companies and hackers to track your location and online activity.",
        "VPNs are useful for protecting privacy on public Wi-Fi, avoiding website tracking, and bypassing geographic restrictions on content. However, free VPNs can be risky as some collect user data.",
        "Example: If you use public Wi-Fi at a coffee shop without a VPN, a hacker could intercept your login details. A VPN encrypts your data, making it unreadable to attackers.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "Using Antivirus & Anti-Malware Software",
      content: [
        "Security software can block malicious websites, prevent malware infections, and warn users about unsafe downloads. Tools like Malwarebytes, Windows Defender, and Bitdefender scan for threats in real time and stop users from accessing dangerous sites.",
        "Even if you follow safe browsing practices, an antivirus or anti-malware program provides an extra layer of defense against unknown threats or accidental clicks on harmful links.",
        "Example: If you try to visit a known phishing website, Malwarebytes can block it before it loads, preventing your device from being infected or your credentials from being stolen.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 6,
      sectionTitle: "Safe Browsing Tips for Everyday Use",
      content: [
        "1. Keep your browser and extensions updated to fix security vulnerabilities.",
        "2. Use privacy-focused search engines like DuckDuckGo to avoid data collection.",
        "3. Disable third-party cookies and use tracker-blocking extensions for extra privacy.",
        "4. Avoid downloading files from unknown sources to prevent malware infections.",
        "5. Always verify website addresses before entering sensitive data to avoid phishing scams.",
        "6. Install security software like Malwarebytes to automatically block harmful websites.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
