import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Cyber1.courseNr,
  lessonsOverviewUrl: CourseInfo.Cyber1.path,
  sections: [
    {
      id: 1,
      sectionTitle: "Why Password Security Matters",
      content: [
        "Passwords act like the keys to your digital life, protecting everything from personal emails to bank accounts. If a cybercriminal gets hold of them, they can steal your identity, drain your funds, or even lock you out of your own accounts.",
        "Using a weak password is like using a flimsy lock on your door. A strong password makes it much harder for attackers to break in and gain control of your data. That’s why password security is one of the easiest yet most powerful ways to stay safe online.",
      ],
      question: "",
      answerKeywords: [""],
      images: [""],
    },
    {
      id: 2,
      sectionTitle: "Using OAuth for More Secure Logins",
      content: [
        "You might have seen 'Log in with Google' or 'Log in with Facebook' on websites. Juporia also uses OAuth (Open Authorization) for more secure logins. This method is safer than creating a new password for each site.",
        "Instead of typing your password everywhere, OAuth lets you rely on a trusted provider (like Google) to confirm who you are. This helps prevent phishing because it stops fake login pages from stealing your password. Plus, if a site ever gets hacked and their database is leaked, your password won't be exposed, so it can't be used by hackers to try logging into other sites where you might have the same password, username, or email.",
      ],
      question: "",
      answerKeywords: [""],
      images: ["/images/lessons/cyber-1/oauth.png", "", ""],
    },
    {
      id: 3,
      sectionTitle: "Do you have many passwords to remember?",
      content: [
        "If you have dozens of different logins, remembering them all can be overwhelming. Password managers like 1Password, Bitwarden, or LastPass securely store all your passwords in one place. Some are even free, allowing you to access them via a secure website or app.",
        "These services encrypt your passwords using advanced security methods, such as AES-256 encryption, which makes them nearly impossible to crack. Your passwords are stored in an encrypted vault, and only you can unlock it using a strong 'master password.'",
        "Because of this, you only need to memorize one master password instead of dozens of different ones. This reduces the risk of reusing weak passwords or writing them down where someone might find them.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "What Makes a Strong Password?",
      content: [
        "Look at the image above. It’s the 2024 update to the Hive Systems Password Table. You want your password in the green zone—not just because it's secure now, but because it will remain strong even as hacking techniques evolve.",
        "A strong password should be at least 12 characters long and include a mix of uppercase letters, lowercase letters, numbers, and symbols. Avoid easy words, names, or birthdays. Instead of 'password123,' use a random passphrase like ‘GreenHorse#Bubble99%’. The longer the password, the better—12 characters is a good start, but 14+ is even more secure!",
        "",
      ],

      question: "Name atleast one good characteristic of a strong password?",
      answerKeywords: [
        "uppercase",
        "lowercase",
        "numbers",
        "symbols",
        "long",
        "14",
        "12",
      ],
      images: ["/images/lessons/cyber-1/how-long-hack.png"],
    },
    {
      id: 5,
      sectionTitle: "How Hackers Actually Steal Passwords",
      content: [
        "Hackers use many techniques to steal passwords, but the most common method is phishing. Instead of cracking your password, attackers trick you into giving it away through fake login pages, emails, or messages that appear to be from trusted companies.",
        "Other techniques include brute force attacks, where software rapidly guesses passwords, and dictionary attacks, which test commonly used passwords like ‘123456’ or ‘qwerty’. While these methods can be effective, they take time and are less useful against strong passwords.",
        "Another major risk is leaked password databases. If one of your accounts is compromised in a data breach, hackers will try that password on other sites, hoping you’ve reused it. This is why having unique passwords for every account is so important.",
        "Even in the real world, passwords aren’t always safe. Shoulder surfing is when someone watches you type your password—whether it’s a stranger at a café or a colleague at work. Always be aware of your surroundings when entering sensitive information.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 6,
      sectionTitle: "Watch Out for Phishing",
      content: [
        "Even a strong password won’t protect you if you give it away. Phishing attacks trick users into revealing their passwords, often through fake login pages or deceptive emails pretending to be from trusted companies like banks, social media sites, or even your workplace.",
        "Be cautious of emails or messages asking you to ‘confirm your password’ or click a suspicious link. Always check the sender’s email address and look for warning signs like urgent requests, poor grammar, or strange links.",
        "Legitimate companies will never ask for your password via email. When in doubt, always go to the official website directly instead of clicking unknown links. If something feels suspicious, trust your instincts and double-check before entering your credentials.",
        "",
      ],
      question: "How do hackers trick people into revealing passwords?",
      answerKeywords: [
        "email",
        "social",
        "engineering",
        "links",
        "fake",
        "pretending",
        "suspicious",
        "unknown",
        "phishing",
        "login",
        "deceptive",
      ],
    },
    {
      id: 7,
      sectionTitle: "Two-Factor Authentication (2FA)",
      content: [
        "Two-Factor Authentication (2FA) is another safety net. Even if someone knows your password, they can’t log in without the second step—often a code sent to your phone. This doubles your security by requiring something you know (your password) and something you have (your phone).",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 8,
      sectionTitle: "Updating Passwords & Monitoring Breaches",
      content: [
        "Changing your passwords often helps reduce the risk of compromised credentials. If a site you use is hacked, update that password right away.",
        "You can check if your email address has been exposed in a breach by using services like 'Have I Been Pwned' (haveibeenpwned.com). This service only requires your email address to search for any past breaches involving your account. If you see you've been part of a breach, switch to a new, strong password immediately to protect yourself.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 9,
      sectionTitle:
        "Do You Need to Share a Password? Here’s the Safe Way to Do It",
      content: [
        "If you send a password through email, chat, or SMS, it gets stored in the service's database. Even if you delete the message, the provider or hackers with access to the account may still retrieve it.",
        "A safer way is using a password manager like 1Password or Bitwarden, which lets you create a secure, encrypted link that auto-expires after a set time or after being viewed once. Another secure method is using end-to-end encrypted messaging apps like ProtonMail, Telegram, Wickr, or Signal, which allow sending self-destructing messages, ensuring the password isn’t stored permanently. However, note that Telegram's regular chats are not end-to-end encrypted by default.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 10,
      sectionTitle: "The Future of Password Security: Passkeys & Biometrics",
      content: [
        "Passwords can be weak, easy to steal, and hard to remember. To fix this, companies are starting to use passwordless login methods like passkeys and biometrics.",
        "Passkeys let you log in without a password by using a secure key stored on your device, making phishing attacks useless. Biometric logins, like fingerprints or facial recognition, add convenience but aren't foolproof. Some systems can be tricked, so they work best when combined with other security measures.",
        "For the strongest protection, hardware security keys like YubiKey provide an extra layer of security. These physical devices prove your identity, making it nearly impossible for hackers to break in.",
      ],

      question: "",
      answerKeywords: [""],
    },
    {
      id: 11,
      sectionTitle: "Doing Your Best Matters",
      content: [
        "Let’s be real—the average person won’t stick to all these guidelines perfectly or even close, but just knowing them helps. The more you have to lose, like businesses or sensitive accounts, the more crucial strong password practices become.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
