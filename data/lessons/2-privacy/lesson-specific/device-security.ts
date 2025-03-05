import { CourseInfo } from "@/constants/course-info";

const LessonData = {
  courseNr: CourseInfo.Privacy.courseNr,
  lessonsOverviewUrl: CourseInfo.Privacy.path,
  sections: [
    {
      id: 1,
      sectionTitle: "What Is Device & App Privacy?",
      content: [
        "Device and app privacy refers to the protection of your personal information on your devices (like smartphones, tablets, and computers) and apps you use. This includes keeping your data safe from unauthorized access, tracking, or sharing. It’s important to understand how apps and devices collect and use your data so you can make informed decisions about your privacy settings and online behavior.",
        "With the rise of mobile devices and IoT devices, privacy is more important than ever. These devices are constantly collecting data about you, such as your location, browsing habits, and even your personal preferences. Understanding device and app privacy helps you protect yourself from potential privacy invasions and security breaches.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 2,
      sectionTitle: "Mobile Device Privacy & Security",
      content: [
        "Mobile devices, like smartphones and tablets, are used for much more than communication today. They store sensitive data such as emails, photos, passwords, and financial information. Because mobile devices are always connected to the internet, they can be vulnerable to hacking, malware, and unauthorized data collection.",
        "To enhance your mobile privacy and security, use features like app permissions, strong passwords, and enable two-factor authentication (2FA) when available. Be cautious about the apps you download, as some may track your behavior or contain security vulnerabilities.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 3,
      sectionTitle: "IoT (Internet of Things) Privacy & Security",
      content: [
        "IoT devices are physical objects connected to the internet, such as smart home devices, wearable technology, and even smart refrigerators. While these devices offer convenience, they can also pose privacy and security risks if not properly secured.",
        "Many IoT devices collect data about your habits, preferences, and even personal health information. Without proper security settings, hackers can exploit vulnerabilities in these devices to gain unauthorized access to your personal data or even control the devices remotely.",
        "To protect your privacy with IoT devices, make sure they are configured securely. Change default passwords, regularly update software and firmware, and limit data sharing to only what's necessary. Additionally, consider isolating your IoT devices on a separate network to reduce the risk of compromising other devices on your home network.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 4,
      sectionTitle: "Operating System Security (OS Security)",
      content: [
        "Your operating system (OS) is the backbone of your device, responsible for managing all of its hardware and software. Whether you're using Windows, macOS, Android, or iOS, your OS plays a critical role in protecting your personal data from threats.",
        "Keeping your operating system up to date with the latest security patches is one of the most important steps in protecting your device. OS updates often include security fixes that close vulnerabilities that hackers can exploit.",
        "You should also enable built-in security features such as firewalls, biometric security (fingerprint or facial recognition), and encryption. Regularly check and manage app permissions to ensure apps are not accessing unnecessary data or features on your device.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 5,
      sectionTitle: "How to Protect Your Data on Devices & Apps",
      content: [
        "There are several steps you can take to enhance your privacy and security on mobile devices, IoT devices, and operating systems.",
        "1.Use Strong Passwords and Two-Factor Authentication (2FA: Always use strong, unique passwords for each account and enable 2FA when possible. This adds an extra layer of security.",
        "2.Review App Permission: Regularly check what data and features your apps have access to. Limit permissions to only what's necessary for the app to function.",
        "3.Keep Software and Apps Update: Ensure that your device’s operating system and apps are up to date with the latest security patches.",
        "4.Use Encryption: Enable encryption on your devices to protect data stored on them. This prevents unauthorized users from accessing your information.",
        "5.Avoid Public Wi-Fi for Sensitive Transaction: Public Wi-Fi networks are often insecure. Avoid making financial transactions or entering sensitive information when connected to public Wi-Fi.",
        "6.Be Careful with IoT Device: Ensure your IoT devices are secure, update their software, and change default passwords to prevent hackers from gaining access to them.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 6,
      sectionTitle: "Common Privacy Issues and How to Avoid Them",
      content: [
        "There are several common privacy issues that can arise with mobile, IoT, and OS devices. Understanding them and knowing how to avoid them can help protect your personal information.",
        "1.Location Trackin: Many apps track your location for various purposes. Always review location permissions and disable location tracking when not necessary.",
        "2.Unsecured Connection: Using unsecured Wi-Fi networks or not using a VPN while browsing can expose your data to hackers. Always use a secure connection, especially when accessing sensitive information.",
        "3.Invasive Ads and Trackin: Some apps and websites track your behavior and show you targeted ads. Consider using privacy-focused browsers or apps that block tracking.",
        "4. Weak Security on IoT Devices: Many IoT devices have weak default security settings, making them vulnerable to hacking. For example, smart home devices like cameras or smart speakers often come with generic default passwords (like 'admin' or '12345'), which are easy for hackers to guess. Always change the default passwords to something more secure, and update the device software regularly to ensure you're protected against known vulnerabilities.",
      ],
      question: "",
      answerKeywords: [""],
    },
    {
      id: 7,
      sectionTitle: "What to Do If Your Phone Is Stolen or Lost",
      content: [
        "Losing your phone or having it stolen can be a security nightmare, but acting quickly can help minimize the damage. Follow these steps to secure your data and protect your information.",
        "1. Lock your phone remotely: If you have 'Find My iPhone' (for iOS) or 'Find My Device' (for Android) enabled, use these services to lock your phone remotely. This will prevent unauthorized access to your device. If the thief has turned off your Wi-Fi or the phone is offline, this step may not be immediately effective.",
        "2. Track the device: If location tracking is enabled and the phone is online, try to locate it. However, if the phone is offline or the thief has disabled location services, you might not be able to track it. In such cases, avoid attempting to recover the phone yourself and contact local authorities.",
        "3. Contact the police: If your phone is stolen, it's important to file a police report right away. Provide your device's IMEI or serial number to assist law enforcement in tracking the phone.",
        "4. Change your passwords and log out: Immediately change the passwords for your most important accounts, like email, banking, and social media. If you're already logged in to these services on the phone, changing the password will not log you out. In this case, many services (like Google, Facebook, and email providers) allow you to remotely log out of all active sessions from their settings or security options. You can usually do this from another device, which will force any logged-in sessions to expire, even if the thief still has access to your phone. Make sure to change the passwords to accounts that store sensitive information, like banking apps, too.",
        "5. Enable two-factor authentication (2FA): If you haven’t already, enable 2FA on your accounts. This adds an extra layer of security, making it harder for anyone to access your accounts even with your password.",
        "6. Report the theft to your mobile carrier: Notify your mobile carrier and report the theft. They can suspend your account to prevent unauthorized use. If you use mobile payment services, inform the service providers as well.",
        "7. Wipe your data: If you're unable to recover your phone or it's not online, use the remote wipe feature on iOS or Android to erase all your personal data from the device. This is especially important if you store sensitive information on your phone.",
        "8. Monitor your accounts: Keep an eye on your accounts for unusual activity, especially for financial accounts, and immediately report any suspicious transactions. Look for signs of misuse and be vigilant about your security.",
        "For businesses: If a work phone or device is stolen, it's important to take extra steps to protect company data. Immediately notify your company's IT department or security team so they can secure any sensitive data and remotely wipe the device. If the employee had access to company accounts, the IT team should change the employee’s login credentials and notify colleagues who may be affected. Additionally, reach out to coworkers or clients who may have been in contact with the stolen device to assess any potential risks.",
      ],
      question: "",
      answerKeywords: [""],
    },
  ],
};

export default LessonData;
