import { SectionHeader } from '../ui/SectionHeader'
import { DetailCard } from '../ui/DetailCard'
import { OrganicDivider } from '../ui/OrganicDivider'
import { wedding } from '../../data/wedding'
import { motion } from 'framer-motion'

export function Details() {
  return (
    <>
      <OrganicDivider color="#F8F5F0" />
      <section id="details" className="py-20 px-6 bg-cream-warm/60">
        <SectionHeader title="Die Details" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {wedding.schedule.map((item, i) => (
            <DetailCard key={item.title} {...item} index={i} />
          ))}
        </div>

        {/* Venue Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {wedding.venueCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-cream/80 backdrop-blur-sm rounded-xl p-7 border border-ivory/30 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(201,169,110,0.1)]"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">{card.icon} {card.title}</h3>
              <div
                className="text-warm-gray leading-relaxed font-body text-lg"
                dangerouslySetInnerHTML={{ __html: card.text }}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <OrganicDivider color="#FAF8F5" flip />
    </>
  )
}
