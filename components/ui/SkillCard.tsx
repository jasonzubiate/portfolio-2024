"use client";
import { Skill } from "@/types";

export default function SkillCard({ skill }: { skill: Skill }) {
  // const columns = [];
  // for (let i = 0; i < skill.examples.length; i += 4) {
  //   columns.push(skill.examples.slice(i, i + 4));
  // }
  return (
    <div
      id={skill.name}
      className="flex items-start flex-col gap border-t border-clay-toff py-16 lg:py-28 last:border-b gap-4 lg:gap-0"
    >
     
    </div>
  );
}

{/* <div className="flex flex-col gap-4 w-full">
<h3 className="text-4xl font-light">{skill.name}</h3>
<div className="flex flex-col md:flex-row md:justify-between w-full">
  <p className="2xl:text-lg text-clay-toff font-light md:w-4/12">
    {skill.description}
  </p>
  <ul className="hidden md:flex gap-16 w-6/12">
    {columns.map((column, columnIndex) => (
      <div key={columnIndex} className="flex flex-col gap-2">
        {column.map((example, exampleIndex) => (
          <li
            key={exampleIndex}
            className="2xl:text-lg font-light text-nowrap w-48 2lg:w-56"
          >
            {example}
          </li>
        ))}
      </div>
    ))}
  </ul>
  <ul className="flex flex-col gap-2 md:hidden p-6 rounded-xl bg-[#292929] my-6">
    {skill.examples.map((skill, index) => (
      <li key={index} className="font-extralight">
        {skill}
      </li>
    ))}
  </ul>
</div>
</div>
<button className="text-sm xl:text-base 2xl:text-lg font-light py-3 px-6 rounded-full uppercase border border-clay-toff hover:bg-demo-smoke hover:text-cod-gray hover:border-demo-smoke transition-colors duration-300">
Contact me
</button> */}