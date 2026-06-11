// Generates public/resume.pdf — a placeholder until the real CV replaces it.
// Run: node scripts/make-placeholder-resume.mjs
import { mkdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const lines = [
  ['M. MIKATI', 26],
  ['UX/UI & Product Designer', 14],
  ['hello@mmikati.co', 12],
  ['', 12],
  ['This is a placeholder resume.', 12],
  ['Replace public/resume.pdf with your real CV', 12],
  ['before sharing this portfolio.', 12],
]

let y = 720
let text = ''
for (const [line, size] of lines) {
  if (line) text += `BT /F1 ${size} Tf 72 ${y} Td (${line.replace(/[\\()]/g, (c) => '\\' + c)}) Tj ET\n`
  y -= size * 1.9
}

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  `<< /Length ${text.length} >>\nstream\n${text}endstream`,
]

let pdf = '%PDF-1.4\n'
const offsets = []
objects.forEach((obj, i) => {
  offsets.push(pdf.length)
  pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`
})
const xref = pdf.length
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
pdf += offsets.map((o) => `${String(o).padStart(10, '0')} 00000 n \n`).join('')
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')
mkdirSync(out, { recursive: true })
writeFileSync(join(out, 'resume.pdf'), pdf, 'latin1')
console.log('Wrote', join(out, 'resume.pdf'))
