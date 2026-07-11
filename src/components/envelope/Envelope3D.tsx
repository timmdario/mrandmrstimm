import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { wedding } from '../../data/wedding'

export function Envelope3D() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    gsap.set('.env-logo', { opacity: 0, y: -10 })
    gsap.set('.envelope-3d', { scale: 0.85, opacity: 0, rotateX: 5 })
    gsap.set('.flap-left', { rotationY: 0 })
    gsap.set('.flap-right', { rotationY: 0 })
    gsap.set('.flap-top', { rotationX: 0 })
    gsap.set('.wax-seal', { scale: 0, rotation: -180 })
    gsap.set('.envelope-letter', { y: 0, opacity: 0, scale: 1 })
    gsap.set('.env-hint', { opacity: 0, y: 10 })
    gsap.set('.envelope-light', { opacity: 0 })
    gsap.set('.seal-fragment', { opacity: 1, scale: 1, x: 0, y: 0, rotation: 0 })

    const tl = gsap.timeline({ delay: 0.4 })

    tl.to('.env-logo', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })

    tl.to('.envelope-3d', {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'back.out(1.3)',
    }, '-=0.4')

    tl.to('.flap-left', { rotationY: -18, duration: 0.5, ease: 'power2.out' }, '-=0.3')
    tl.to('.flap-right', { rotationY: 18, duration: 0.5, ease: 'power2.out' }, '-=0.4')

    tl.to('.wax-seal', {
      scale: 1,
      rotation: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.5)',
    }, '-=0.1')

    tl.to('.env-hint', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
  }, [])

  return (
    <div className="envelope-3d relative" style={{ width: 380, height: 260, transformStyle: 'preserve-3d' }}>
      {/* Back body */}
      <div
        className="absolute inset-0 rounded-md"
        style={{
          background: 'linear-gradient(165deg, #C4A882 0%, #B89B7A 25%, #A8845F 55%, #9A7B5B 80%, #8A6B4B 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.12)',
          zIndex: 1,
        }}
      />

      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 rounded-md pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundSize: '128px',
          zIndex: 2,
        }}
      />

      {/* Stitching */}
      <div
        className="absolute rounded-sm pointer-events-none"
        style={{
          top: 6, left: 6, right: 6, bottom: 6,
          border: '1px dashed rgba(255,255,255,0.07)',
          zIndex: 2,
        }}
      />

      {/* Left flap */}
      <div
        className="flap-left absolute top-0 left-0 overflow-hidden"
        style={{
          width: '50%',
          height: '70%',
          transformOrigin: 'left center',
          transformStyle: 'preserve-3d',
          zIndex: 3,
          clipPath: 'polygon(0 0, 100% 30%, 60% 100%, 0 80%)',
          background: 'linear-gradient(135deg, #C4A882 0%, #B89B7A 30%, #A8845F 80%, #8A6B4B 100%)',
        }}
      />

      {/* Right flap */}
      <div
        className="flap-right absolute top-0 right-0 overflow-hidden"
        style={{
          width: '50%',
          height: '70%',
          transformOrigin: 'right center',
          transformStyle: 'preserve-3d',
          zIndex: 3,
          clipPath: 'polygon(100% 0, 0 30%, 40% 100%, 100% 80%)',
          background: 'linear-gradient(225deg, #C4A882 0%, #B89B7A 30%, #A8845F 80%, #8A6B4B 100%)',
        }}
      />

      {/* Top flap */}
      <div
        className="flap-top absolute top-0 left-0"
        style={{
          width: '100%',
          height: '55%',
          transformOrigin: 'top center',
          transformStyle: 'preserve-3d',
          zIndex: 6,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
            borderRadius: '4px 4px 0 0',
            background: 'linear-gradient(180deg, #B89B7A 0%, #A88A6A 40%, #A8845F 100%)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        />
      </div>

      {/* Front pocket */}
      <div
        className="absolute bottom-0 left-0 rounded-b-md overflow-hidden"
        style={{
          width: '100%',
          height: '60%',
          zIndex: 5,
          background: 'linear-gradient(175deg, #CCA87A 0%, #C4A484 30%, #A8845F 70%, #8A6B4B 100%)',
          boxShadow: 'inset 0 2px 6px rgba(255,255,255,0.12), inset 0 -2px 8px rgba(0,0,0,0.08)',
        }}
      >
        {/* Monogram */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading text-2xl font-bold tracking-[4px] opacity-15 text-white">
            {wedding.couple.monogram}
          </span>
        </div>
      </div>

      {/* Light ray */}
      <div
        className="envelope-light absolute pointer-events-none"
        style={{
          top: '20%',
          left: '30%',
          width: '40%',
          height: '60%',
          background: 'radial-gradient(ellipse, rgba(255,253,249,0.5) 0%, transparent 70%)',
          zIndex: 7,
        }}
      />

      {/* Wax Seal */}
      <div
        className="wax-seal absolute z-10 cursor-pointer"
        style={{
          bottom: '28%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 62,
          height: 62,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #D4725F 0%, #C45C4A 20%, #A04030 50%, #7A2E20 75%, #5A1E10 100%)',
          boxShadow: '0 4px 12px rgba(90,30,16,0.5), inset 0 -3px 6px rgba(0,0,0,0.25), inset 0 3px 6px rgba(212,114,95,0.2)',
        }}
      >
        {/* Seal rings */}
        <div
          className="absolute rounded-full"
          style={{
            top: 4, left: 4, right: 4, bottom: 4,
            border: '2px solid rgba(255,200,180,0.2)',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.15)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: 9, left: 9, right: 9, bottom: 9,
            border: '1px solid rgba(255,200,180,0.15)',
          }}
        />
        {/* Seal text */}
        <div className="absolute inset-0 flex items-center justify-center gap-[2px] z-10">
          <span className="font-heading text-sm font-bold text-white/90" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
            {wedding.couple.bride[0]}
          </span>
          <span className="font-heading text-xs italic text-white/80" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
            &amp;
          </span>
          <span className="font-heading text-sm font-bold text-white/90" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
            {wedding.couple.groom[0]}
          </span>
        </div>
        {/* Seal fragments (for break animation) */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="seal-fragment absolute"
            style={{
              width: 12 + i * 3,
              height: 12 + i * 3,
              background: 'radial-gradient(circle, #C45C4A, #7A2E20)',
              borderRadius: '30% 70% 50% 40%',
              top: `${20 + i * 15}%`,
              left: `${15 + i * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Letter inside */}
      <div
        className="envelope-letter absolute"
        style={{
          top: 15,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 320,
          height: 210,
          zIndex: 2,
          opacity: 0,
        }}
      >
        <div
          className="w-full h-full rounded-sm p-6 text-center flex flex-col items-center justify-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #FFFEF9 0%, #FFF9F0 40%, #FFF5E8 100%)',
            boxShadow: '0 3px 15px rgba(0,0,0,0.1), inset 0 0 40px rgba(212,165,116,0.04)',
            border: '1px solid rgba(200,180,150,0.2)',
          }}
        >
          {/* Inner border */}
          <div
            className="absolute rounded-sm pointer-events-none"
            style={{
              top: 8, left: 8, right: 8, bottom: 8,
              border: '1px solid rgba(212,165,116,0.12)',
            }}
          />
          <p className="font-body text-sm italic text-warm-gray-light tracking-wide mb-1 relative z-10">
            Ihr seid herzlich eingeladen zur Hochzeit von
          </p>
          <h1 className="font-script text-4xl text-charcoal my-1 relative z-10" style={{ textShadow: '0 1px 0 rgba(255,255,255,0.5)' }}>
            {wedding.couple.fullName}
          </h1>
          <div className="text-gold text-lg my-1 relative z-10">✿</div>
          <p className="font-heading text-base text-amber tracking-[3px] font-medium relative z-10">
            {wedding.date.display}
          </p>
        </div>
      </div>
    </div>
  )
}
