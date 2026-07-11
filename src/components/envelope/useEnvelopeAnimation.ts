import { useRef, useCallback } from 'react'
import gsap from 'gsap'

export function useEnvelopeAnimation(onComplete: () => void) {
  const isOpenRef = useRef(false)

  const openEnvelope = useCallback(() => {
    if (isOpenRef.current) return
    isOpenRef.current = true

    const tl = gsap.timeline({ onComplete })

    // Hide hint + logo
    tl.to(['.env-hint', '.env-logo'], {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    })

    // Seal breaks
    tl.to('.wax-seal', {
      scale: 1.3,
      duration: 0.15,
      ease: 'power2.in',
    })

    tl.to('.wax-seal', {
      scale: 0,
      rotation: 45,
      opacity: 0,
      duration: 0.3,
      ease: 'power3.in',
    })

    // Seal fragments fly out
    tl.to('.seal-fragment', {
      opacity: 0,
      scale: 0,
      x: (i: number) => (i % 2 === 0 ? 60 + i * 15 : -(60 + i * 15)),
      y: (i: number) => -30 - i * 10,
      rotation: (i: number) => (i % 2 === 0 ? 180 : -180),
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.03,
    }, '-=0.2')

    // Side flaps open
    tl.to('.flap-left', {
      rotationY: -70,
      duration: 0.6,
      ease: 'power2.inOut',
    }, '-=0.3')

    tl.to('.flap-right', {
      rotationY: 70,
      duration: 0.6,
      ease: 'power2.inOut',
    }, '-=0.5')

    // Top flap opens
    tl.to('.flap-top', {
      rotationX: -180,
      duration: 0.9,
      ease: 'power2.inOut',
    }, '-=0.3')

    // Light ray from inside
    tl.to('.envelope-light', {
      opacity: 0.6,
      duration: 0.4,
      ease: 'power2.out',
    }, '-=0.5')

    // Pause
    tl.to({}, { duration: 0.3 })

    // Letter rises
    tl.set('.envelope-letter', { opacity: 1, zIndex: 10 })

    tl.to('.envelope-letter', {
      y: -240,
      duration: 1.1,
      ease: 'power2.out',
    })

    tl.to('.envelope-letter', {
      scale: 1.12,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.6')

    // Pause for reading
    tl.to({}, { duration: 1.2 })

    // Petal explosion
    tl.call(() => {
      createPetals()
    })

    // Everything fades
    tl.to('.envelope-3d', {
      scale: 0.85,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.in',
    })

    tl.to('#envelope-overlay', {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
    }, '-=0.3')
  }, [onComplete])

  const createPetals = () => {
    const container = document.getElementById('petals-container')
    if (!container) return
    container.innerHTML = ''

    const colors = ['#C4A5A5', '#C9A96E', '#E8E2DA', '#D4B8B8', '#B8956A']
    const count = window.innerWidth < 768 ? 35 : 55

    for (let i = 0; i < count; i++) {
      const petal = document.createElement('div')
      const size = 8 + Math.random() * 14
      const color = colors[Math.floor(Math.random() * colors.length)]

      petal.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: ${Math.random() > 0.5 ? '50% 0 50% 0' : '0 50% 0 50%'};
        opacity: 0;
        pointer-events: none;
      `
      container.appendChild(petal)

      const angle = (Math.random() - 0.5) * 220
      const dist = 120 + Math.random() * 280
      const rot = Math.random() * 720 - 360
      const delay = Math.random() * 0.4

      gsap.set(petal, { x: 0, y: 0, opacity: 0, scale: 0 })

      gsap.to(petal, {
        x: Math.cos((angle * Math.PI) / 180) * dist,
        y: Math.sin((angle * Math.PI) / 180) * dist - 60,
        opacity: 0.9,
        scale: 1,
        rotation: rot,
        duration: 1 + Math.random() * 0.8,
        delay,
        ease: 'power2.out',
      })

      gsap.to(petal, {
        y: `+=${250 + Math.random() * 250}`,
        opacity: 0,
        rotation: `+=${Math.random() * 200}`,
        duration: 1.3 + Math.random() * 1,
        delay: delay + 0.5,
        ease: 'power1.in',
      })
    }

    // Gold sparkle particles
    for (let i = 0; i < 20; i++) {
      const spark = document.createElement('div')
      const size = 3 + Math.random() * 4
      spark.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: #C9A96E;
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        box-shadow: 0 0 ${size * 2}px #C9A96E;
      `
      container.appendChild(spark)

      const angle = Math.random() * 360
      const dist = 80 + Math.random() * 200

      gsap.set(spark, { x: 0, y: 0, opacity: 0, scale: 0 })

      gsap.to(spark, {
        x: Math.cos((angle * Math.PI) / 180) * dist,
        y: Math.sin((angle * Math.PI) / 180) * dist,
        opacity: 1,
        scale: 1,
        duration: 0.4 + Math.random() * 0.3,
        delay: Math.random() * 0.3,
        ease: 'power2.out',
      })

      gsap.to(spark, {
        opacity: 0,
        scale: 0,
        duration: 0.6,
        delay: 0.3 + Math.random() * 0.4,
        ease: 'power2.in',
      })
    }
  }

  return { openEnvelope, isOpenRef }
}
