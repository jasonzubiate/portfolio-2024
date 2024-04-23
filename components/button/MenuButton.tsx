"use client";
import { useState, useRef, Dispatch, SetStateAction } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function MenuButton({
  setIsMenuActive,
}: {
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
}) {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  return (
    <button
      id="menu-button"
      className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 rounded-lg bg-demo-smoke"
      onClick={() => setIsMenuActive}
    >
      <div className="flex flex-col gap-1">
        <div
          ref={ref1}
          className="menu-bar-top w-5 h-[2px] bg-cod-gray transition-all duration-500 rounded-full 
"
        ></div>
        <div
          ref={ref2}
          className="menu-bar-bottom w-5 h-[2px] bg-cod-gray transition-all duration-500 rounded-full"
        ></div>
      </div>
    </button>
  );
}
