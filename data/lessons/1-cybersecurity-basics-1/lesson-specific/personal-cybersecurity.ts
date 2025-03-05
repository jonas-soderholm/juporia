import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Cyber1.courseNr,
  lessonsOverviewUrl: CourseInfo.Cyber1.path,
  sections: [
    {
      id: 1,
      sectionTitle: "Why Personal Cybersecurity is Important",
      content: [
        "Most cyber attacks do not happen because of advanced hacking. Instead, they succeed because people make small mistakes like reusing passwords, clicking fake links, or ignoring security updates. Hackers take advantage of this to steal personal data, break into accounts, and even commit identity theft.",
        "Imagine waking up to find your email hacked and messages sent from your account. Or discovering that someone has stolen your credit card details and made purchases in your name. These are real risks that happen every day, but they can be prevented with simple cybersecurity habits.",
        "This lesson will show you how to protect your personal data, secure your online accounts, and avoid common traps that hackers use to trick people. By making small changes, you can make yourself a much harder target for cybercriminals.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "Keeping Your Personal Data Safe",
      content: [
        "Sharing too much personal information online can make you a target for scams and identity theft. Hackers and scammers use details like your full name, birthdate, or workplace to guess passwords, trick you into clicking fake links, or even impersonate you.",
        "Think before posting personal details on social media. Avoid sharing vacation plans, phone numbers, or anything that could help a scammer pretend to be you. If a website asks for unnecessary personal details, like your address or phone number, consider whether it’s really needed.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 3,
      sectionTitle: "The Dangers of Public Wi-Fi",
      content: [
        "Many people don’t realize that using free Wi-Fi at a coffee shop, airport, or hotel can be risky. Hackers can intercept data sent over public networks, meaning they can steal your passwords, emails, or payment details without you knowing.",
        "Public Wi-Fi is useful, but it is not secure. If you must use it, avoid logging into sensitive accounts like banking apps or email. A VPN (Virtual Private Network) can help by encrypting your internet connection, making it much harder for hackers to see what you are doing online. We will go thrugh vpn step by step in the privacy course",
        "If you use public Wi-Fi frequently, consider getting a personal hotspot or using your phone’s mobile data instead. It is much safer than relying on an open, unprotected network.",
        "",
      ],
      question: "What tool encrypts your internet connection?",
      answerKeywords: ["VPN", "Virtual Private Network"],
    },
    {
      id: 4,
      sectionTitle: "Take Care of Your Own Wi-Fi",
      content: [
        "When someone has your Wi-Fi password, they can access your network, which makes it much easier for them to attack your devices, steal personal information like passwords, emails, or even bank details.",
        "They could also use your network for illegal activities, which might get traced back to you, or slow down your internet by using up all the bandwidth. This is why it's so important to keep your Wi-Fi password secret and change it regularly.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "What is a VPN and Why It Helps",
      content: [
        "A VPN (Virtual Private Network) is a tool that helps protect your online privacy. Without a VPN, your internet provider and websites you visit can see your online activity, track your location, and collect information about you.",
        "A VPN encrypts your internet connection, making it much harder for anyone, like hackers or your internet provider, to spy on what you're doing. It also hides your real location, so websites and other people can only see that you’re connected to a VPN server, not your exact location. This is especially useful on public Wi-Fi networks, where hackers might try to steal your personal information. In the Privacy course, we’ll go deeper into how VPNs work, which VPN is right for you or your business, who can see your activity, and how you can keep your information safe online.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 6,
      sectionTitle: "How to Stay Safe Long-Term",
      content: [
        "Cybersecurity isn’t something you do once and forget about—it’s an ongoing habit. Hackers are constantly finding new ways to exploit weaknesses, so staying safe means following best practices and staying aware of the latest scams.",
        "A few simple habits can make a big difference: always keep your software updated, use strong and unique passwords, avoid clicking on unknown links, and be mindful of what you share online. Do you know who can read your messages? Are you using encrypted messaging apps?",
        "In the next lesson, we’ll explore the dark web, cryptography, and how cybercriminals use hidden markets to buy and sell stolen data. Understanding how hackers operate will help you stay even safer.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
