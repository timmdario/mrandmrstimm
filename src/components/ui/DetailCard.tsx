import { motion } from 'framer-motion'

interface DetailCardProps {
  icon: string
  title: string
  time: string
  place: string
  detail: string
  index: number
}

export function DetailCard({ icon, title, time, place, detail, index }: DetailCardProps) {
  return (
    <motion.div
      className="relative bg-cream-warm/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-ivory/30 transition-all duration-500 group cursor-default"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -6,
        boxShadow: '0 20px 40px rgba(201, 169, 110, 0.12)',
        borderColor: 'rgba(201, 169, 110, 0.3)',
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-gold/3 transition-all duration-500" />
      <div className="relative">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">{title}</h3>
        <p className="font-heading text-lg text-gold font-medium mb-2">{time}</p>
        <p className="text-warm-gray font-medium">{place}</p>
        <p className="text-warm-gray-light text-sm italic mt-1">{detail}</p>
      </div>
    </motion.div>
  )
}
