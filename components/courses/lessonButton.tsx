import Link from "next/link";

type Lesson = {
  lessonName: string;
  link: string;
};

export function LessonButton({ lessonName, link }: Lesson) {
  return (
    <Link href={link}>
      <button
        className="btn-custom-primary-reverse mt-6 hover:bg-blue-500"
        aria-label=""
      >
        {lessonName}
      </button>
    </Link>
  );
}
