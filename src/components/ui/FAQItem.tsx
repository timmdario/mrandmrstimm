import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItemProps {
  question: string
  answer: string
  index: number
}

export function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="rounded-xl overflow-hidden bg-cream/90 backdrop-blur-sm border border-ivory/30 shadow-sm"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center text-left bg-transparent hover:bg-cream-warm/60 transition-colors duration-300 cursor-pointer"
      >
        <span className="font-heading text-lg text-charcoal font-medium pr-4">{question}</span>
        <motion.span
          className="text-gold text-2xl flex-shrink-0 ml-4"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="px-6 pb-5 text-warm-gray leading-relaxed"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
