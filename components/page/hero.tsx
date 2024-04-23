// Hero.tsx

import Image from "next/image";
import { FaArrowDown } from "react-icons/fa6";
import heroImg from "@/public/img/heroImg.jpg";
import { Marquee } from "../ui";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100dvh] flex flex-col pt-48 gap-16"
    >
      <div className="flex w-full justify-between px-8">
        <div className="flex flex-col items-start gap-8">
          <h1 id="hero__h1" className="leading-none">
            <span className="block">I&apos;m Jason Zubiate</span>
            <span>
              a <span className="tiempos italic">creative developer</span>.
            </span>
          </h1>
          <p id="hero__bio" className="w-2/3">
            I have two years of experience building with{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              className="hover:underline"
            >
              React
            </a>{" "}
            &{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="hover:underline"
            >
              Next.js
            </a>{" "}
            When I&apos;m not creating, I&apos;m producing, at a music event, or
            out with friends.
          </p>
          <button className="text-xs md:text-sm flex gap-2 items-center px-4 py-3 uppercase font-medium rounded-lg bg-demo-smoke hover:bg-demo-hover text-cod-gray transition-all duration-200">
            See work
            <FaArrowDown size={14} />
          </button>
        </div>
        <div className="flex flex-col gap-6 w-5/12">
          <div className="flex flex-col gap-1">
            <h4 className="hero__status uppercase">Now</h4>
            <p className="hero__p text-clay-toff">
              Full-stack engineer @{" "}
              <a
                href="https://www.trackstack.app"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Trackstack
              </a>
            </p>
            <p className="hero__p text-clay-toff">
              Founder & freelance web developer @{" "}
              <a
                href="https://www.spinnin.studio"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Spinnin
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="hero__status uppercase">Previously</h4>
            <p className="hero__p text-clay-toff">
              Machine-learning engineer intern @{" "}
              <a
                href="https://www.obviohealth.com"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                ObvioHealth
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="hero__status uppercase">Based In</h4>
            <p className="hero__p text-clay-toff">Los Angeles, California</p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="hero__status uppercase">Enjoys</h4>
            <p className="hero__p text-clay-toff">
              House music, clothing & technology
            </p>
          </div>
        </div>
      </div>
      <div className="px-8 h-full">
        <div className="relative w-full rounded-2xl h-[200px] md:h-[50dvh] overflow-hidden bg-demo-smoke">
          <Image
            src={heroImg}
            alt="background"
            fill
            priority
            quality={100}
            className="object-cover object-center"
          />
        </div>
      </div>
      <Marquee />
    </section>
  );
}
