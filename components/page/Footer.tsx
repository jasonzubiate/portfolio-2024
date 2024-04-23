"use client";
import { usePathname } from "next/navigation";

export default function () {
  const pathname = usePathname();

  const bgColor = () => {
    if (pathname === "/work") {
      return "light";
    } else {
      return "dark";
    }
  };

  const currentBgColor = bgColor();

  return (
    <footer
      className={`h-[80dvh] lg:h-[70dvh] p-4 lg:p-8 ${
        currentBgColor === "dark" ? "bg-cod-gray" : "  bg-demo-smoke"
      }`}
    >
      <div
        className={`flex flex-col justify-end items-center gap-28 lg:gap-0 h-full rounded-md lg:rounded-lg p-4 lg:p-8 lg:pb-6 relative ${
          currentBgColor === "dark"
            ? "bg-demo-smoke text-cod-gray"
            : "bg-cod-gray text-demo-smoke"
        }`}
      >
        <h2
          id="footer__h2"
          className="flex flex-col uppercase leading-[80%] font-medium lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <span>
            <span className="tiempos italic">©</span>
            <span>Jason</span>
          </span>
          <span>Zubiate.</span>
        </h2>
        <div className="flex flex-col items-center lg:flex-row gap-4 lg:gap-0 lg:justify-between lg:w-full">
          <p className="uppercase hidden lg:flex">
            <span className="tiempos italic">©</span>
            {new Date().getFullYear()}
          </p>
          <a href="jzubiate.dev@gmail.com" className="uppercase text-sm">
            jzubiate.dev@gmail.com
          </a>
          <a
            href="https://www.spinnin.studio"
            className="uppercase text-sm"
            target="_blank"
          >
            spinnin
          </a>{" "}
          <a
            href="https://www.linkedin.com/jasonzubiate"
            target="_blank"
            className="uppercase text-sm"
          >
            linkedin{" "}
          </a>
          <a
            href="https://www.instagram.com/jasonzubiate"
            target="_blank"
            className="uppercase text-sm"
          >
            instagram{" "}
          </a>
        </div>
        <p className="uppercase lg:hidden">
          <span className="tiempos italic">©</span>
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
