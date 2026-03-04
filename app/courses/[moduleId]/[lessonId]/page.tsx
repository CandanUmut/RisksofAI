import { notFound } from "next/navigation";
import { modules } from "@/lib/courses";
import LessonClient from "./LessonClient";

export async function generateStaticParams() {
  return modules.flatMap((module) =>
    module.lessons.map((lesson) => ({
      moduleId: module.id,
      lessonId: lesson.id,
    }))
  );
}

interface Props {
  params: Promise<{ moduleId: string; lessonId: string }>;
}

export default async function LessonPage({ params }: Props) {
  const { moduleId, lessonId } = await params;
  const module = modules.find((m) => m.id === moduleId);
  const lesson = module?.lessons.find((l) => l.id === lessonId);

  if (!module || !lesson) notFound();

  return (
    <LessonClient
      module={module}
      lesson={lesson}
      moduleId={moduleId}
      lessonId={lessonId}
    />
  );
}
