import { useState } from 'react'
import { projects } from './data/projects'
import BackgroundVideo from './components/BackgroundVideo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import ProjectOverlay from './components/ProjectOverlay'

export default function App() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeIndex = projects.findIndex((p) => p.id === activeId)
  const active = activeIndex >= 0 ? projects[activeIndex] : null
  const next = active ? projects[(activeIndex + 1) % projects.length] : null

  return (
    <>
      <BackgroundVideo />
      <Navbar />
      <Hero />
      {/* opaque content layer that scrolls up over the fixed video */}
      <div className="relative z-[2] bg-[#e7e4de]">
        <Marquee />
        <Work onOpen={setActiveId} />
        <About />
        <Contact />
      </div>
      {active && next && (
        <ProjectOverlay
          project={active}
          nextProject={next}
          onClose={() => setActiveId(null)}
          onNext={() => setActiveId(next.id)}
        />
      )}
    </>
  )
}
