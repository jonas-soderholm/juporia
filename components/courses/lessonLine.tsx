import Link from "next/link";

type Lesson = {
  lessonName: string;
  link: string;
};

export function LessonButton({ lessonName, link }: Lesson) {
  return (
    <Link href={link}>
      <button className="btn btn-accent" aria-label="">
        {lessonName}
      </button>
    </Link>
  );
}
