import { CustomButtonProps } from "@/types";

export default function CustomButton({
  title,
  url,
  size = "md",
  color = "black",
  icon,
}: CustomButtonProps) {
  let fontSize;
  switch (size) {
    case "sm":
      fontSize = "text-sm";
      break;
    case "md":
      fontSize = "text-base";
      break;
    case "lg":
      fontSize = "text-lg";
      break;
    default:
      fontSize = "text-base";
      break;
  }

  const textColor = color === "white" ? "text-[#131313]" : "text-[#EFEFEF]";
  const buttonColor = color === "white" ? "bg-[#EFEFEF]" : "bg-[#131313]";

  return (
    <a
      className={`flex items-center gap-1 rounded-lg px-4 py-3 uppercase font-medium cursor-pointer ${buttonColor} ${textColor} ${fontSize}`}
      href={url}
      target="_blank"
    >
      {title}
    </a>
  );
}
