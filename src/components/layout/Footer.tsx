import { wedding } from '../../data/wedding'

export function Footer() {
  return (
    <footer className="py-12 px-6 text-center bg-gradient-to-b from-cream-warm to-ivory/50 border-t border-ivory/40">
      <div className="flex justify-center gap-3 text-gold text-xl mb-4 tracking-[0.3em]">
        ✿ ❁ ✾
      </div>
      <p className="font-heading text-2xl text-charcoal mb-2">{wedding.couple.fullName}</p>
      <p className="text-gold tracking-[3px] font-heading text-lg mb-6">{wedding.date.display}</p>
      <div className="mb-4">
        <a
          href="#willkommen"
          className="text-warm-gray-light text-sm no-underline border-b border-warm-gray-light/30 transition-colors hover:text-charcoal hover:border-charcoal"
        >
          Impressum
        </a>
      </div>
      <p className="text-warm-gray-light text-xs tracking-wider opacity-60">Made by Dario</p>
    </footer>
  )
}
