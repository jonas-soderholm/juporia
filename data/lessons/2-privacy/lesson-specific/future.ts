import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Privacy.courseNr,
  lessonsOverviewUrl: CourseInfo.Privacy.path,
  sections: [
    {
      id: 1,
      sectionTitle: "What Are Privacy Laws?",
      content: [
        "Privacy laws are regulations that protect individuals' personal data and ensure that organizations handle that data responsibly. These laws vary from country to country, but they all aim to protect individuals from unauthorized collection, sharing, or misuse of their personal information.",
        "For example, privacy laws may require companies to obtain your consent before collecting your data, allow you to request what data they have on you, and give you the right to delete that data.",
        "Understanding privacy laws is essential because they give you rights over your own data and help ensure companies respect your privacy.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "What is Surveillance?",
      content: [
        "Surveillance is the monitoring of people's activities, often without their knowledge or consent. It can be carried out by governments, businesses, or individuals for purposes like security or marketing. While it can improve safety, it raises privacy concerns, especially when done without transparency or consent.",
        "In the digital age, surveillance often involves tracking online activities through cookies, social media monitoring, or smartphone location tracking. This type of surveillance can make individuals feel like they're constantly being watched, which can infringe on personal freedoms.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 3,
      sectionTitle: "Global Privacy Laws – GDPR, CCPA, and Beyond",
      content: [
        "Privacy laws are regulations designed to protect individuals' personal data and ensure that organizations handle it responsibly. One of the most well-known examples is the General Data Protection Regulation (GDPR), which was created by the European Union to protect the personal data of EU citizens. The GDPR came into effect in May 2018 and applies to any organization that processes data related to EU citizens, regardless of where the organization is based.",
        "GDPR gives individuals more control over their personal data. It requires companies to clearly explain what data they collect, why they collect it, and how they will use it. Individuals also have the right to access their data, request corrections, and even ask for their data to be deleted (known as the 'right to be forgotten').",
        "GDPR also emphasizes the need for explicit consent from individuals before collecting or processing their personal data. Non-compliance can result in heavy fines, which makes it one of the most significant privacy regulations in the world.",
        "However, GDPR is not the only regulation of its kind. In the United States, the California Consumer Privacy Act (CCPA) provides similar rights to California residents. In Brazil, the Lei Geral de Proteção de Dados (LGPD) regulates data privacy. As privacy laws continue to evolve worldwide, organizations are increasingly expected to comply with multiple regulations to protect personal data.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "Global Privacy Laws: Comparison & Challenges",
      content: [
        "While the GDPR is one of the most well-known privacy regulations, many other countries have implemented their own data protection laws. For example, the California Consumer Privacy Act (CCPA) gives residents of California similar rights to GDPR, such as the right to know what data is being collected about them and to request its deletion.",
        "Other countries, such as Canada and Australia, have their own data protection laws. However, these laws are often not as stringent as the GDPR, and there are significant differences in how countries approach privacy protection.",
        "One of the main challenges is the lack of global consistency in privacy laws. Businesses that operate internationally often face difficulties in complying with multiple, different regulations. This creates a patchwork of laws that can be confusing for both consumers and organizations.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "Surveillance in the Digital Age – Pros and Cons",
      content: [
        "In the digital age, surveillance is more prevalent than ever. Governments and corporations use surveillance technologies to monitor online activity, track behaviors, and collect personal data.",
        "Proponents of surveillance argue that it can help improve security, fight crime, and provide personalized services to consumers. For example, tracking your location can help provide accurate weather forecasts, or it can assist law enforcement in preventing crimes.",
        "However, critics argue that unchecked surveillance invades privacy, restricts freedom of expression, and can lead to the misuse of personal data. There are concerns that governments or companies could use surveillance to monitor political opinions, behaviors, or even manipulate public opinion.",
      ],
      question: "What could be a pro of surveillance?",
      answerKeywords: [
        "security",
        "personalized",
        "preventing",
        "crime",
        "fight",
        "crime",
        "services",
        "accurate",
        "weather",
        "forecast",
        "forecast",
        "enforcement",
      ],
    },
    {
      id: 6,
      sectionTitle: "The Future of Privacy – Trends and Emerging Technologies",
      content: [
        "As technology continues to evolve, the future of privacy is constantly changing. Emerging technologies, such as artificial intelligence (AI), blockchain, and biometric data, will have significant impacts on privacy.",
        "For example, AI could enable even more precise surveillance and data analysis, while blockchain technology promises more secure ways of handling personal data, reducing the need for intermediaries.",
        "On the other hand, biometric data (such as fingerprints, face recognition, and retina scans) is becoming more widely used for identification. While this makes access to services more convenient, it raises new privacy concerns, particularly if this data is not properly secured or is misused.",
        "As these technologies continue to develop, it will be crucial for governments and organizations to adapt and create new laws that protect individuals' privacy in the face of rapidly evolving capabilities.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
