import { SkillsList } from "../feature";

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col px-8 py-24 gap-32">
      <div className="flex justify-between w-full">
        <h2 className="font-medium text-[96px]">Skill Set</h2>
        <p className="text-3xl font-light w-5/12">
          I believe I am a continuous learner who strives to keep up to date
          with the latests tech stacks. I thrive when working in challenging
          environments, collaborating with talented individuals or spearheading
          projects.
        </p>
      </div>
      <SkillsList />
    </section>
  );
}
