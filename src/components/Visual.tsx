import type { Project } from '../data/projects'

const GRAIN =
  `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>")`

// Placeholder cover art rendered from the project's accent color.
// Swap this for real screenshots by replacing <Visual /> usages with <img />.
export default function Visual({
  project,
  size = 'hero',
  flip = false,
  className = '',
}: {
  project: Project
  size?: 'hero' | 'card'
  flip?: boolean
  className?: string
}) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(${flip ? '315deg' : '135deg'}, ${project.accent} 0%, #e7e4de 145%)`,
      }}
    >
      <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: GRAIN }} />

      {/* abstract product-UI card */}
      <div
        className="absolute top-1/2 left-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white/85 p-[4%] shadow-2xl"
        style={{ aspectRatio: '16 / 10' }}
      >
        <div className="mb-[6%] flex gap-[2%]">
          <span className="h-[6px] w-[6px] rounded-full bg-black/20" />
          <span className="h-[6px] w-[6px] rounded-full bg-black/20" />
          <span className="h-[6px] w-[6px] rounded-full bg-black/20" />
        </div>
        <div className="mb-[5%] h-[12%] w-[55%] rounded-full bg-black/15" />
        <div className="mb-[4%] h-[8%] w-[80%] rounded-full bg-black/8" />
        <div className="mb-[4%] h-[8%] w-[70%] rounded-full bg-black/8" />
        <div className="h-[18%] w-[34%] rounded-full" style={{ background: project.accent }} />
      </div>

      <span className="absolute top-4 left-5 text-[13px] tracking-wide text-black/60">
        {project.index} / {project.title}
      </span>
      <span
        className="absolute -right-1 -bottom-3 leading-none text-black/15 select-none"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: size === 'hero' ? 'clamp(90px, 16vw, 220px)' : '84px',
        }}
      >
        {project.index}
      </span>
    </div>
  )
}
