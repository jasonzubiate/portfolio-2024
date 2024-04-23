import Link from "next/link";
import img from "@/public/img/hollywood.jpg";
import Image from "next/image";
import {
  frontEndSkills,
  backEndSkills,
  databaseSkills,
  concepts,
} from "@/data";

export default function About() {
  return (
    <div
      id="about__page"
      className="flex flex-col gap-32 px-4 lg:px-8 lg:pb-16"
    >
      <div className="flex flex-col pt-44 gap-16">
        <h1 id="about__h1" className="leading-[100%]">
          A creative developer born and raised in sunny{" "}
          <span className="tiempos italic">California</span>.
        </h1>
        <div className="flex justify-between">
          <div className="flex flex-col gap-4 w-2/5">
            <p className="custom__text__xl">
              Modern design is my <span className="tiempos italic">bread</span>{" "}
              and <span className="tiempos italic">butter</span>. When creating,
              I&apos;m either playing Larry June or Tame Impala.
            </p>
            <p className="custom__text__xl">
              I launched my career as a front-end developer in 2022, working
              with a college startup where I honed my skills in{" "}
              <span className="tiempos italic">React</span> and{" "}
              <span className="tiempos italic">Next.js</span>.
            </p>
            <p className="custom__text__xl">
              Currently, I am developing an innovative social tool for music
              artists at Trackstack, running my own{" "}
              <span className="tiempos italic">creative studio</span>, and
              producing house music on Ableton.
            </p>
          </div>
          <div className="w-5/12 relative rounded-md lg:rounded-lg overflow-hidden">
            <Image
              src={img}
              alt="Los Angeles"
              fill
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h4 className="uppercase">Frontend</h4>
          <div className="flex flex-wrap gap-4">
            {frontEndSkills.map((skill, index) => (
              <p
                key={index}
                className="flex px-4 py-2 rounded-md border border-demo-smoke custom__text__xl"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="uppercase">Backend</h4>
          <div className="flex gap-4">
            {backEndSkills.map((skill, index) => (
              <p
                key={index}
                className="flex px-4 py-2 rounded-md border border-demo-smoke custom__text__xl"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="uppercase">Database</h4>
          <div className="flex gap-4">
            {databaseSkills.map((skill, index) => (
              <p
                key={index}
                className="flex px-4 py-2 rounded-md border border-demo-smoke custom__text__xl"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="uppercase">Concepts</h4>
          <div className="flex gap-4">
            {concepts.map((skill, index) => (
              <p
                key={index}
                className="flex px-4 py-2 rounded-md border border-demo-smoke custom__text__xl"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
