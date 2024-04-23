"use client";
import { useRef, Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";

export default function MenuButton({
  setIsMenuActive,
}: {
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const bgColor = () => {
    if (pathname === "/work") {
      return "light";
    } else {
      return "dark";
    }
  };

  const currentBgColor = bgColor();

  return (
    <button
      id="menu__button"
      className={`flex items-center justify-center w-12 h-12 rounded-lg ${
        currentBgColor === "dark" ? "bg-demo-smoke" : "bg-cod-gray"
      }`}
      onClick={() => setIsMenuActive}
    >
      <div className="flex flex-col gap-1">
        <div
          ref={ref1}
          className={`menu-bar-top w-5 h-[2px] transition-all duration-500 rounded-full ${
            currentBgColor === "dark" ? "bg-cod-gray" : "bg-demo-smoke"
          }`}
        ></div>
        <div
          ref={ref2}
          className={`menu-bar-bottom w-5 h-[2px] transition-all duration-500 rounded-full  ${
            currentBgColor === "dark" ? "bg-cod-gray" : "bg-demo-smoke"
          }`}
        ></div>
      </div>
    </button>
  );
}
