import { useEffect, useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'
import { CheckIcon, CopyIcon } from './icons'

export const CONTACT_EMAIL = 'hello@mmikati.co'

const TYPEWRITER_TEXT =
  'Glad you stopped in. Good taste tends to find us. Now, here’s what I’ve been building.'

const HERO_LINKS = [
  { label: 'See selected work', href: '#work' },
  { label: 'About me', href: '#about' },
  { label: 'How I work', href: '#process' },
  { label: 'Download résumé', href: '/resume.pdf', external: true },
]

const PILL_CLASSES =
  'mx-[0.2em] mb-[0.4em] inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] whitespace-nowrap text-black transition-colors duration-200 hover:bg-black hover:text-white sm:px-5 sm:text-[15px]'

export default function Hero() {
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT)
  const [pillsVisible, setPillsVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => setPillsVisible(true), 400)
    return () => window.clearTimeout(timeout)
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
      id="top"
      className="relative z-[1] flex h-screen flex-col justify-end overflow-hidden px-5 pb-12 sm:px-8 md:justify-center md:px-10 md:pb-0"
    >
      <div className="relative z-10 max-w-xl">
        <div
          className="pointer-events-none mb-5 select-none sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
            color: '#000',
            filter: 'blur(4px)',
          }}
        >
          Hey there, meet MIKA,
          <br />
          the digital double of M.Mikati, product designer
        </div>

        <p
          className="mb-5 text-black sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
            fontWeight: 400,
            minHeight: 54,
          }}
        >
          {displayed}
          {!done && (
            <span className="cursor-blink ml-[2px] inline-block h-[1.1em] w-[2px] bg-black align-middle" />
          )}
        </p>

        <div
          className="flex flex-wrap gap-y-1"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {HERO_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className={PILL_CLASSES}
            >
              {link.label}
            </a>
          ))}
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
        </div>
      </div>
    </section>
  )
}
