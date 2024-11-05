import { LessonButton } from "@/components/courses/lessonButton";
import LessonBox from "@/components/courses/lessonBox";
import ProgressBar from "@/components/courses/progressBar";

export default async function Basics1() {
  return (
    <>
      <ProgressBar amountOfLessons={15} />

      <div className="flex justify-center text-3xl my-10 font-bold">
        Cybersecurity Basics 1
      </div>

      {/* First Box */}
      <div className="flex justify-center mb-12">
        <LessonBox isSubscribed={true} overlayImage="/logo.svg">
          {/* Top level (single button) */}
          <div className="flex justify-center mb-4">
            <LessonButton
              lessonName="Passwords: How Long Does It Take to Hack?"
              link="/courses/basics-1/password1"
            />
          </div>

          {/* Second level (two buttons side by side) */}
          <div className="flex justify-center gap-8 mb-4">
            <LessonButton
              lessonName="Public Wi-Fi: A Target for Hackers"
              link="/courses/basics-1/password2"
            />
            <LessonButton
              lessonName="Social Engineering: Manipulating Trust"
              link="/courses/basics-1/password3"
            />
          </div>

          {/* Third level (two buttons side by side) */}
          <div className="flex justify-center gap-4 mb-4">
            <LessonButton
              lessonName="Phishing Scams: Recognizing the Threat"
              link="/courses/basics-1/password4"
            />
          </div>

          {/* Fourth level (one button) */}
          <div className="flex justify-center mb-4">
            <LessonButton
              lessonName="Malware: Understanding the Basics"
              link="/courses/basics-1/password5"
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
              link="/courses/basics-1/ransomware"
            />
          </div>

          {/* Second level (two buttons side by side) */}
          <div className="flex justify-center gap-8 mb-4">
            <LessonButton
              lessonName="VPNs: Secure Your Internet Connection"
              link="/courses/basics-1/vpn"
            />
            <LessonButton
              lessonName="Data Breaches: What You Need to Know"
              link="/courses/basics-1/data-breach"
            />
          </div>

          {/* Third level (one button) */}
          <div className="flex justify-center mb-4">
            <LessonButton
              lessonName="Secure Password Management"
              link="/courses/basics-1/password-management"
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
              link="/courses/basics-1/two-factor-auth"
            />
          </div>

          {/* Second level (two buttons side by side) */}
          <div className="flex justify-center gap-8 mb-4">
            <LessonButton
              lessonName="Cybersecurity Best Practices"
              link="/courses/basics-1/best-practices"
            />
            <LessonButton
              lessonName="Identifying Phishing Attempts"
              link="/courses/basics-1/phishing-identification"
            />
          </div>

          {/* Third level (one button) */}
          <div className="flex justify-center mb-4">
            <LessonButton
              lessonName="Understanding Firewalls"
              link="/courses/basics-1/firewalls"
            />
          </div>
        </LessonBox>
      </div>
    </>
  );
}
