import { useState } from 'react'
import { projects, type Project } from '../data/projects'
import { useReveal } from '../hooks/useReveal'
import Visual from './Visual'

function Row({
  project,
  delay,
  onOpen,
  onHover,
  onMove,
  onLeave,
}: {
  project: Project
  delay: number
  onOpen: () => void
  onHover: () => void
  onMove: (x: number, y: number) => void
  onLeave: () => void
}) {
  const reveal = useReveal<HTMLButtonElement>(delay)

  return (
    <button
      ref={reveal.ref}
      type="button"
      onClick={onOpen}
      onMouseEnter={onHover}
      onMouseMove={(e) => onMove(e.clientX, e.clientY)}
      onMouseLeave={onLeave}
      className="group block w-full border-t border-black/15 py-6 text-left sm:py-8"
      style={reveal.style}
    >
      <div className="flex items-baseline gap-4 sm:gap-8">
        <span className="text-[15px] text-black/40 sm:text-[17px]">{project.index}</span>
        <div className="min-w-0 flex-1">
          <h3
            className="leading-[1.05] text-black transition-transform duration-300 group-hover:translate-x-2"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 6.5vw, 68px)' }}
          >
            {project.title}
          </h3>
          <p className="mt-1 text-[15px] text-black/55 sm:text-[17px]">{project.tagline}</p>
        </div>
        <div className="hidden shrink-0 flex-col items-end gap-1 sm:flex">
          <span className="text-[15px] text-black/55">{project.tags.join(' · ')}</span>
          <span className="text-[15px] text-black/40">{project.year}</span>
        </div>
        <span
          className="shrink-0 text-[22px] text-black/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black sm:text-[28px]"
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
  const [preview, setPreview] = useState<Project | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  return (
    <section id="work" className="scroll-mt-20 px-5 py-20 sm:px-8 md:px-10 md:py-28">
      <div ref={header.ref} style={header.style} className="mb-10 sm:mb-14">
        <p className="text-[15px] text-black/50 sm:text-[17px]">01 / Selected work</p>
        <p className="mt-3 max-w-xl text-black" style={{ fontSize: 'clamp(18px, 3vw, 26px)', lineHeight: 1.35 }}>
          Three projects spanning 3D web, AI tools and B2B SaaS.
          Click in for the full story.
        </p>
      </div>

      <div className="border-b border-black/15">
        {projects.map((project, i) => (
          <Row
            key={project.id}
            project={project}
            delay={i * 70}
            onOpen={() => onOpen(project.id)}
            onHover={() => setPreview(project)}
            onMove={(x, y) => setPos({ x, y })}
            onLeave={() => setPreview(null)}
          />
        ))}
      </div>

      {/* floating preview card that follows the cursor (desktop hover only) */}
      <div
        className="pointer-events-none fixed z-[5] hidden h-[200px] w-[300px] overflow-hidden rounded-xl border border-black/10 shadow-2xl transition-opacity duration-200 md:block"
        style={{
          left: pos.x + 28,
          top: pos.y - 100,
          opacity: preview ? 1 : 0,
        }}
      >
        {preview && <Visual project={preview} size="card" />}
      </div>
    </section>
  )
}
