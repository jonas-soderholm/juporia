import { LessonButton } from "@/components/courses/LessonButton";
import LessonBox from "@/components/courses/LessonsBox";
import ProgressBar from "@/components/courses/ProgressBar";

// Base url
const BASE_URL = "/public-courses/basics-1";

export default function Basics1() {
  return (
    <>
      <ProgressBar amountOfLessons={15} />

      <div className="flex justify-center text-3xl my-10 font-bold">
        Cybersecurity Basics 1
      </div>

      {/* First Box */}
      <div className="flex justify-center mb-12">
        <LessonBox isSubscribed={true} overlayImage="/logo.svg">
          <div className="flex justify-center mb-4">
            <LessonButton
              lessonName="Passwords: How Long Does It Take to Hack?"
              link={`${BASE_URL}/password`}
            />
          </div>

          {/* Second level (two buttons side by side) */}
          <div className="flex justify-center gap-8 mb-4">
            <LessonButton
              lessonName="Public Wi-Fi: A Target for Hackers"
              link={`${BASE_URL}/password2`}
            />
            <LessonButton
              lessonName="Social Engineering: Manipulating Trust"
              link={`${BASE_URL}/password3`}
            />
          </div>

          {/* Third level (two buttons side by side) */}
          <div className="flex justify-center gap-4 mb-4">
            <LessonButton
              lessonName="Phishing Scams: Recognizing the Threat"
              link={`${BASE_URL}/password4`}
            />
          </div>

          {/* Fourth level (one button)  */}
          <div className="flex justify-center mb-4">
            <LessonButton
              lessonName="Malware: Understanding the Basics"
              link={`${BASE_URL}/password5`}
            />
          </div>
        </LessonBox>
      </div>

      {/* Second Box */}
      <div className="flex justify-center mb-12">
        <LessonBox isSubscribed={false} overlayImage="/logo.svg">
          {/* Top level (single button) */}
          <div className="flex justify-center mb-4">
            <LessonButton
              lessonName="Ransomware: How to Protect Yourself"
              link={`${BASE_URL}/ransomware`}
            />
          </div>

          {/* Second level (two buttons side by side) */}
          <div className="flex justify-center gap-8 mb-4">
            <LessonButton
              lessonName="VPNs: Secure Your Internet Connection"
              link={`${BASE_URL}/vpn`}
            />
            <LessonButton
              lessonName="Data Breaches: What You Need to Know"
              link={`${BASE_URL}/data-breach`}
            />
          </div>

          {/* Third level (one button) */}
          <div className="flex justify-center mb-4">
            <LessonButton
              lessonName="Secure Password Management"
              link={`${BASE_URL}/password-management`}
            />
          </div>
        </LessonBox>
      </div>

      {/* Third Box */}
      <div className="flex justify-center">
        <LessonBox isSubscribed={false} overlayImage="/logo.svg">
          {/* Top level (single button) */}
          <div className="flex justify-center mb-4">
            <LessonButton
              lessonName="Two-Factor Authentication: Why It Matters"
              link={`${BASE_URL}/two-factor-auth`}
            />
          </div>

          {/* Second level (two buttons side by side) */}
          <div className="flex justify-center gap-8 mb-4">
            <LessonButton
              lessonName="Cybersecurity Best Practices"
              link={`${BASE_URL}/best-practices`}
            />
            <LessonButton
              lessonName="Identifying Phishing Attempts"
              link={`${BASE_URL}/phishing-identification`}
            />
          </div>

          {/* Third level (one button) */}
          <div className="flex justify-center mb-4">
            <LessonButton
              lessonName="Understanding Firewalls"
              link={`${BASE_URL}/firewalls`}
            />
          </div>
        </LessonBox>
      </div>
    </>
  );
}
