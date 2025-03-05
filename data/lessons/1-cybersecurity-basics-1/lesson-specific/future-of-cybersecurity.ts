import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Cyber1.courseNr,
  lessonsOverviewUrl: CourseInfo.Cyber1.path,
  sections: [
    {
      id: 1,
      sectionTitle: "The Evolving Threat Landscape",
      content: [
        "Cybersecurity is constantly changing because hackers are always finding new ways to attack. As technology evolves, so do the threats. New types of malware, more sophisticated phishing attacks, and AI-powered hacking tools are making it harder than ever to stay secure.",
        "Companies and governments are investing heavily in cybersecurity to keep up with these threats, but individuals also need to adapt. Understanding emerging threats is the first step in protecting yourself.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "AI and Cybersecurity",
      content: [
        "Artificial Intelligence (AI) is playing a big role in both cyber attacks and cybersecurity. Hackers are using AI to automate attacks, create convincing fake emails (phishing), and even break passwords faster.",
        "At the same time, security experts use AI to detect and stop attacks before they happen. AI-powered security tools can scan millions of files per second, recognize unusual behavior, and prevent cyber threats in real-time.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 3,
      sectionTitle: "The Role of Blockchain in Cybersecurity",
      content: [
        "Blockchain is best known for cryptocurrencies like Bitcoin, but it also has applications in cybersecurity. Because blockchain records data in a way that is nearly impossible to alter, it can be used to secure transactions, prevent fraud, and improve identity verification.",
        "Some cybersecurity companies are exploring blockchain to protect supply chains, secure digital voting, and even create tamper-proof records. While blockchain is not a solution to all cybersecurity problems, it is expected to play a bigger role in protecting data in the future.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "Quantum Computing and Encryption",
      content: [
        "Today’s encryption methods protect data by using complex mathematical problems that take traditional computers a long time to solve. However, quantum computers could one day break these encryption methods much faster, making current security systems vulnerable.",
        "Scientists and security experts are already working on 'post-quantum cryptography'—new types of encryption that even quantum computers won’t be able to break. While quantum computers are still in their early stages, they will likely change the future of cybersecurity.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "Cybersecurity Laws and Global Efforts",
      content: [
        "Governments around the world are creating stronger laws to fight cybercrime. The EU's GDPR and similar regulations in other countries are pushing companies to improve data protection.",
        "At the same time, international cybersecurity cooperation is becoming more important. Countries are sharing information about threats, working together to stop cybercriminals, and building defense strategies against cyber warfare.",
        "Understanding how cybersecurity laws impact businesses and individuals is becoming more important, and we will explore this topic more in advanced courses.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 6,
      sectionTitle: "Final Thoughts: Preparing for the Future",
      content: [
        "The future of cybersecurity is about staying ahead of threats. As hacking techniques become more advanced, security professionals, businesses, and individuals all need to stay informed and adapt.",
        "The best way to protect yourself is to keep learning. By understanding cybersecurity fundamentals, you are already taking a big step toward staying safe in the digital world.",
        "In future lessons, we will continue exploring advanced topics like incident response and disaster recovery, ethical hacking, and how businesses can protect their systems from large-scale attacks.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
