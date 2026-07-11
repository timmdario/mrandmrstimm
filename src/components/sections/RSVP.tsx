import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { wedding } from '../../data/wedding'

type FormData = {
  name: string
  guests: string
  overnight_friday: string
  overnight_saturday: string
  on_site: string
  breakfast: string
  dietary: string
  message: string
}

export function RSVP() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)

    const form = e.currentTarget
    const fd = new FormData(form)
    const data = Object.fromEntries(fd.entries()) as FormData

    try {
      const { default: emailjs } = await import('@emailjs/browser')
      emailjs.init(wedding.emailjs.publicKey)

      await emailjs.send(wedding.emailjs.serviceId, wedding.emailjs.templateId, {
        name: data.name,
        guests: data.guests,
        overnight_friday: data.overnight_friday,
        overnight_saturday: data.overnight_saturday,
        on_site: data.on_site,
        breakfast: data.breakfast,
        dietary: data.dietary || 'Keine',
        message: data.message || 'Keine Nachricht',
      })

      setSubmitted(true)
    } catch {
      alert('Es ist ein Fehler aufgetreten. Bitte versucht es erneut oder kontaktiert uns direkt.')
    } finally {
      setSending(false)
    }
  }

  const radioGroup = (name: string, labelJa: string, labelNein = 'Nein, danke') => (
    <div className="flex gap-6 flex-wrap mt-2">
      <label className="inline-flex items-center gap-3 cursor-pointer text-warm-gray font-body text-lg">
        <input type="radio" name={name} value="Ja" className="sr-only peer" />
        <span className="w-[18px] h-[18px] min-w-[18px] rounded-full border-2 border-ivory peer-checked:border-gold transition-colors relative">
          <span className="absolute inset-[3px] rounded-full bg-gold scale-0 peer-checked:scale-100 transition-transform" />
        </span>
        <span className="peer-checked:text-charcoal transition-colors">{labelJa}</span>
      </label>
      <label className="inline-flex items-center gap-3 cursor-pointer text-warm-gray font-body text-lg">
        <input type="radio" name={name} value="Nein" defaultChecked className="sr-only peer" />
        <span className="w-[18px] h-[18px] min-w-[18px] rounded-full border-2 border-ivory peer-checked:border-gold transition-colors relative">
          <span className="absolute inset-[3px] rounded-full bg-gold scale-0 peer-checked:scale-100 transition-transform" />
        </span>
        <span className="peer-checked:text-charcoal transition-colors">{labelNein}</span>
      </label>
    </div>
  )

  return (
    <section id="rsvp" className="py-20 px-6 bg-cream">
      <SectionHeader title="Teilnahme bestätigen" ornament="❁" />

      <p className="text-center text-warm-gray-light font-body text-xl italic mb-10 max-w-lg mx-auto">
        {wedding.rsvp.intro}
      </p>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-cream-warm/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(139,115,85,0.08)] border border-ivory/30"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Name */}
            <div className="mb-5">
              <label className="block font-heading text-base font-medium text-charcoal mb-2">Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Dein vollständiger Name"
                className="w-full px-4 py-3 rounded-lg border-2 border-ivory/50 bg-cream/70 font-body text-lg text-charcoal placeholder:text-warm-gray-light/60 focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,169,110,0.15)] transition-all"
              />
            </div>

            {/* Guests */}
            <div className="mb-5">
              <label className="block font-heading text-base font-medium text-charcoal mb-2">Anzahl Gäste (inkl. dir) *</label>
              <input
                type="number"
                name="guests"
                min="1"
                max="10"
                defaultValue="1"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-ivory/50 bg-cream/70 font-body text-lg text-charcoal focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,169,110,0.15)] transition-all"
              />
            </div>

            {/* Overnight Friday */}
            <div className="mb-5">
              <label className="block font-heading text-base font-medium text-charcoal mb-1">Übernachtung Freitag, 29. Mai?</label>
              {radioGroup('overnight_friday', 'Ja, gerne')}
            </div>

            {/* Overnight Saturday */}
            <div className="mb-5">
              <label className="block font-heading text-base font-medium text-charcoal mb-1">Übernachtung Samstag, 30. Mai?</label>
              {radioGroup('overnight_saturday', 'Ja, gerne')}
            </div>

            {/* On-site */}
            <div className="mb-5">
              <label className="block font-heading text-base font-medium text-charcoal mb-1">Übernachtung direkt auf dem Gelände?</label>
              {radioGroup('on_site', 'Ja, auf dem Gelände')}
            </div>

            {/* Breakfast */}
            <div className="mb-5">
              <label className="block font-heading text-base font-medium text-charcoal mb-1">
                Frühstück Sonntag, 31. Mai? <span className="font-body text-sm font-normal text-warm-gray-light italic">(20 € pro Person)</span>
              </label>
              {radioGroup('breakfast', 'Ja, ich bin dabei')}
            </div>

            {/* Dietary */}
            <div className="mb-5">
              <label className="block font-heading text-base font-medium text-charcoal mb-2">Ernährungswünsche / Allergien</label>
              <textarea
                name="dietary"
                rows={3}
                placeholder="Vegetarisch, vegan, Allergien..."
                className="w-full px-4 py-3 rounded-lg border-2 border-ivory/50 bg-cream/70 font-body text-lg text-charcoal placeholder:text-warm-gray-light/60 focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,169,110,0.15)] transition-all resize-none"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block font-heading text-base font-medium text-charcoal mb-2">Nachricht an das Brautpaar</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Eine persönliche Nachricht..."
                className="w-full px-4 py-3 rounded-lg border-2 border-ivory/50 bg-cream/70 font-body text-lg text-charcoal placeholder:text-warm-gray-light/60 focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,169,110,0.15)] transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3.5 rounded-lg font-heading text-lg text-cream bg-gradient-to-r from-warm-gray to-charcoal cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(107,101,96,0.2)] hover:from-amber hover:to-warm-gray active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {sending ? 'Wird gesendet...' : 'Antwort absenden'}
              {!sending && <span className="text-xl">✿</span>}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            className="text-center py-16 max-w-xl mx-auto bg-cream-warm rounded-2xl shadow-sm"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="text-6xl mb-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
            >
              💌
            </motion.div>
            <h3 className="font-heading text-3xl text-charcoal mb-2">Vielen Dank!</h3>
            <p className="text-warm-gray font-body text-xl">Deine Antwort wurde erfolgreich gesendet. Wir freuen uns auf euch!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
