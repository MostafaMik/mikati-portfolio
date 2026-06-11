import { useEffect, useRef, useState } from 'react'
import { projects, type Project } from '../data/projects'
import Visual from './Visual'

export default function ProjectOverlay({
  project,
  nextProject,
  onClose,
  onNext,
}: {
  project: Project
  nextProject: Project
  onClose: () => void
  onNext: () => void
}) {
  const scroller = useRef<HTMLDivElement>(null)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 })
  }, [project.id])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      ref={scroller}
      className="fixed inset-0 z-40 overflow-y-auto bg-[#eae7e1]"
      style={{
        opacity: entered ? 1 : 0,
        transform: entered ? 'none' : 'translateY(28px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
      }}
    >
      <div className="sticky top-0 z-10 flex items-center justify-between bg-[#eae7e1]/85 px-5 py-4 backdrop-blur-sm sm:px-8">
        <span className="text-[15px] text-black/50">
          {project.index} / {String(projects.length).padStart(2, '0')} &middot; {project.title}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-[0.3em] text-[13px] text-black transition-colors duration-200 hover:bg-black hover:text-white sm:px-5 sm:text-[15px]"
        >
          Close &#10005; <span className="hidden text-black/40 sm:inline">esc</span>
        </button>
      </div>

      <article className="mx-auto max-w-[960px] px-5 pt-8 pb-24 sm:px-8 sm:pt-12">
        <div className="mb-4 flex flex-wrap gap-y-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="mx-[0.2em] mb-[0.4em] inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] whitespace-nowrap text-black sm:text-[15px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1
          className="leading-[1.02] text-black"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(44px, 9vw, 92px)' }}
        >
          {project.title}
        </h1>
        <p className="mt-3 max-w-2xl text-black/60" style={{ fontSize: 'clamp(18px, 3vw, 26px)', lineHeight: 1.35 }}>
          {project.tagline}
        </p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-black bg-black px-5 py-[0.35em] text-[14px] whitespace-nowrap text-white transition-colors duration-200 hover:bg-transparent hover:text-black sm:text-[16px]"
          >
            View the live site &#8599;
          </a>
        )}

        <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-black/15 py-6 sm:grid-cols-3">
          <div>
            <dt className="text-[13px] text-black/45 sm:text-[15px]">Year</dt>
            <dd className="mt-1 text-[15px] text-black sm:text-[17px]">{project.year}</dd>
          </div>
          <div>
            <dt className="text-[13px] text-black/45 sm:text-[15px]">Role</dt>
            <dd className="mt-1 text-[15px] text-black sm:text-[17px]">{project.role}</dd>
          </div>
          <div>
            <dt className="text-[13px] text-black/45 sm:text-[15px]">Tools</dt>
            <dd className="mt-1 text-[15px] text-black sm:text-[17px]">{project.tools.join(', ')}</dd>
          </div>
        </dl>

        <div className="mt-10 aspect-[16/10] overflow-hidden rounded-2xl">
          <Visual project={project} />
        </div>

        <p className="mt-12 max-w-2xl text-black" style={{ fontSize: 'clamp(18px, 2.6vw, 24px)', lineHeight: 1.45 }}>
          {project.overview}
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="mb-3 text-[15px] text-black/50 sm:text-[17px]">The challenge</h2>
            <p className="text-[16px] leading-relaxed text-black sm:text-[18px]">{project.challenge}</p>
          </div>
          <div>
            <h2 className="mb-3 text-[15px] text-black/50 sm:text-[17px]">The approach</h2>
            <ul className="space-y-3">
              {project.approach.map((step) => (
                <li key={step} className="flex gap-3 text-[16px] leading-relaxed text-black sm:text-[18px]">
                  <span className="shrink-0 text-black/40 select-none">&middot;</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="mb-3 text-[15px] text-black/50 sm:text-[17px]">The outcome</h2>
          <p className="max-w-2xl text-[16px] leading-relaxed text-black sm:text-[18px]">{project.outcome}</p>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-3">
            {project.stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 sm:p-8">
                <p
                  className="text-black"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 5vw, 52px)' }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-[14px] text-black/55 sm:text-[15px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 aspect-[16/10] overflow-hidden rounded-2xl">
          <Visual project={project} flip />
        </div>

        <button
          type="button"
          onClick={onNext}
          className="group mt-16 block w-full border-t border-black/15 pt-8 text-left"
        >
          <span className="text-[15px] text-black/50 sm:text-[17px]">Next project</span>
          <span className="mt-2 flex items-baseline justify-between gap-4">
            <span
              className="leading-[1.05] text-black transition-transform duration-300 group-hover:translate-x-2"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 7vw, 72px)' }}
            >
              {nextProject.title}
            </span>
            <span
              className="text-[26px] text-black/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black sm:text-[32px]"
              aria-hidden="true"
            >
              &#8599;
            </span>
          </span>
        </button>
      </article>
    </div>
  )
}
