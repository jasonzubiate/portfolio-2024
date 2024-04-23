// Marquee.tsx

"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Marquee() {
  gsap.registerPlugin(useGSAP);

  const marqueeRef = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.05 * direction;
    requestAnimationFrame(animation);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom 90%",
        scrub: true,
      },
    });

    tl.to(marqueeRef.current, {
      yPercent: 100, // Adjust this value based on the height of your marquee
      ease: "none",
    });
  }, []);

  return (
    <div ref={marqueeRef} className="slider-container">
      <div ref={slider} className="slider">
        <p ref={firstText}>
          <span>•</span>
          <span>TypeScript</span>
          <span>•</span>
          <span>Full-Stack</span>
          <span>•</span>
          <span>Prisma</span>
          <span>•</span>
          <span>PostgrSQL</span>
          <span>•</span>
          <span>React</span>
          <span>•</span>
          <span>Next.js</span>
          <span>•</span>
          <span>GSAP</span>
          <span>•</span>
          <span>Framer Motion</span>
          <span>•</span>
          <span>Python</span>
          <span>•</span>
          <span>Web Design</span>
          <span>•</span>
          <span className="pr-[1.5vw]">Front-End</span>
        </p>
        <p ref={secondText}>
          <span>•</span>
          <span>TypeScript</span>
          <span>•</span>
          <span>Full-Stack</span>
          <span>•</span>
          <span>Prisma</span>
          <span>•</span>
          <span>PostgrSQL</span>
          <span>•</span>
          <span>React</span>
          <span>•</span>
          <span>Next.js</span>
          <span>•</span>
          <span>GSAP</span>
          <span>•</span>
          <span>Framer Motion</span>
          <span>•</span>
          <span>Python</span>
          <span>•</span>
          <span>Web Design</span>
          <span>•</span>
          <span className="pr-[1.5vw]">Front-End</span>
        </p>
      </div>
    </div>
  );
}

{
  /* <p>•</p>
<p>Next.js</p>
<p>•</p>
<p>TypeScript</p>
<p>•</p>
<p>Full-Stack</p>
<p>•</p>
<p>Prisma</p>
<p>•</p>
<p>PostgrSQL</p>
<p>•</p>
<p>GSAP</p>
<p>•</p>
<p>Python</p>
<p>•</p>
<p>Web Design</p>
<p>•</p>
<p>Front-End</p>
<p>•</p> */
}
