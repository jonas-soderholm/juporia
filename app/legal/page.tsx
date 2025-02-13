import TermsSection from "../../components/policies/TermsSection";
import { LogoName } from "@/constants/logo-name";

const termsContent = [
  {
    title: "1. Introduction",
    content: `Welcome to ${LogoName.AppName}. These Terms of Service and Privacy Policy govern your access to and use of our cybersecurity courses and services.`,
  },
  {
    title: "2. Access",
    content:
      "An individual plan grants access for one user for one month. You may also purchase access for others. Access does not automatically renew and must be repurchased after expiration.",
  },
  {
    title: "3. Account & Security",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials and ensuring the security of your account. If you suspect unauthorized access, contact us immediately.",
  },
  {
    title: "4. Intellectual Property",
    content: `All content, materials, and resources provided within ${LogoName.AppName} are owned by us and may not be shared, resold, or redistributed without explicit permission.`,
  },
  {
    title: "5. GDPR & Data Protection",
    content: `As a company operating within the EU, ${LogoName.AppName} complies with the General Data Protection Regulation (GDPR). 
    - We collect only necessary data for account creation and login via OAuth (Google, GitHub) or manual login.
    - No user data is stored beyond what is required for authentication.
    - We do not track, profile, or resell user data.
    - Users can delete their accounts and all associated data at any time in the settings panel.`,
  },
  {
    title: "6. Account Deletion & User Rights",
    content: `You have the right to request data deletion at any time. ${LogoName.AppName} provides a self-service option in settings where users can permanently delete their accounts and all related data. 
    If an account is deleted, all associated course access and data are permanently removed and cannot be recovered.`,
  },
  {
    title: "7. Payment & Refund Policy",
    content: `All payments are final, and we do not offer refunds. However, if you experience any issues with your purchase, please contact us at ${LogoName.supportMail}, and we’ll be happy to assist you.`,
  },
  {
    title: "8. Modifications to Terms",
    content:
      "We reserve the right to update these terms at any time. Continued use of our services after changes implies agreement. We encourage you to review this policy periodically.",
  },
];

export default function Terms() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Content Container */}
      <div className="w-full max-w-2xl rounded-lg p-6 border border-gray-400">
        {/* Header */}
        <div className="flex items-center mb-4 space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#2563EB"
          >
            <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 85-29 163.5T688-214L560-342q-18 11-38.5 16.5T480-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 22-5.5 42.5T618-398l60 60q20-41 31-86t11-92v-189l-240-90-240 90v189q0 121 68 220t172 132q26-8 49.5-20.5T576-214l56 56q-33 27-71.5 47T480-80Zm0-320q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm8-77Z" />
          </svg>
          <span className="text-xl font-bold">Terms & Privacy Policy</span>
        </div>

        {/* Render Terms Sections */}
        {termsContent.map((section, index) => (
          <TermsSection
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </div>
  );
}
