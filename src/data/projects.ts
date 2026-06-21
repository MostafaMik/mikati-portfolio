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
    tagline: 'Finding where AI should help authors, and where it should step back',
    year: '2026',
    role: 'Product design',
    tags: ['AI', 'Writing', 'App'],
    tools: ['Figma'], // EDIT: your real toolchain
    accent: '#9d8fa6',
    // EDIT: tighten this with the real problem, users and findings from your course brief
    overview:
      'Authoria is a concept app exploring how AI can support authors without taking over their voice. The brief was open ended: work out where in the writing process AI genuinely helps, then design an experience around exactly those moments.',
    challenge:
      'Most AI writing tools try to write for you, which is the one thing serious authors do not want. The real question was narrower and harder: where does a writer actually want a second pair of hands, and where do they want to be left completely alone?',
    approach: [
      'Mapped the writing journey to find the moments where authors get stuck, rather than the moments that are easy to automate.',
      'Framed AI as suggestions the author always stays in control of, never as words written on their behalf.',
      'Kept the writing surface calm and distraction free, with assistance a keystroke away instead of in your face.',
      'Prototyped the core flows in Figma and pressure tested them against real writing tasks.', // EDIT
    ],
    outcome:
      'A concept for an AI writing companion that respects authorship: it helps you think, structure and get unstuck, while the words stay yours.',
    stats: [
      { value: 'AI', label: 'companion for authors' },
      { value: 'Concept', label: 'course project' },
      { value: 'Figma', label: 'designed and prototyped' },
    ],
  },
]
