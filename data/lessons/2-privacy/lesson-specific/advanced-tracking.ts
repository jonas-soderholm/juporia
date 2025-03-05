import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Privacy.courseNr,
  lessonsOverviewUrl: CourseInfo.Privacy.path,
  sections: [
    {
      id: 1,
      sectionTitle:
        "Cross-Device Tracking: How Companies Follow You Across Devices",
      content: [
        "Cross-device tracking is a method that allows companies to track you across your phone, tablet, and computer, even if you don’t log into your accounts. They do this by using unique identifiers like your email, IP address, or device ID.",
        "For example, if you search for a product on your phone and then switch to your computer, companies can still track you by linking both devices through your IP address or cookies stored across all devices.",
        "To prevent this, you can use separate user profiles on different devices, or you can use a VPN to mask your IP address and prevent tracking across devices.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "Browser Fingerprinting: How Your Device Is Identified",
      content: [
        "Browser fingerprinting is a method that tracks you by using the unique characteristics of your device and browser. For example, it looks at things like your screen size, operating system, and the fonts installed on your device.",
        "Even if you clear your cookies or use private browsing modes, your fingerprint might still be unique enough to track you. This is because these details are hard to change or hide.",
        "To protect yourself from browser fingerprinting, consider using privacy-focused browsers like Brave or Tor, which have features to block or hide fingerprinting attempts.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 3,
      sectionTitle:
        "Supercookies and Local Storage: Persistent Tracking Methods",
      content: [
        "Supercookies are a type of tracking tool that is more difficult to get rid of than regular cookies. Unlike regular cookies, which are stored in your browser, supercookies are stored in different places, like your computer's local storage or even Flash memory.",
        "For example, imagine you visit a website and the site stores a supercookie. Even if you delete your regular cookies or use private browsing, the supercookie will remain and allow the site to track you when you come back later.",
        "To prevent supercookies from tracking you, it's important to clear your browser’s storage regularly and use privacy extensions like Privacy Badger or uBlock Origin to block these tracking methods.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "Using Privacy-Focused Tools to Block Advanced Tracking",
      content: [
        "To block advanced tracking techniques, you can use various tools that focus on privacy protection:",
        "1. VPNs: These hide your IP address and encrypt your internet traffic, making it harder for companies to track your activity across devices.",
        "2. Browser Extensions: Tools like uBlock Origin and Privacy Badger block trackers and prevent websites from collecting your data.",
        "3. Anti-Fingerprinting Browsers: Browsers like Tor or Brave have built-in tools that hide your unique device details to stop fingerprinting.",
        "4. Secure Search Engines: Privacy-friendly search engines like DuckDuckGo and Startpage don’t track your searches or store your data.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle:
        "How Companies Hide Tracking: Privacy-Focused Design and Anonymization",
      content: [
        "Some companies are trying to reduce tracking by adopting privacy-first design principles. For example, Apple’s App Tracking Transparency lets you decide whether apps can track your behavior across other apps and websites.",
        "Similarly, Mozilla’s Firefox browser offers Enhanced Tracking Protection, which blocks cookies and trackers by default, making it harder for companies to follow your actions online.",
        "To make sure your data is anonymized, choose services that prioritize privacy, such as using encrypted messaging apps like Signal or ProtonMail for email, and ensure they don’t store unnecessary personal data.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
