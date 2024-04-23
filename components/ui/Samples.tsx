"use client";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import useDimensions from "@/hooks/useDimensions";

const images = [
  "hollywood.jpg",
  "hollywood.jpg",
  "hollywood.jpg",
  "hollywood.jpg",
  "hollywood.jpg",
  "hollywood.jpg",
  "hollywood.jpg",
];

export default function Samples() {
  const galleryRef = useRef(null);
  const { width, height } = useDimensions();
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  // Updated transformations for the new height
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2.7]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 4.4]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.6]);

  return (
    <section id="samples">
      <div
        ref={galleryRef}
        className="h-[270vh] bg-trace-ash flex flex-row gap-[2vw] box-border overflow-hidden"
      >
        <Column images={[images[5], images[2], images[2]]} y={y1} />
        <Column images={[images[3], images[1], images[0]]} y={y2} />
        {width > 640 && (
          <Column images={[images[6], images[0], images[4]]} y={y3} />
        )}
      </div>
    </section>
  );
}

function Column({ images, y = 0 }: any) {
  return (
    <motion.div
      style={{ y }}
      className="gallery-column h-full flex flex-col gap-[2vw] w-1/3 sm:min-w-[250px] relative"
    >
      {images.map((src: string, index: number) => (
        <a
          href="https://instagram.com/spinnin.studio"
          target="_blank"
          key={index}
          className="w-full h-full rounded-md lg:rounded-lg overflow-hidden relative"
        >
          <Image
            src={`/img/${src}`}
            alt={src}
            fill
            className="object-cover object-top pointer-events-none"
          />
        </a>
      ))}
    </motion.div>
  );
}
