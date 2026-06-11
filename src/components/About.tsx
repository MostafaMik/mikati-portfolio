import { lazy, Suspense } from 'react'
import { useReveal } from '../hooks/useReveal'

const Mika3D = lazy(() => import('./Mika3D'))

const SKILLS = [
  'UX & product design',
  'Interaction design',
  'Visual identity',
  'Design systems',
  'UX research',
  'Prototyping',
  'Front-end (React & three.js)',
]

// EDIT: replace with your real process if it differs
const PROCESS = [
  {
    title: 'Discover',
    body: 'Interviews, analytics and field research. I find the real problem before touching pixels.',
  },
  {
    title: 'Define',
    body: 'Journeys, jobs to be done, and success metrics everyone actually agrees on.',
  },
  {
    title: 'Design',
    body: 'Flows, wireframes, high fidelity UI and prototypes, tested with real users and iterated fast.',
  },
  {
    title: 'Deliver',
    body: 'Specs, tokens and design systems, side by side with engineers until it ships right.',
  },
]

export default function About() {
  const intro = useReveal<HTMLDivElement>()
  const scene = useReveal<HTMLDivElement>(120)
  const process = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="scroll-mt-20 px-5 py-20 sm:px-8 md:px-10 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <div ref={intro.ref} style={intro.style}>
          <p className="text-[15px] text-black/50 sm:text-[17px]">02 / About</p>
          <h2
            className="mt-3 leading-[1.1] text-black"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(30px, 5vw, 54px)' }}
          >
            I design calm, confident products for complicated problems.
          </h2>
          {/* EDIT: your real bio */}
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-black sm:text-[18px]">
            I&rsquo;m M.Mikati, a product designer who started out in graphic design.
            Branding and visual systems taught me hierarchy, precision and taste. UX
            gave that craft a job to do. I made the switch because I wanted my work to
            be used, not just seen.
          </p>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-black/70 sm:text-[18px]">
            I care about the unglamorous parts: edge cases, empty states, what happens
            when things fail. And I prototype in code, so the polish in my files
            survives all the way to production.
          </p>

          <div className="mt-8 flex max-w-xl flex-wrap gap-y-1">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="mx-[0.2em] mb-[0.4em] inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] whitespace-nowrap text-black sm:px-5 sm:text-[15px]"
              >
                {skill}
              </span>
            ))}
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block text-[16px] text-black underline underline-offset-2 transition-opacity hover:opacity-60 sm:text-[18px]"
          >
            Download my résumé &#8599;
          </a>
        </div>

        <div ref={scene.ref} style={scene.style}>
          <div className="h-[380px] overflow-hidden rounded-3xl border border-black/10 bg-[#dfdcd4] sm:h-[480px]">
            <Suspense fallback={<div className="h-full w-full" />}>
              <Mika3D />
            </Suspense>
          </div>
          <p className="mt-3 text-[13px] text-black/50 sm:text-[15px]">
            MIKA keeps an eye on the details. It follows your cursor, and it blinks
            if you click it.
          </p>
        </div>
      </div>

      <div id="process" ref={process.ref} style={process.style} className="scroll-mt-24">
        <p className="mt-24 text-[15px] text-black/50 sm:text-[17px]">03 / How I work</p>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <div key={step.title} className="bg-[#e7e4de] p-6 sm:p-8">
              <p className="text-[15px] text-black/40">0{i + 1}</p>
              <h3
                className="mt-2 text-[20px] text-black sm:text-[22px]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-black/65 sm:text-[15px]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
