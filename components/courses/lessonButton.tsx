import Link from "next/link";

type Lesson = {
  lessonName: string;
  link: string;
};

export function LessonButton({ lessonName, link }: Lesson) {
  return (
    <Link href={link}>
      <button className="btn-custom-primary-lesson mt-6 hover:border-transparent">
        {lessonName}
      </button>
    </Link>
  );
}
