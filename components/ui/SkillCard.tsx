"use client";
import { Skill } from "@/types";

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div
      id={skill.name}
      className="flex items-start flex-col gap border-t border-clay-toff py-16 lg:py-28 last:border-b gap-4 lg:gap-0"
    ></div>
  );
}
