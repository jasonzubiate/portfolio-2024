import { ProjectList } from "../feature";

export default function Work() {
  return (
    <section id="work" className="flex flex-col px-8 py-24 gap-8">
      <h2 className="text-6xl font-medium">Recent Work</h2>
      <ProjectList />
    </section>
  );
}
