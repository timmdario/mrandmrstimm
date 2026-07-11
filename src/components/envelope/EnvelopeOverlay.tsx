import { Envelope3D } from './Envelope3D'
import { useEnvelopeAnimation } from './useEnvelopeAnimation'

interface EnvelopeOverlayProps {
  onComplete: () => void
}

export function EnvelopeOverlay({ onComplete }: EnvelopeOverlayProps) {
  const { openEnvelope } = useEnvelopeAnimation(onComplete)
  const base = import.meta.env.BASE_URL

  return (
    <div
      id="envelope-overlay"
      className="fixed inset-0 w-screen h-screen flex items-center justify-center z-[1000] cursor-pointer overflow-hidden"
      style={{ background: '#F5F0EA' }}
      onClick={openEnvelope}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          openEnvelope()
        }
      }}
      tabIndex={0}
      role="button"
      aria-label="Briefumschlag öffnen"
    >
      {/* Botanical background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${base}assets/botanical-bg.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6,
        }}
      />

      {/* Soft vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(245,240,234,0.6) 100%)',
        }}
      />

      <Envelope3D />

      {/* Hint */}
      <p
        className="env-hint absolute bottom-16 font-body text-base text-warm-gray tracking-wide"
        style={{ animation: 'hintPulse 2.5s ease-in-out infinite' }}
      >
        Klick zum Öffnen
      </p>
    </div>
  )
}
