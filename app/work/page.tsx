"use client";
import { ProjectList } from "@/components/feature";
import Menu from "@/components/ui/Menu";

export default function Work() {
  return (
    <section
      id="about__page"
      className="flex flex-col px-4 lg:px-8 gap-36 bg-demo-smoke"
    >
      <h1 className="mt-44 respira text-[240px] uppercase text-cod-gray">
        My Work
      </h1>

      <ProjectList />
    </section>
  );
}
