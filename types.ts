export type Project = {
  name: string;
  github_url: string;
  live_url: string;
  image: string;
};

export type Skill = {
  name: string;
  description: string;
  examples: string[];
};

export type ProjectCardProps = {
  project: Project;
};

type ButtonSize = "sm" | "md" | "lg";
type ButtonColor = "white" | "black";
type ButtonIcon = true | false;

export type CustomButtonProps = {
  title: string;
  url?: string;
  onClick?: () => void;
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: ButtonIcon;
};
