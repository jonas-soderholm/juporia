import Link from "next/link";
import { lessons } from "@/app/public-demo/courses/cybersecurity-basics-1/page";

type Lesson = {
  lessonName: string;
  link: string;
  disabled?: boolean; // Optional disabled prop
  done?: boolean; // Optional done prop
};

export function LessonButton({ lessonName, link, disabled, done }: Lesson) {
  return (
    <div>
      {disabled ? (
        // Render a disabled button without a Link wrapper
        <button
          className={`btn-custom-primary-reverse mt-[-1rem] !bg-gray-800 !text-gray-600 cursor-not-allowed`}
          style={{ pointerEvents: "none" }}
          disabled
        >
          {lessonName}
        </button>
      ) : (
        // Render an enabled button with the Link wrapper
        <Link href={link}>
          <button
            className={`btn-custom-primary-reverse hover:border-transparent mt-[-1rem] ${
              done ? "!bg-gray-200 !text-gray-500" : ""
            }`}
          >
            {lessonName}
          </button>
        </Link>
      )}
    </div>
  );
}
