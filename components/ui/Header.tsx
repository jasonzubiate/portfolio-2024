"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GeistMono } from "geist/font/mono";
import memoji from "@/public/img/memoji.png";
import memoji2 from "@/public/img/memoji-1.png";
import { getLocalTime, renderWeatherIcon } from "@/utils";
import { MenuButton } from "../button";

import ContactModal from "../feature/ContactModal";
import { LuArrowUpRight } from "react-icons/lu";
import { usePathname } from "next/navigation";
import Menu from "./Menu";

const variants = {
  open: {
    width: 300,
    height: 400,
  },
  closed: {
    width: 48,
    height: 48,
  },
};

export default function Header() {
  const [time, setTime] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const pathname = usePathname();
  let currentIcon = memoji;

  useEffect(() => {
    function updateLocalTime() {
      setTime(getLocalTime());
    }
    updateLocalTime();
    const intervalId = setInterval(updateLocalTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const bgColor = () => {
    if (pathname === "/work") {
      currentIcon = memoji2;
      return "light";
    } else {
      currentIcon = memoji;
      return "dark";
    }
  };

  const currentBgColor = bgColor();

  return (
    <header className="fixed z-50 flex justify-between items-center w-full p-8">
      <ContactModal visible={isModalVisible} toggleModal={setIsModalVisible} />

      <Link href={"/"}>
        <Image src={currentIcon} alt="Jason Zubiate" height={54} width={54} />
      </Link>
      <div className="flex items-center gap-16">
        <div className="flex gap-16">
          <div className="flex gap-2 items-center">
            <div className="w-1 h-1 bg-lime-green rounded-full animate-ping"></div>
            <p
              className={`${
                GeistMono.className
              } header__info uppercase font-light ${
                currentBgColor === "dark" ? "text-demo-smoke" : "text-cod-gray"
              }`}
            >
              Open for full-time positions
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p
              className={`${
                GeistMono.className
              } header__info uppercase font-light ${
                currentBgColor === "dark" ? "text-demo-smoke" : "text-cod-gray"
              }`}
            >
              🌤️ LA {time}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setIsModalVisible(true)}
            className={`flex gap-1 items-center py-2 px-4 uppercase rounded-md lg:rounded-lg text-sm transition-colors duration-200 ${
              currentBgColor === "light"
                ? "text-demo-smoke bg-cod-gray"
                : "text-cod-gray bg-demo-smoke hover:bg-demo-hover"
            }`}
          >
            Contact
            <LuArrowUpRight size={18} className="text-trace-ash" />
          </button>
          <div className="relative">
            {/* <Menu isMenuActive={isMenuActive} /> */}
            <MenuButton setIsMenuActive={setIsMenuActive} />
          </div>
        </div>
      </div>
    </header>
  );
}
