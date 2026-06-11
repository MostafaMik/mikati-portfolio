import { useEffect, useRef, useState, type CSSProperties } from 'react'

// Fade-in + slide-up when the element first scrolls into view.
export function useReveal<T extends HTMLElement>(delayMs = 0) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(24px)',
    transition: `opacity 0.6s ease ${delayMs}ms, transform 0.6s ease ${delayMs}ms`,
  }

  return { ref, style }
}
