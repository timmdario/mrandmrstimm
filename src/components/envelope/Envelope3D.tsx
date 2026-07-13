import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function Envelope3D() {
  const init = useRef(false)

  useEffect(() => {
    if (init.current) return
    init.current = true

    // Initial states
    gsap.set('.env-logo', { opacity: 0, y: -15 })
    gsap.set('.env-closed-img', { opacity: 1, scale: 1 })
    gsap.set('.env-open-img', { opacity: 0, scale: 1.02 })
    gsap.set('.env-seal-overlay', { scale: 1, rotation: 0, opacity: 1 })
    gsap.set('.env-hint', { opacity: 0, y: 8 })

    const tl = gsap.timeline({ delay: 0.3 })

    tl.to('.env-logo', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' })
    tl.to('.env-hint', { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
  }, [])

  const base = import.meta.env.BASE_URL

  return (
    <div className="relative" style={{ width: 500, height: 400 }}>
      {/* Logo above envelope */}
      <img
        src={`${base}assets/logo.png`}
        alt="Malika & Dario"
        className="env-logo absolute z-10"
        style={{
          top: -25,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 100,
          filter: 'drop-shadow(0 2px 8px rgba(107,87,64,0.15))',
        }}
      />

      {/* Closed envelope (PNG) - visible initially */}
      <img
        src={`${base}assets/Letter_Closed.png`}
        alt="Briefumschlag"
        className="env-closed-img absolute z-20 pointer-events-none select-none"
        style={{
          top: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: 500,
          filter: 'drop-shadow(0 15px 40px rgba(90,64,48,0.25))',
        }}
        draggable={false}
      />

      {/* Wax seal overlay - animated on click to "break" */}
      <div
        className="env-seal-overlay absolute z-30 pointer-events-none"
        style={{
          top: '55%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <svg viewBox="0 0 70 70" width="70" height="70">
          <defs>
            <radialGradient id="sealG" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#D4725F" />
              <stop offset="25%" stopColor="#C45C4A" />
              <stop offset="55%" stopColor="#A04030" />
              <stop offset="80%" stopColor="#7A2E20" />
              <stop offset="100%" stopColor="#5A1E10" />
            </radialGradient>
          </defs>
          <circle cx="35" cy="35" r="33" fill="url(#sealG)" stroke="rgba(90,30,16,0.3)" strokeWidth="0.5" />
          <circle cx="35" cy="35" r="28" fill="none" stroke="rgba(255,200,180,0.2)" strokeWidth="1.5" />
          <circle cx="35" cy="35" r="22" fill="none" stroke="rgba(255,200,180,0.12)" strokeWidth="0.8" />
          <circle cx="29" cy="29" r="9" fill="rgba(255,220,200,0.08)" />
          <text x="35" y="33" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" fontWeight="700" fill="rgba(255,215,195,0.9)" letterSpacing="1">
            M<tspan fontStyle="italic" fontSize="10">&amp;</tspan>D
          </text>
        </svg>
      </div>

      {/* Open envelope (PNG) - hidden, shown after click */}
      <img
        src={`${base}assets/Letter_Open.png`}
        alt=""
        className="env-open-img absolute z-20 pointer-events-none select-none"
        style={{
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '108%',
          maxWidth: 540,
          filter: 'drop-shadow(0 12px 35px rgba(90,64,48,0.2))',
        }}
        draggable={false}
      />

      {/* Petals container */}
      <div
        id="petals-container"
        className="absolute pointer-events-none z-50"
        style={{ top: '40%', left: '50%', width: 0, height: 0 }}
      />
    </div>
  )
}
