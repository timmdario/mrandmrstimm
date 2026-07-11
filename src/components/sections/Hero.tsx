import { motion } from 'framer-motion'
import { wedding } from '../../data/wedding'

export function Hero() {
  return (
    <section id="willkommen" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-cream-warm/85 to-cream" />

      {/* Floating botanical elements */}
      <motion.div
        className="absolute text-5xl opacity-10 select-none"
        style={{ top: '18%', left: '8%' }}
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        🌸
      </motion.div>
      <motion.div
        className="absolute text-4xl opacity-10 select-none"
        style={{ top: '25%', right: '10%' }}
        animate={{ y: [0, -12, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        🌺
      </motion.div>
      <motion.div
        className="absolute text-4xl opacity-8 select-none"
        style={{ bottom: '22%', left: '12%' }}
        animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      >
        🌼
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <motion.img
          src={`${import.meta.env.BASE_URL}assets/logo.png`}
          alt="Malika & Dario"
          className="mx-auto mb-6 max-w-[200px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.p
          className="font-body text-xl text-amber font-italic tracking-[3px] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Wir heiraten!
        </motion.p>

        <motion.h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal leading-tight mb-6"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {wedding.couple.bride}{' '}
          <span className="font-script font-normal text-gold text-[0.65em]">&amp;</span>{' '}
          {wedding.couple.groom}
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <span className="text-gold text-2xl">✿</span>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        <motion.p
          className="font-heading text-2xl md:text-3xl text-amber tracking-[4px] mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {wedding.date.display}
        </motion.p>

        <motion.p
          className="font-body text-lg text-warm-gray-light italic max-w-lg mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {wedding.tagline}
        </motion.p>
      </div>
    </section>
  )
}
