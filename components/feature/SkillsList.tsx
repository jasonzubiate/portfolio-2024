export default function SkillsList() {
  return (
    <ul>
      <li className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-between py-12 border-t border-clay-toff">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-48">
          <p>01.</p>
          <h3 className="flex flex-col">
            <span className="text-5xl text-[86px] uppercase leading-[100%]">
              stellar
            </span>
            <span className="text-5xl text-[86px] leading-[100%]">
              <span className="tiempos italic">design</span>
              <span>.</span>
            </span>
          </h3>
        </div>
        <div className="flex flex-col gap-6 w-4/12">
          <h4>Great products begin with exceptional design.</h4>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-clay-toff">Web Design</p>
              <p className="text-clay-toff">Motion Design</p>
              <p className="text-clay-toff">Typography</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-clay-toff">Prototyping</p>
              <p className="text-clay-toff">Interaction Design</p>
              <p className="text-clay-toff">Design Systems</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-clay-toff">Figma</p>
              <p className="text-clay-toff">UX Design</p>
              <p className="text-clay-toff">Brand Identity</p>
            </div>
          </div>
        </div>
      </li>
      <li className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-between py-12 border-t border-clay-toff">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-48">
          <p>02.</p>
          <h3 className="flex flex-col">
            <span className="text-5xl text-[86px] uppercase leading-[100%]">
              modern
            </span>
            <span className="text-5xl text-[86px] leading-[100%]">
              <span className="tiempos italic">development</span>
              <span>.</span>
            </span>
          </h3>
        </div>
        <div className="flex flex-col gap-6 w-4/12">
          <h4>To make good sh*t you&apos;ve got to use good sh*t.</h4>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-clay-toff">React</p>
              <p className="text-clay-toff">Next.js</p>
              <p className="text-clay-toff">HTML & CSS</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-clay-toff">Python</p>
              <p className="text-clay-toff">PostgreSQL</p>
              <p className="text-clay-toff">MongoDB</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-clay-toff">Prisma</p>
              <p className="text-clay-toff">Subabase</p>
              <p className="text-clay-toff">Payload CMS</p>
            </div>
          </div>
        </div>
      </li>
      <li className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-between py-12 border-y border-clay-toff">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-48">
          <p>03.</p>
          <h3 className="flex flex-col">
            <span className="text-5xl text-[86px] uppercase leading-[90%]">
              dynamic
            </span>
            <span className="text-5xl text-[86px] leading-[90%]">
              <span className="tiempos italic">teammate</span>
              <span>.</span>
            </span>
          </h3>
        </div>
        <div className="flex flex-col gap-6 w-4/12">
          <h4>I work great with others, but can product on my own.</h4>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-clay-toff">Communication</p>
              <p className="text-clay-toff">Creativity</p>
              <p className="text-clay-toff">Agile</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-clay-toff">Adaptability</p>
              <p className="text-clay-toff">Leadership</p>
              <p className="text-clay-toff">Creativity</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-clay-toff">Design Sensibility</p>
              <p className="text-clay-toff">Problem Solving</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
