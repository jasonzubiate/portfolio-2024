"use client";
import { SkillsList } from "../feature";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Skills() {
  const h2Ref = useRef(null);
  const pLine1Ref = useRef(null);
  const pLine2Ref = useRef(null);
  const pLine3Ref = useRef(null);
  const pLine4Ref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(h2Ref.current, {
      scrollTrigger: {
        trigger: h2Ref.current,
        start: "top 80%",
        end: "bottom 60%",
      },
      yPercent: 100,
      duration: 1,
    });

    const lines = [
      pLine1Ref.current,
      pLine2Ref.current,
      pLine3Ref.current,
      pLine4Ref.current,
    ];
    lines.forEach((line) => {
      gsap.from(line, {
        scrollTrigger: {
          trigger: line,
          start: "top 90%", // starts a bit before the line enters the view
        },
        yPercent: 100,
        duration: 0.75,
        delay: 0.1,
      });
    });
  }, []);

  return (
    <section id="skills" className="flex flex-col px-8 py-24 gap-32">
      <div className="flex justify-between w-full">
        <div className="overflow-hidden">
          <h2 ref={h2Ref} id="skills__h2">
            Skill Set
          </h2>
        </div>
        <p id="skills__p" className="font-light w-5/12">
          <span className="overflow-hidden">
            <span ref={pLine1Ref}>
              I am a <span className="tiempos italic">continuous learner</span>{" "}
              who{" "}
            </span>
          </span>
          <span className="overflow-hidden">
            <span ref={pLine2Ref}>
              strives to keep up to date with the latest
            </span>
          </span>
          <span className="overflow-hidden">
            <span ref={pLine3Ref}>
              tech stacks. I thrive when working in challenging environments and
              enjoy
            </span>
          </span>
          <span className="overflow-hidden">
            <span ref={pLine4Ref}> working on meaningful projects.</span>
          </span>
        </p>
      </div>
      <SkillsList />
    </section>
  );
}
