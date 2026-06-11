import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { CheckIcon, CopyIcon } from './icons'
import { CONTACT_EMAIL } from './Hero'

// EDIT: point these at your real profiles
const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mmikati' },
  { label: 'Dribbble', href: 'https://dribbble.com/mmikati' },
  { label: 'Behance', href: 'https://www.behance.net/mmikati' },
  { label: 'GitHub', href: 'https://github.com/mmikati' },
]

function localTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export default function Contact() {
  const reveal = useReveal<HTMLDivElement>()
  const [copied, setCopied] = useState(false)
  const [time, setTime] = useState(localTime)

  useEffect(() => {
    const interval = window.setInterval(() => setTime(localTime()), 30_000)
    return () => window.clearInterval(interval)
  }, [])

  const copyEmail = () => {
    navigator.clipboard
      .writeText(CONTACT_EMAIL)
      .then(() => {
        setCopied(true)
        window.setTimeout(() => setCopied(false), 1600)
      })
      .catch(() => {})
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#0d0d0c] px-5 pt-24 pb-8 text-[#e9e6e0] sm:px-8 md:px-10 md:pt-32"
    >
      <div ref={reveal.ref} style={reveal.style}>
        <p className="text-[15px] text-white/50 sm:text-[17px]">04 / Contact</p>
        <h2
          className="mt-4 max-w-4xl leading-[1.02]"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(44px, 9vw, 110px)' }}
        >
          Let&rsquo;s make something people remember.
        </h2>
        <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
          I&rsquo;m open to UX/UI and product design roles. If you&rsquo;re hiring, or
          just want to talk shop, my inbox is open.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-y-1">
          <button
            type="button"
            onClick={copyEmail}
            className="mx-[0.2em] mb-[0.4em] inline-flex items-center justify-center gap-2 rounded-full border border-white bg-transparent px-4 py-[0.3em] text-[13px] whitespace-nowrap text-white transition-colors duration-200 hover:bg-white hover:text-black sm:gap-3 sm:px-5 sm:text-[15px]"
          >
            <span>
              Reach me:{' '}
              <span className="underline underline-offset-1">{CONTACT_EMAIL}</span>
            </span>
            {copied ? <CheckIcon /> : <CopyIcon />}
          </button>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mx-[0.2em] mb-[0.4em] inline-flex items-center justify-center rounded-full border border-white/15 bg-white px-4 py-[0.3em] text-[13px] whitespace-nowrap text-black transition-colors duration-200 hover:bg-transparent hover:text-white sm:px-5 sm:text-[15px]"
          >
            Or open your mail app &#8599;
          </a>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-[16px] text-white/70 underline-offset-2 transition-colors hover:text-white hover:underline sm:text-[18px]"
            >
              {social.label} &#8599;
            </a>
          ))}
        </div>
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-5 text-[13px] text-white/45 sm:text-[14px]">
        <span>&copy; 2026 M.Mikati. Designed and built by me.</span>
        <span>Local time {time}</span>
        <a href="#top" className="transition-colors hover:text-white">
          Back to top &#8593;
        </a>
      </div>
    </section>
  )
}
