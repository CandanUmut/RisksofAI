import { notFound } from "next/navigation";
import { modules } from "@/lib/courses";
import ModuleClient from "./ModuleClient";

export async function generateStaticParams() {
  return modules.map((module) => ({
    moduleId: module.id,
  }));
}

interface Props {
  params: Promise<{ moduleId: string }>;
}

export default async function ModulePage({ params }: Props) {
  const { moduleId } = await params;
  const module = modules.find((m) => m.id === moduleId);

  if (!module) notFound();

  return <ModuleClient module={module} />;
}
