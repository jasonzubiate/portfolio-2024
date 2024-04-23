"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GeistMono } from "geist/font/mono";
import img from "@/public/img/memoji.png";
import { getLocalTime, renderWeatherIcon } from "@/utils";
import CustomButton from "../button/CustomButton";
import { MenuButton } from "../button";
import { motion } from "framer-motion";

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
  const [modal, setModal] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

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

  function renderIcon() {
    const hour = new Date().getHours();
    const icon = null;
    if (hour >= 22 || hour < 5) {
      return <span className="text-sm">🌙</span>;
    } else {
      return <span className="text-sm">{renderWeatherIcon()}</span>;
    }
  }

  return (
    <header className="fixed z-50 flex justify-between items-center w-full p-8">
      <Link href={"/"}>
        <Image src={img} alt="Jason Zubiate" height={54} width={54} />
      </Link>
      <div className="flex items-center gap-20">
        <div className="flex gap-16">
          <div className="flex gap-3 items-center">
            <div className="w-1 h-1 bg-lime-green rounded-full animate-ping"></div>
            <p
              className={`${GeistMono.className} hero__status uppercase font-light`}
            >
              Open for full-time positions
            </p>
          </div>
          <div className="flex gap-2 items-center">
            {/* {renderIcon()} */}
            <p className={`${GeistMono.className} hero__status uppercase`}>
             🌤️ LA {time}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <CustomButton
            title="Contact"
            color="white"
            onClick={() => setModal(true)}
            icon
          />
          <div className="relative">
            <motion.div
              className="h-[400px] w-[300px] bg-demo-smoke rounded-xl"
              variants={variants}
              animate={isMenuActive ? "open" : "closed"}
              initial="closed"
            >
              {/* <p>Menu</p>
              <Link rel="stylesheet" href="/about" className="menu-link">
                About
              </Link>
              <Link rel="stylesheet" href="/music" className="menu-link">
                Tunes
              </Link>
              <Link rel="stylesheet" href="/contact" className="menu-link">
                Contact
              </Link>
              <Link rel="stylesheet" href="/resume" className="menu-link">
                Resume
              </Link> */}
            </motion.div>
            <MenuButton setIsMenuActive={setIsMenuActive} />
          </div>
        </div>
      </div>
    </header>
  );
}
