import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Résumé', href: '/resume.pdf', external: true },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [overDark, setOverDark] = useState(false)

  // flip the nav to white while the dark contact section sits behind it
  // (observe the top ~90px strip of the viewport, recomputed on resize)
  useEffect(() => {
    const contact = document.getElementById('contact')
    if (!contact) return
    let observer: IntersectionObserver | undefined
    const create = () => {
      observer?.disconnect()
      observer = new IntersectionObserver(
        ([entry]) => setOverDark(entry.isIntersecting),
        { rootMargin: `0px 0px ${90 - window.innerHeight}px 0px`, threshold: 0 },
      )
      observer.observe(contact)
    }
    create()
    window.addEventListener('resize', create)
    return () => {
      window.removeEventListener('resize', create)
      observer?.disconnect()
    }
  }, [])

  const light = overDark && !menuOpen
  const ink = light ? 'text-white' : 'text-black'
  const bar = light ? 'bg-white' : 'bg-black'

  return (
    <>
      <header className="fixed top-0 left-0 z-10 flex w-full items-center justify-between px-5 py-4 transition-colors duration-300 sm:px-8 sm:py-5">
        <a href="#top" className="flex items-center">
          <span
            className={`text-[21px] tracking-tight transition-colors duration-300 sm:text-[26px] ${ink}`}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            M.Mikati&reg;
          </span>
        </a>

        <nav className={`hidden text-[23px] transition-colors duration-300 md:flex ${ink}`}>
          {NAV_LINKS.map((link, i) => (
            <span key={link.label}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
              {i < NAV_LINKS.length - 1 && <span>,&nbsp;</span>}
            </span>
          ))}
        </nav>

        <a
          href="#contact"
          className={`hidden text-[23px] underline underline-offset-2 transition-colors duration-300 hover:opacity-60 md:block ${ink}`}
        >
          Get in touch
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex flex-col gap-[5px] md:hidden"
        >
          <span
            className={`h-[2px] w-6 transition-all duration-300 ${bar} ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-[2px] w-6 transition-all duration-300 ${bar} ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-[2px] w-6 transition-all duration-300 ${bar} ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </header>

      <div
        className="fixed inset-0 z-[9] flex flex-col items-start justify-center gap-8 bg-white/95 px-8 backdrop-blur-sm transition-opacity duration-300 md:hidden"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
            className="text-[32px] font-medium text-black"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="text-[32px] font-medium text-black underline underline-offset-2"
          onClick={() => setMenuOpen(false)}
        >
          Get in touch
        </a>
      </div>
    </>
  )
}
