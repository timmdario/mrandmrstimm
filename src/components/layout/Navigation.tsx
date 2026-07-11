import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Willkommen', href: '#willkommen' },
  { label: 'Details', href: '#details' },
  { label: 'FAQ', href: '#faq' },
  { label: 'RSVP', href: '#rsvp' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const navHeight = 80
      const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/92 backdrop-blur-xl shadow-[0_2px_30px_rgba(107,101,96,0.08)]'
          : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#willkommen"
          onClick={(e) => handleClick(e, '#willkommen')}
          className="flex items-center gap-3 no-underline"
        >
          <img src="/assets/logo.png" alt="Malika & Dario" className="h-12 w-auto" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex list-none gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-warm-gray font-body text-lg no-underline relative group transition-colors duration-300 hover:text-charcoal"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
          aria-label="Menü"
        >
          <motion.span
            className="block w-6 h-[2px] bg-charcoal origin-center"
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-charcoal"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-charcoal origin-center"
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden overflow-hidden bg-cream/95 backdrop-blur-xl"
        initial={false}
        animate={mobileOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <ul className="list-none p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-warm-gray font-body text-xl no-underline block py-2 border-b border-ivory/40 transition-colors hover:text-charcoal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  )
}
