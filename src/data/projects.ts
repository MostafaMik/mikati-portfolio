// ============================================================
// Your three projects. The structure is final but the copy is
// a first draft: replace details marked EDIT with the real
// story, tools and numbers from each project when ready.
// Never ship a metric you can't back up.
// ============================================================

export type Project = {
  id: string
  index: string
  title: string
  tagline: string
  year: string
  role: string
  tags: string[]
  tools: string[]
  accent: string
  link?: string
  overview: string
  challenge: string
  approach: string[]
  outcome: string
  stats: { value: string; label: string }[]
}

export const projects: Project[] = [
  {
    id: 'burj',
    index: '01',
    title: 'Burj Khalifa',
    tagline: 'A scroll powered descent down the tallest tower on earth',
    year: '2026',
    role: 'Design & development',
    tags: ['3D web', 'three.js', 'Interactive'],
    tools: ['Figma', 'three.js', 'React'],
    accent: '#c3ad82',
    link: 'https://burj-wedge.vercel.app/',
    overview:
      'A web experience built around a photoreal 3D model of the Burj Khalifa. The scrollbar becomes a camera dolly: you start at the spire and descend all 828 meters, orbiting the tower as you go, before slipping through a window into a video walkthrough. Designed and built solo.',
    challenge:
      'Skyscraper pages usually flatten the one thing that makes the building special: its scale. The challenge was to make 828 meters feel physical inside a browser window, and to keep the whole ride smooth on an average laptop.',
    approach: [
      'Treated the page as one continuous camera move instead of a stack of sections, storyboarded before any code.',
      'Drove the descent with scroll, with a live altitude readout tracking every meter from spire to street.',
      'Tuned the lighting, atmosphere and camera sway so the tower reads clearly at every altitude.',
      'Ended the descent by pushing through a window into a scroll scrubbed video, so the story continues inside.',
    ],
    outcome:
      'A piece that shows my full range in one place: art direction, interaction design and an AI assisted build I deployed live.',
    stats: [
      { value: '828m', label: 'of scroll driven descent' },
      { value: '3D', label: 'photoreal WebGL tower' },
      { value: 'Solo', label: 'designed and built' },
    ],
  },
  {
    id: 'precis',
    index: '02',
    title: 'Precis',
    tagline: 'An AI summarizer that gives you back your reading time',
    year: '2026',
    role: 'Product design',
    tags: ['AI', 'App', 'Productivity'],
    tools: ['Figma'], // EDIT: your real toolchain
    accent: '#8d9bb4',
    overview:
      'Precis turns long articles, reports and documents into clean, trustworthy summaries. I designed the product end to end, from the reading experience to the way the AI shows what it kept and what it cut.',
    challenge:
      'A summary is only useful if you trust it. Most AI reading tools feel like a black box, so people end up rereading the source anyway. The design had to earn trust, not just save time.',
    approach: [
      'Mapped how people actually skim long documents and where they stop trusting a summary.',
      'Gave every summary visible structure, so each claim links back to the passage it came from.',
      'Kept controls simple: one dial from headline to deep dive instead of a wall of settings.',
      'Tested tone and length options with real readers and cut everything they ignored.',
    ],
    outcome:
      'A reading tool that feels calm instead of clever, where the AI shows its work and then stays out of the way.',
    stats: [
      { value: 'AI', label: 'LLM powered summaries' },
      { value: '1 dial', label: 'from headline to deep dive' },
      { value: 'Mobile', label: 'designed mobile first' },
    ],
  },
  {
    id: 'authoria',
    index: '03',
    title: 'Authoria',
    tagline: 'An AI for novelists that never writes a word, only asks sharper questions',
    year: '2026',
    role: 'Concept & product design',
    tags: ['AI', 'Writing app', 'Concept'],
    tools: ['Figma'], // EDIT: your real toolchain
    accent: '#9d8fa6',
    overview:
      'Authoria is a writing app for fiction authors. Writers draft their novel inside it, chapter by chapter, while AI agents read everything and surface the gaps in the story: a fear with no origin, a world with no texture, an ending that has not been earned. The twist is what the AI never does. It never writes a single word. Its only output is questions.',
    challenge:
      'Every AI writing tool races to generate text, which is exactly what serious novelists do not want. The design problem was the opposite of autocomplete: how do you build an AI that holds back, reads deeply, and helps an author think without ever touching their voice?',
    approach: [
      'Built the questioning around two lenses: a craft methodology (the Architect for cause and effect, the Gardener for character psychology) and literary masters (Balzac for physical and social detail, Proust for emotional depth, Dickens for unearned endings), each grounded in research into how the real author actually worked.',
      'Designed the writing surface to disappear: serif typography, generous margins, no distractions, while questions collect quietly on a notepad until the writer is ready for them.',
      'Made the questioning a ritual, not a feature. One question fills the screen like a spotlight, the writer answers by voice or text, and every answer flows into a living Character Bible.',
      'Used silence as the signal no other tool gives: when the agents run out of questions, the screen goes quiet, telling the writer their planning is deep enough to go write.',
      'Extended it to a mobile Walk and Talk mode that turns spoken thoughts into new questions, plus pacing goals that default off, with no streaks and no guilt.',
    ],
    outcome:
      'The AI reads everything the author writes, including the manuscript, yet generates nothing: not one word, not one suggestion, not one autocomplete. The voice stays entirely the author\'s own. Every other AI tool answers your questions. Authoria is the first that asks better ones.',
    stats: [
      { value: '0', label: 'words written by the AI' },
      { value: 'Masters', label: 'Balzac, Proust, Dickens lenses' },
      { value: 'Concept', label: 'course project' },
    ],
  },
]
