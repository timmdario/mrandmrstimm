import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  ornament?: string
}

export function SectionHeader({ title, ornament = '✿' }: SectionHeaderProps) {
  return (
    <motion.div
      className="flex items-center justify-center gap-4 mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <span className="text-gold text-xl">{ornament}</span>
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal tracking-wide">
        {title}
      </h2>
      <span className="text-gold text-xl">{ornament}</span>
    </motion.div>
  )
}
