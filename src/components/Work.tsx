import { projects, type Project } from '../data/projects'
import { useReveal } from '../hooks/useReveal'
import Visual from './Visual'

// slow ease-out-expo curve — reads as deliberate and high-end, never snappy
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'
const DUR = '600ms'

function Row({ project, delay, onOpen }: { project: Project; delay: number; onOpen: () => void }) {
  const reveal = useReveal<HTMLButtonElement>(delay)

  return (
    <button
      ref={reveal.ref}
      type="button"
      onClick={onOpen}
      className="group relative block w-full overflow-hidden border-t border-black/15 text-left"
      style={reveal.style}
    >
      {/* accent wash that sweeps up from the baseline on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 transition-transform group-hover:scale-y-100"
        style={{
          transitionDuration: DUR,
          transitionTimingFunction: EASE,
          background: `linear-gradient(180deg, ${project.accent}1f, ${project.accent}08)`,
        }}
      />

      <div className="relative flex items-center gap-5 py-6 sm:gap-8 sm:py-7">
        <span className="text-[15px] tabular-nums text-black/40 sm:text-[17px]">{project.index}</span>

        <div className="min-w-0 flex-1">
          <h3
            className="leading-[1.05] text-black transition-transform group-hover:translate-x-2 sm:group-hover:translate-x-3"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(30px, 6vw, 64px)',
              transitionDuration: DUR,
              transitionTimingFunction: EASE,
            }}
          >
            {project.title}
          </h3>
          <p
            className="mt-1 max-w-md text-[15px] text-black/55 transition-transform group-hover:translate-x-2 sm:text-[17px] sm:group-hover:translate-x-3"
            style={{ transitionDuration: DUR, transitionTimingFunction: EASE }}
          >
            {project.tagline}
          </p>
        </div>

        {/* inline preview anchored to the row — scales in, no cursor chasing */}
        <div className="hidden h-[84px] w-[132px] shrink-0 overflow-hidden rounded-lg lg:block">
          <div
            className="h-full w-full scale-110 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"
            style={{ transitionDuration: DUR, transitionTimingFunction: EASE }}
          >
            <Visual project={project} size="card" />
          </div>
        </div>

        <div className="hidden w-[150px] shrink-0 flex-col items-end gap-1 text-right md:flex">
          <span className="text-[14px] text-black/55">{project.tags.join(' · ')}</span>
          <span className="text-[14px] text-black/40">{project.year}</span>
        </div>

        <span
          className="shrink-0 text-[22px] text-black/30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black sm:text-[28px]"
          style={{ transitionDuration: DUR, transitionTimingFunction: EASE }}
          aria-hidden="true"
        >
          &#8599;
        </span>
      </div>
    </button>
  )
}

export default function Work({ onOpen }: { onOpen: (id: string) => void }) {
  const header = useReveal<HTMLDivElement>()

  return (
    <section id="work" className="scroll-mt-20 px-5 py-20 sm:px-8 md:px-10 md:py-28">
      <div ref={header.ref} style={header.style} className="mb-10 sm:mb-14">
        <p className="text-[15px] text-black/50 sm:text-[17px]">01 / Selected work</p>
        <p className="mt-3 max-w-xl text-black" style={{ fontSize: 'clamp(18px, 3vw, 26px)', lineHeight: 1.35 }}>
          Three projects spanning 3D web, AI tools and B2B SaaS. Click in for the full story.
        </p>
      </div>

      <div className="border-b border-black/15">
        {projects.map((project, i) => (
          <Row key={project.id} project={project} delay={i * 70} onOpen={() => onOpen(project.id)} />
        ))}
      </div>
    </section>
  )
}
