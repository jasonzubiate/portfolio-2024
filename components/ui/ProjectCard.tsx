import { ProjectCardProps } from "@/types";
import CustomButton from "../button/CustomButton";

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      id={project.name}
      className="flex p-4 flex-col justify-between h-[600px] rounded-2xl bg-clay-toff"
    >
      <p className="text-xl uppercase">{project.name}</p>
      <div className="w-full flex justify-end gap-4 font-medium">
        <CustomButton title="Github" size="sm" url={project.github_url} icon />
        <CustomButton
          title="Visit Project"
          size="sm"
          url={project.live_url}
          icon
        />
      </div>
    </div>
  );
}
