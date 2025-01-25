import LessonClient from "./LessonClient";
import { redirectIfNotSubscribed } from "@/utils/supabase/subscription";

export default async function LessonPage({
  params,
}: {
  params: { course: string; lesson: string };
}) {
  // Perform subscription check server-side
  await redirectIfNotSubscribed();

  // Pass courseSlug and lesson to the client-side component
  return <LessonClient courseSlug={params.course} lesson={params.lesson} />;
}
