import { SectionHeader } from '../ui/SectionHeader'
import { FAQItem } from '../ui/FAQItem'
import { wedding } from '../../data/wedding'

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-6 bg-gradient-to-b from-cream-warm/80 to-cream">
      <SectionHeader title="Häufige Fragen" ornament="✿" />

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {wedding.faq.map((item, i) => (
          <FAQItem key={item.question} question={item.question} answer={item.answer} index={i} />
        ))}
      </div>
    </section>
  )
}
