import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Cyber1.courseNr,
  lessonsOverviewUrl: CourseInfo.Cyber1.path,
  sections: [
    {
      id: 1,
      sectionTitle: "What is the Dark Web?",
      content: [
        "You’ve probably heard of the dark web, darknet, or similar names. Many people think it’s a secret part of the internet full of illegal activity, but in reality, it’s just a hidden part of the web that isn’t indexed by search engines like Google.",
        "Unlike the regular internet (the surface web), which can be accessed with a standard browser, the dark web requires special software like the Tor browser. Tor encrypts your internet traffic and routes it through multiple layers of servers, making it much harder for anyone to track your online activity.",
        "While the dark web is often associated with illegal markets and cybercrime, it is also used by whistleblowers, journalists, and people in oppressive countries who need to communicate anonymously. But just because it provides privacy doesn’t mean it’s always safe.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "How the Dark Web Works",
      content: [
        "The dark web is accessible through the Tor network, which stands for The Onion Router. Tor works by encrypting your data multiple times and sending it through a series of randomly chosen servers (nodes) worldwide. Each node only decrypts part of the information, making it extremely difficult to trace where the request originated.",
        "To access the dark web, you need the Tor browser. It’s as simple as going to the official Tor Project website, downloading the installation file (just like downloading Chrome), and installing it on your computer. Once installed, you can browse just like any other browser, but with added anonymity.",
        "Websites on the dark web have addresses ending in '.onion' instead of '.com' or '.org.' These sites are not indexed by search engines, meaning you need to know the exact address to visit them. Some websites offer anonymity for good reasons, but many are also used for selling stolen data, drugs, or hacking services.",
      ],
      question: "",
      answerKeywords: [""],
      images: ["/images/lessons/cyber-1/tor.png"],
    },
    {
      id: 3,
      sectionTitle: "Should You Use the Dark Web?",
      content: [
        "Tor, the browser used to access the dark web, is much slower than regular browsers like Chrome or Firefox. This is because your data is encrypted multiple times and routed through multiple nodes worldwide before reaching its destination. While this improves anonymity, it significantly reduces speed, making it impractical for everyday browsing.",
        "Some people think the dark web is a safer, more private alternative to the normal internet. While it does provide anonymity, it also comes with risks. Many sites are unregulated, filled with scams, malware, and illegal content. Simply clicking the wrong link can expose your computer to viruses or fraud attempts.",
        "For everyday browsing, using the regular web with proper security measures like a VPN, private search engines, and encrypted messaging apps is usually enough. While the dark web has its uses, it is not designed for casual or daily use, and most people do not need to access it.",
        "",
      ],

      question: "Is Tor faster or slower than regular browsers?",
      answerKeywords: ["slower"],
    },
    {
      id: 4,
      sectionTitle: "Cryptography and Anonymity on the Dark Web",
      content: [
        "One of the reasons the dark web exists is because of encryption. Encryption scrambles data so that only the intended recipient can read it. The Tor network uses multiple layers of encryption, making it very difficult to track where traffic is coming from.",
        "Many dark web transactions are done using cryptocurrencies like Bitcoin. Unlike regular bank transactions, cryptocurrencies provide more privacy, but they are not completely untraceable. Law enforcement has developed ways to track suspicious transactions, especially with Bitcoin, which has a public ledger of all transactions.",
        "In future courses, we will go deeper into blockchain technology, which is the foundation of cryptocurrencies like Bitcoin. Understanding how blockchain works will help you see both its benefits and its risks, especially in the context of privacy and security.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "Dark Web Marketplaces & Cybercrime",
      content: [
        "Some areas of the dark web are dedicated to illegal activities, such as selling stolen credit card information, hacking tools, or personal data. These marketplaces operate similarly to e-commerce sites, but instead of legitimate goods, they deal in cybercrime services and stolen data.",
        "However, law enforcement agencies around the world actively monitor and shut down illegal marketplaces. Some of the most well-known dark web markets, such as Silk Road, were taken down, and many people involved were arrested.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 6,
      sectionTitle: "Final Thoughts: The Dark Web vs. The Surface Web",
      content: [
        "The dark web is not all good or all bad—it is simply a hidden part of the internet that can be used for both legitimate and illegal purposes. While it offers strong privacy, it is not necessary for everyday use, and browsing it comes with risks.",
        "Understanding encryption, anonymity, and how criminals use the dark web can help you stay safer online. In future lessons, we will explore how to protect your privacy without needing the dark web and how to recognize common online threats.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
