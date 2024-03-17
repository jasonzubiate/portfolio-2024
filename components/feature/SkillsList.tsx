import { skills } from "@/data";
import { SkillCard } from "../ui";

export default function SkillsList() {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>
          <SkillCard skill={skill} />
        </li>
      ))}
    </ul>
  );
}
