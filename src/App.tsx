import { useState } from 'react'
import { EnvelopeOverlay } from './components/envelope/EnvelopeOverlay'
import { Navigation } from './components/layout/Navigation'
import { Hero } from './components/sections/Hero'
import { Details } from './components/sections/Details'
import { FAQ } from './components/sections/FAQ'
import { RSVP } from './components/sections/RSVP'
import { Footer } from './components/layout/Footer'
import { motion } from 'framer-motion'

export default function App() {
  const [envelopeDone, setEnvelopeDone] = useState(false)

  return (
    <div className="min-h-screen bg-cream">
      {!envelopeDone && <EnvelopeOverlay onComplete={() => setEnvelopeDone(true)} />}

      {envelopeDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Navigation />
          <main>
            <Hero />
            <Details />
            <FAQ />
            <RSVP />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  )
}
