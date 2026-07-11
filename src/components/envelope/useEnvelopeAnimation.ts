import gsap from 'gsap'

export function useEnvelopeAnimation(onComplete: () => void) {
  let isOpen = false

  const openEnvelope = () => {
    if (isOpen) return
    isOpen = true

    const tl = gsap.timeline({ onComplete })

    // Hide hint + logo
    tl.to(['.env-hint', '.env-logo'], {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    })

    // Seal: pulse, then shatter
    tl.to('.envelope-seal', {
      scale: 1.15,
      duration: 0.2,
      ease: 'power2.in',
    })

    tl.to('.envelope-seal', {
      scale: 0,
      rotation: 30,
      opacity: 0,
      duration: 0.35,
      ease: 'power3.in',
    })

    // Seal fragments scatter
    tl.to('.seal-frag', {
      opacity: 0,
      scale: 0.3,
      x: (i: number) => [80, -70, 90, -85, 60][i] || 50,
      y: (i: number) => [-40, -55, -25, -50, -35][i] || -30,
      rotation: (i: number) => (i % 2 === 0 ? 200 : -200),
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.04,
    }, '-=0.25')

    // Cross-fade: closed → open envelope
    tl.to('.envelope-closed', {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.inOut',
    }, '-=0.1')

    tl.to('.envelope-open', {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.inOut',
    }, '-=0.4')

    // Letter rises from inside
    tl.to('.envelope-letter-img', {
      opacity: 1,
      y: -160,
      duration: 1.0,
      ease: 'power2.out',
    }, '-=0.1')

    // Slight scale-up of letter
    tl.to('.envelope-letter-img', {
      scale: 1.08,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.6')

    // Pause for reading
    tl.to({}, { duration: 1.0 })

    // Petal explosion
    tl.call(() => { spawnPetals() }, undefined, '-=0.8')

    // Everything fades out
    tl.to('.envelope-scene', {
      opacity: 0,
      scale: 0.92,
      duration: 0.7,
      ease: 'power2.in',
    })

    tl.to('#envelope-overlay', {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
    }, '-=0.3')
  }

  return { openEnvelope }
}

function spawnPetals() {
  const container = document.getElementById('petals-container')
  if (!container) return
  container.innerHTML = ''

  const colors = ['#C4A5A5', '#C9A96E', '#E8E2DA', '#D4B8B8', '#B8956A', '#D4A5A5']
  const count = window.innerWidth < 768 ? 30 : 50

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div')
    const size = 8 + Math.random() * 16
    const color = colors[Math.floor(Math.random() * colors.length)]
    const shape = Math.random() > 0.4
      ? `border-radius: ${40 + Math.random() * 20}% ${60 - Math.random() * 20}% ${40 + Math.random() * 20}% ${60 - Math.random() * 20}%;`
      : `border-radius: 50% 0 50% 0;`

    el.style.cssText = `
      position: absolute; width: ${size}px; height: ${size * 0.7}px;
      background: ${color}; ${shape}
      opacity: 0; pointer-events: none;
    `
    container.appendChild(el)

    const angle = (Math.random() - 0.5) * 240
    const dist = 100 + Math.random() * 300
    const rot = Math.random() * 600 - 300
    const delay = Math.random() * 0.5

    gsap.set(el, { x: 0, y: 0, opacity: 0, scale: 0 })

    gsap.to(el, {
      x: Math.cos(angle * Math.PI / 180) * dist,
      y: Math.sin(angle * Math.PI / 180) * dist - 80,
      opacity: 0.85,
      scale: 0.8 + Math.random() * 0.5,
      rotation: rot,
      duration: 0.9 + Math.random() * 0.7,
      delay,
      ease: 'power2.out',
    })

    gsap.to(el, {
      y: `+=${200 + Math.random() * 300}`,
      opacity: 0,
      rotation: `+=${Math.random() * 180}`,
      duration: 1.2 + Math.random() * 1,
      delay: delay + 0.5,
      ease: 'power1.in',
    })
  }

  // Golden sparkles
  for (let i = 0; i < 25; i++) {
    const spark = document.createElement('div')
    const size = 2 + Math.random() * 4
    spark.style.cssText = `
      position: absolute; width: ${size}px; height: ${size}px;
      background: #C9A96E; border-radius: 50%; opacity: 0; pointer-events: none;
      box-shadow: 0 0 ${size * 3}px ${size}px rgba(201,169,110,0.4);
    `
    container.appendChild(spark)

    const angle = Math.random() * 360
    const dist = 60 + Math.random() * 220

    gsap.set(spark, { x: 0, y: 0, opacity: 0, scale: 0 })

    gsap.to(spark, {
      x: Math.cos(angle * Math.PI / 180) * dist,
      y: Math.sin(angle * Math.PI / 180) * dist,
      opacity: 1,
      scale: 1,
      duration: 0.3 + Math.random() * 0.3,
      delay: Math.random() * 0.4,
      ease: 'power2.out',
    })

    gsap.to(spark, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      delay: 0.25 + Math.random() * 0.4,
      ease: 'power2.in',
    })
  }
}
