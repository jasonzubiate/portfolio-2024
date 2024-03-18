import Image from "next/image";
import Link from "next/link";
import img from "@/public/img/jason.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col lg:flex-row lg:h-[100dvh]"
    >
      <div className="relative w-full h-[50vh] lg:h-auto px-4 lg:w-5/12">
        <Image
          src={img}
          alt="Jason Zubiate"
          fill
          quality={100}
          className="object-cover object-center"
        />
      </div>
      <div className="lg:w-7/12 flex flex-col mt-[15%] gap-12 lg:gap-16 px-4 lg:px-8">
        <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row w-full lg:justify-between">
          <h4 className="about-text uppercase text-clay-toff">[About]</h4>
          <div className="flex flex-col gap-8 w-full lg:w-2/3">
            <p className="about-text uppercase">
              I&apos;m Jason, a creative developer living in LA. While I have
              experience in building full-stack applications, my expertise lies
              in front-end development and crafting engaging experiences with my
              design and functionality. Modern design is my bread and butter,
              with a heavy focus in the music and entertainment world.
            </p>
            <p className="about-text uppercase">
              I launched my career in 2022 as a front-end develop at a college
              startup Nutripair, where I honed my skills in React and Next.js. I
              have since been a part of amazing experiences such as contributing
              to a machine learning model that assists with cough diarization
              for ObvioHealth and Hyfe AI.
            </p>
            <p className="about-text uppercase">
              Today I bring a high level of discipline to my role as a
              full-stack engineer and have some fun producing some house tunes.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row w-full lg:justify-between">
          <h4 className="about-text uppercase text-clay-toff">[Contact]</h4>
          <div className="flex w-full lg:w-2/3 gap-12 flex-wrap lg:flex-nowrap mb-32 md:mb-48 lg:mb-0">
            <a
              href="https://www.instagram.com/jason.zubiate"
              target="_blank"
              className="about-text uppercase hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/jasonzubiate/"
              target="_blank"
              className="about-text uppercase hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://wwww.github.com/jason.zubiate"
              target="_blank"
              className="about-text uppercase hover:underline"
            >
              Github
            </a>
            <Link
              href="/resume"
              className="about-text uppercase hover:underline"
            >
              Resume
            </Link>
            <button className="about-text uppercase hover:underline">
              Email
            </button>
          </div>
        </div>
        <h1
          id="about-name"
          className="absolute bottom-0 uppercase tracking-tight"
        >
          Jason Zubiate 2024
        </h1>
      </div>
    </section>
  );
}
