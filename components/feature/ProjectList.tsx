import { projects } from "@/data";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectList() {
  return (
    <ul className="flex flex-col gap-8">
      {projects.map((project, index) => (
        <li key={index}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
