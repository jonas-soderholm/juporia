import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Privacy.courseNr,
  lessonsOverviewUrl: CourseInfo.Privacy.path,
  sections: [
    {
      id: 1,
      sectionTitle: "What Is a VPN?",
      content: [
        "A VPN, or Virtual Private Network, is a tool that increases your privacy and security when using the internet by encrypting your internet connection and hiding your real location. Normally, when you visit a website, your internet provider can see which websites you are accessing, when you visit them, and how much data you send and receive. A VPN changes this by creating a secure connection between your device and a VPN server, making it much harder for your internet provider, hackers, or websites to track your online activity.",
        "Many people use a VPN to protect their privacy, bypass restrictions in certain countries, and secure their data when using public Wi-Fi networks. While a VPN does not make you completely anonymous, it adds an extra layer of protection by ensuring that your online traffic is encrypted and routed through a different server before reaching the websites you visit.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "How the Internet Works Without a VPN",
      content: [
        "To understand why a VPN is useful, it's important to first understand how the internet normally works without one. When you open your web browser and visit a website, your internet request goes through several steps before the page loads on your screen.",
        "First, your computer or phone sends the request to your home router, which then forwards it to your Internet Service Provider (ISP). Your ISP is the company that provides your internet connection. The ISP assigns your connection a unique address, known as an IP address, which identifies you online. The ISP then directs your request to the website, which loads the content and sends it back to your device.",
        "Without encryption, your ISP can see your browsing activity. This includes the websites you visit, when you visit them, how long you stay, and how much data is being transferred. If you're visiting a site without HTTPS encryption, the ISP can even see the specific content you're viewing, including passwords and sensitive information.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 3,
      sectionTitle: "How the Internet Works With a VPN",
      content: [
        "When you use a VPN, your internet traffic is still routed through your ISP, but the traffic is encrypted before it leaves your device. Encryption is like putting your data in a locked box. Only the VPN server has the key to unlock it. This means that while your ISP can see that you're connected to a VPN, it cannot see the specific websites you're visiting or the data you're sending.",
        "Once the encrypted data reaches the VPN server, it is decrypted (unlocked) and forwarded to the website. The website sees the VPN server’s IP address, not your real one.",
        "With a VPN, your connection works as follows: Your device encrypts your internet traffic before sending it to the VPN server. This ensures that your ISP cannot track the details of your online activity. The ISP can still see that you're connected to a VPN, but it cannot track your browsing activity. The VPN server decrypts the data and forwards it to the website.",
        "Without a VPN, your internet connection follows this path: PC → Router → ISP → Website",
        "With a VPN, your connection is handled like this: PC → Router → ISP → VPN Server → Website",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "https:// vs http:// – What’s the Difference?",
      content: [
        "HTTPS stands for HyperText Transfer Protocol Secure. It's the secure version of HTTP, meaning it encrypts the data exchanged between your device and the website, making it unreadable to anyone who might try to intercept it. When you see 'https://' at the beginning of a web address, it means the website is using HTTPS to secure your connection. This encryption protects your online activity and ensures that hackers, your ISP, and others cannot easily steal your data or monitor what you're doing on the site. Today, most websites use HTTPS to protect users' privacy and security, so you don't have to worry as much about unencrypted connections. If a website is only using HTTP, your browser usually gives a warning that the connection is not secure and asks if you want to continue or not.",
        "HTTP is not secure, meaning that data between your device and the website is sent in plain text. Without encryption, this data can be intercepted by hackers, especially when using public Wi-Fi. This makes it much easier for hackers to steal your personal information, such as passwords, credit card numbers, or any sensitive data you enter on the site. Additionally, your ISP and anyone else monitoring the network can see the websites you visit and what you're doing online.",
      ],

      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "Why Use a VPN?",
      content: [
        "A VPN is commonly used for several reasons, including improving privacy, security, and access to restricted content. One of the main reasons people use a VPN is to hide their IP address from websites and advertisers. Without a VPN, websites can track your real IP address and link your activity across different sites. With a VPN, your IP address is replaced with the VPN server's address, making it harder for sites to track your location and browsing habits.",
        "A VPN is also useful for protecting your data when using public Wi-Fi. Many public Wi-Fi networks, like those in coffee shops, airports, and hotels, are not secure, meaning hackers can potentially intercept your data. By using a VPN, your data is encrypted, preventing others from spying on your activity.",
        "Additionally, VPNs can help bypass geo-restrictions and internet censorship. Some countries block access to specific websites or social media platforms, but by connecting to a VPN server in another location, users can access content as if they were browsing from that location.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 6,
      sectionTitle: "Should I Use It? How Often? When?",
      content: [
        "There are a few drawbacks to consider. First, a VPN can slightly reduce your internet speed because it routes your traffic through a secure server. The impact on speed depends on the quality of the VPN provider, the distance to the server, and the server's load.",
        "Second, while most websites today use HTTPS for encryption, some VPNs may have compatibility issues with certain services, like streaming platforms that block VPN traffic. Additionally, low-quality VPNs can be unreliable and may pose security risks, like logging your data. Using a free VPN can also result in slower speeds and limited server options.",
        "Cost is another consideration, as most VPNs are paid services. Prices can vary, with some offering cheaper options starting around $5 per month, while others may charge $10–$15 per month or more for premium plans. Many VPNs offer one-time payments for 1-month, 3-month, or annual plans. It's important to note that paying for a VPN upfront (instead of using subscription models that store your payment details) can be more secure and reduce the risk of recurring charges.",
        "You don’t need to use a VPN all the time, but it's especially important when connecting to public networks, accessing geo-restricted content, or when you want to protect your privacy. To minimize speed loss, choose a reputable VPN provider.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 7,
      sectionTitle: "Choosing a VPN – What to Look For",
      content: [
        "Not all VPNs offer the same level of privacy and security. Some VPN services claim to protect users, but they actually log and sell browsing data to advertisers. When choosing a VPN, it's important to consider a few key factors to ensure you are getting real privacy protection.",
        "A good VPN should have a strict no-logs policy, meaning it doesn't store records of your activity. It should use strong encryption protocols, such as WireGuard or OpenVPN, to secure your internet traffic. Additionally, a reliable VPN should not leak your real IP address and should have independent security audits to verify its claims.",
        "Free VPNs are generally not recommended, as they often make money by collecting and selling user data. A paid VPN with a strong privacy policy is usually a better option for long-term security and reliability.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 8,
      sectionTitle: "Recommended VPN for Beginners vs SMB vs Enterprise Level",
      content: [
        "For beginners just starting out, Mullvad VPN is an excellent choice. It offers strong privacy protections while being simple to set up and use. Unlike most VPN providers, Mullvad does not require an email address or personal details to create an account. Instead, it assigns users a randomly generated account number, which enhances privacy by keeping their identity separate from their VPN usage. Mullvad has a strict no-logs policy, meaning it does not track or store user data, ensuring your activity remains private. Additionally, Mullvad only accepts one-time payments, and they do not store personal payment details or long-term records of your activity.",
        "In the unlikely event someone were to hack your Mullvad account, they would only have access to your VPN usage. Since Mullvad doesn’t store payment information or personal details, there’s minimal risk of further exposure. This makes it an even safer option for those concerned about privacy and security.",
        "For small-to-medium businesses (SMBs), VPN services like NordVPN or ExpressVPN are more suitable. They offer advanced features like dedicated IP addresses, multiple server locations, and business-oriented encryption protocols. These VPNs allow SMBs to manage multiple user accounts and include enhanced support, making them ideal for businesses looking for solid security without the complexity of enterprise-level solutions.",
        "At the enterprise level, solutions like Cisco AnyConnect, Palo Alto Networks, and even homegrown solutions provide highly customizable, scalable, and secure VPN options for large organizations. These VPNs often include integrated solutions for endpoint security, centralized management, and enterprise-grade encryption. They're designed to support large-scale deployments with advanced features like multi-factor authentication, enhanced threat protection, and integration with other enterprise security infrastructure.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
