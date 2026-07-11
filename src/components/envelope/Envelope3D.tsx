import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { wedding } from '../../data/wedding'

export function Envelope3D() {
  const init = useRef(false)

  useEffect(() => {
    if (init.current) return
    init.current = true

    // Initial states
    gsap.set('.env-logo', { opacity: 0, y: -15 })
    gsap.set('.envelope-closed', { opacity: 0, scale: 0.88 })
    gsap.set('.envelope-open', { opacity: 0 })
    gsap.set('.envelope-seal', { scale: 0, rotation: -120 })
    gsap.set('.envelope-letter-img', { opacity: 0, y: 0, scale: 1 })
    gsap.set('.env-hint', { opacity: 0, y: 8 })
    gsap.set('.seal-frag', { opacity: 0, scale: 0 })
    gsap.set('.envelope-scene', { opacity: 0 })

    const tl = gsap.timeline({ delay: 0.3 })

    // Scene fade in
    tl.to('.envelope-scene', { opacity: 1, duration: 0.3 })

    // Logo
    tl.to('.env-logo', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' })

    // Closed envelope scales in with bounce
    tl.to('.envelope-closed', {
      opacity: 1,
      scale: 1,
      duration: 0.9,
      ease: 'back.out(1.2)',
    }, '-=0.3')

    // Wax seal appears with elastic
    tl.to('.envelope-seal', {
      scale: 1,
      rotation: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.45)',
    }, '-=0.3')

    // Hint text
    tl.to('.env-hint', { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
  }, [])

  const base = import.meta.env.BASE_URL

  return (
    <div className="envelope-scene relative" style={{ width: 420, height: 420 }}>
      {/* Logo */}
      <img
        src={`${base}assets/logo.png`}
        alt="Malika & Dario"
        className="env-logo absolute z-10"
        style={{
          top: -20,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 120,
          filter: 'drop-shadow(0 2px 6px rgba(107,87,64,0.15))',
        }}
      />

      {/* Letter that rises out */}
      <div
        className="envelope-letter-img absolute z-20"
        style={{
          top: 160,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 310,
          opacity: 0,
        }}
      >
        <div
          className="rounded-sm p-5 text-center"
          style={{
            background: 'linear-gradient(180deg, #FFFEF9 0%, #FFF9F0 40%, #FFF5E8 100%)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.12), inset 0 0 30px rgba(212,165,116,0.04)',
            border: '1px solid rgba(200,180,150,0.25)',
          }}
        >
          <div
            className="absolute rounded-sm pointer-events-none"
            style={{ top: 6, left: 6, right: 6, bottom: 6, border: '1px solid rgba(212,165,116,0.1)' }}
          />
          <p className="font-body text-xs italic text-warm-gray-light tracking-wide mb-1 relative z-10">
            Ihr seid herzlich eingeladen zur Hochzeit von
          </p>
          <h1
            className="font-script text-3xl text-charcoal my-0.5 relative z-10"
            style={{ textShadow: '0 1px 0 rgba(255,255,255,0.5)' }}
          >
            {wedding.couple.fullName}
          </h1>
          <div className="text-gold text-base my-0.5 relative z-10">✿</div>
          <p className="font-heading text-sm text-amber tracking-[3px] font-medium relative z-10">
            {wedding.date.display}
          </p>
        </div>
      </div>

      {/* Closed envelope */}
      <img
        src={`${base}assets/envelope-closed.svg`}
        alt="Briefumschlag"
        className="envelope-closed absolute z-30 pointer-events-none"
        style={{
          top: 50,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 380,
          filter: 'drop-shadow(0 15px 35px rgba(90,64,48,0.25))',
        }}
      />

      {/* Open envelope (hidden initially) */}
      <img
        src={`${base}assets/envelope-open.svg`}
        alt="Geöffneter Briefumschlag"
        className="envelope-open absolute z-25 pointer-events-none"
        style={{
          top: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 380,
          opacity: 0,
          filter: 'drop-shadow(0 12px 30px rgba(90,64,48,0.2))',
        }}
      />

      {/* Wax seal overlay (positioned on closed envelope) */}
      <div
        className="envelope-seal absolute z-40 cursor-pointer"
        style={{
          top: 210,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 60,
          height: 60,
        }}
      >
        <svg viewBox="0 0 60 60" width="60" height="60">
          <defs>
            <radialGradient id="sealG" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#D4725F" />
              <stop offset="25%" stopColor="#C45C4A" />
              <stop offset="55%" stopColor="#A04030" />
              <stop offset="80%" stopColor="#7A2E20" />
              <stop offset="100%" stopColor="#5A1E10" />
            </radialGradient>
          </defs>
          <circle cx="30" cy="30" r="28" fill="url(#sealG)" stroke="rgba(90,30,16,0.3)" strokeWidth="0.5" />
          <circle cx="30" cy="30" r="24" fill="none" stroke="rgba(255,200,180,0.2)" strokeWidth="1.5" />
          <circle cx="30" cy="30" r="19" fill="none" stroke="rgba(255,200,180,0.12)" strokeWidth="0.8" />
          <circle cx="25" cy="25" r="8" fill="rgba(255,220,200,0.08)" />
          <text x="30" y="28" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fontWeight="700" fill="rgba(255,215,195,0.9)" letterSpacing="1">
            M<tspan fontStyle="italic" fontSize="9">&amp;</tspan>D
          </text>
          <ellipse cx="31" cy="52" rx="24" ry="4" fill="rgba(90,30,16,0.1)" />
        </svg>
      </div>

      {/* Seal fragments */}
      {[
        { w: 10, h: 8, top: 215, left: 150, r: 15 },
        { w: 8, h: 9, top: 225, left: 245, r: -20 },
        { w: 9, h: 7, top: 235, left: 195, r: 30 },
        { w: 7, h: 7, top: 210, left: 220, r: -10 },
        { w: 6, h: 5, top: 240, left: 170, r: 45 },
      ].map((f, i) => (
        <div
          key={i}
          className="seal-frag absolute z-41 pointer-events-none"
          style={{
            top: f.top,
            left: f.left,
            width: f.w,
            height: f.h,
            background: 'radial-gradient(circle, #C45C4A, #7A2E20)',
            borderRadius: '30% 60% 40% 50%',
            transform: `rotate(${f.r}deg)`,
          }}
        />
      ))}

      {/* Petals container */}
      <div
        id="petals-container"
        className="absolute pointer-events-none z-50"
        style={{ top: '50%', left: '50%', width: 0, height: 0 }}
      />
    </div>
  )
}
