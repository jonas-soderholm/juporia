import LessonClient from "@/components/lessons/LessonClient";
import { getUserAuth } from "@/utils/user-actions/get-user";
import { isSubscribedNew } from "@/utils/user-actions/subscription";
import { redirect } from "next/navigation";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ course: string; lesson: string }>; // Explicit Promise type
}) {
  // Await params to extract course and lesson
  const { course, lesson } = await params;
  const user = await getUserAuth();
  const subscribed = await isSubscribedNew(user.email || "");

  // Perform subscription check
  if (!subscribed.isSubscribed || !user.id) {
    redirect("/sign-in");
  }

  // Return the client component
  return <LessonClient courseSlug={course} lesson={lesson} />;
}
