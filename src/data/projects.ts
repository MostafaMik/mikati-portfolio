// ============================================================
// Your three projects. The structure is final but the copy is
// a first draft: replace details marked EDIT with the real
// story, tools and numbers from each project when ready.
// Keep every claim true to what actually happened.
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
    id: 'designcircle',
    index: '01',
    title: 'Design Circle Community',
    tagline: 'A research led community for creatives, built around mental health and peer exchange',
    year: '2026',
    role: 'UX/UI designer, team project',
    tags: ['UX research', 'Web', 'Team project'],
    tools: ['Figma', 'FigJam', 'WordPress', 'Elementor'],
    accent: '#8fa99a',
    // EDIT: paste your Figma prototype link here as `link:` to show a "View the Figma" button
    overview:
      'Design Circle Community is a website for people in the creative design professions, built around mental health, peer exchange and community. I worked on it in a team and was involved across every phase, from the first research through to the built site.',
    challenge:
      'Creative work can be isolating and quietly hard on mental health, yet the people who feel it rarely have a dedicated, safe place to open up and support each other. The design had to feel warm and calm rather than clinical, and the structure had to match how our audience actually thinks, not how we assumed they do.',
    approach: [
      'Ran the full research loop: defined the target groups, designed and fielded a survey, then turned the results into personas that kept the team honest about who we were building for.',
      'Validated the structure with card sorting and shaped the findings into an information architecture and a clear page hierarchy.',
      'Moved from scribbles to wireframes to an interactive Figma prototype, refining the flows at every step.',
      'Usability tested the prototype, analysed the sessions and evaluated the design against what we learned before committing to the visuals.',
      'Ran an accessibility check, then built the final site in WordPress with Elementor straight from the Figma designs.',
    ],
    outcome:
      'My most complete end to end UX project: a calm, community first website grounded in real research and testing instead of assumptions, and proof that I can carry a product from a blank brief to a finished build inside a team.',
    stats: [
      { value: 'Team', label: 'all phases, end to end' },
      { value: 'Research', label: 'survey, personas, card sorting' },
      { value: 'Tested', label: 'usability tested and iterated' },
    ],
  },
  {
    id: 'authoria',
    index: '02',
    title: 'Authoria',
    tagline: 'An AI for novelists that never writes a word, only asks sharper questions',
    year: '2026',
    role: 'Product design & AI build',
    tags: ['AI', 'Writing app', 'AI-built'],
    tools: ['Figma', 'Claude Code', 'Codex'],
    // EDIT: paste your live Authoria link here as `link:` to show a "View the live site" button
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
      'Designed it in Figma, then built the working app with AI coding tools (Claude Code and Codex), including a mobile Walk and Talk mode that turns spoken thoughts into new questions.',
    ],
    outcome:
      'The AI reads everything the author writes, including the manuscript, yet generates nothing: not one word, not one suggestion, not one autocomplete. The voice stays entirely the author\'s own. Every other AI tool answers your questions. Authoria is the first that asks better ones.',
    stats: [
      { value: '0', label: 'words written by the AI' },
      { value: 'Masters', label: 'Balzac, Proust, Dickens lenses' },
      { value: 'AI-built', label: 'Claude Code and Codex' },
    ],
  },
  {
    id: 'burj',
    index: '03',
    title: 'Burj Khalifa',
    tagline: 'A scroll powered descent down the tallest tower on earth',
    year: '2026',
    role: 'Interaction design & AI build',
    tags: ['3D web', 'three.js', 'Interactive'],
    tools: ['Figma', 'React', 'three.js', 'Claude Code', 'Codex'],
    accent: '#c3ad82',
    link: 'https://burj-wedge.vercel.app/',
    overview:
      'An interactive web experience built around a ready-made 3D model of the Burj Khalifa. The scrollbar becomes a camera dolly: you start at the spire and descend all 828 meters, orbiting the tower, before the camera slips through a window into a short film clip. I designed the journey and built it solo with AI coding tools.',
    challenge:
      'Skyscraper pages usually flatten the one thing that makes the building special: its scale. The challenge was to make 828 meters feel physical inside a browser window, and to keep the whole ride smooth on an average laptop.',
    approach: [
      'Treated the page as one continuous camera move instead of a stack of sections, storyboarded before any code.',
      'Drove the descent with scroll, with a live altitude readout tracking every meter from spire to street.',
      'Art directed the lighting, atmosphere and camera sway so the tower reads clearly at every altitude.',
      'Ended the descent by pushing through a window into a scroll scrubbed clip, so the story continues inside.',
    ],
    outcome:
      'A piece that shows my range in one place: art direction, interaction design and an AI assisted build I deployed live.',
    stats: [
      { value: '828m', label: 'of scroll driven descent' },
      { value: '3D', label: 'real time WebGL scene' },
      { value: 'AI-built', label: 'Claude Code and Codex' },
    ],
  },
]
