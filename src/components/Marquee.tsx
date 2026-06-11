const ITEMS = [
  'Open to UX/UI and product design roles',
  'Product design',
  'Design systems',
  'Visual craft',
  'Prototyping in code',
]

function Strip({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="mx-6 text-[15px] text-black sm:mx-8 sm:text-[17px]">{item}</span>
          <span className="select-none text-[15px] text-black/40 sm:text-[17px]">&middot;</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-black/10 py-4 sm:py-5">
      <div className="marquee-track flex w-max">
        <Strip />
        <Strip ariaHidden />
      </div>
    </div>
  )
}
