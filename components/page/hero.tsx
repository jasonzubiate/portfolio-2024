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
        <div className="flex flex-col items-start gap-8 w-5/12">
          <h1 className="text-6xl leading-none">
            <span className="block">I&apos;m Jason Zubiate</span>
            <span>
              a <span className="tiempos">creative developer</span>.
            </span>
          </h1>
          <p className="text-lg font-light w-10/12">
            I have two years of experience building with React & Next.js When
            I&apos;m not creating, I&apos;m producing, at a music event, or
            having a night out with friends.
          </p>
          <button className="flex gap-2 items-center px-4 py-3 uppercase font-medium rounded-lg bg-demo-smoke text-cod-gray ">
            See work
            <FaArrowDown size={16} />
          </button>
        </div>
        <div className="flex flex-col gap-6 mr-[5%]">
          <div className="flex flex-col gap-1">
            <h4 className="uppercase">Now</h4>
            <p className="text-lg text-clay-toff">
              Full-stack engineer @{" "}
              <a
                href="https://www.trackstack.app"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Trackstack
              </a>
            </p>
            <p className="text-lg text-clay-toff">
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
            <h4 className="uppercase">Previously</h4>
            <p className="text-lg text-clay-toff">
              Machine-learning engineer intern @{" "}
              <a
                href="https://www.obviohealth.com/"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                ObvioHealth
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="uppercase">Based In</h4>
            <p className="text-lg text-clay-toff">Los Angeles, California</p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="uppercase">Enjoys</h4>
            <p className="text-lg text-clay-toff">
              Tech house, clothing, graphic design & technology
            </p>
          </div>
        </div>
      </div>
      <div className="px-8 h-full">
        <div className="relative w-full rounded-2xl h-full overflow-hidden">
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
